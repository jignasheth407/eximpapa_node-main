const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

o = null;
u = null;

function authController() {
  return {
    async signup(req, res) {
      try {
        const {
          fname,
          lname,
          email,
          password,
          repassword,
          mobilenumber,
          countrycode,
        } = req.body;
        if (
          !fname ||
          !lname ||
          !email ||
          !password ||
          !repassword ||
          !mobilenumber
        ) {
          return res.status(422).json("Please Enter All Required Fields");
        }
        us = await User.findOne({
          email,
        });

        if (us) {
          return res.status(422).json({ message: "User is already Exist" });
        }
        if (password != repassword) {
          return res
            .status(422)
            .json({ message: "Password and Re-Password Not Matched" });
        }
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        const u = new User({
          fname,
          lname,
          email,
          password: hash,
          mobilenumber,
          countrycode,
        });
        u.save()
          .then((result) => {
            return res
              .status(200)
              .json({ message: "User Register Succesfully" });
          })
          .catch((err) => {
            return res
              .status(422)
              .json({ error: "Error in Registration" + err });
          });
      } catch (err) {
        return res.json({ error: err });
      }
    },
    async login(req, res) {
      try {
        const { email, password } = req.body;
        if (!email || !password) {
          return res
            .status(422)
            .json({ message: "Please Enter All Required Fields" });
        }
        const u = await User.findOne({
          email,
        });
        if (!u) {
          return res.json(422).json({ message: "User Not Found" });
        }

        com = await bcrypt.compare(password, u.password);

        if (!com) {
          return res
            .status(422)
            .json({ message: "Please Enter Correct Password" });
        }

        const token = jwt.sign(
          {
            id: u._id,
            fname: u.fname,
            lname: u.lname,
            email: u.email,
            mobilenumber: u.mobilenumber,
            countrycode: u.countrycode,
            role: u.role,
            iscomplete: u.iscomplete,
            followers: u.followers,
            following: u.following,
          },
          process.env.SECRET_KEY
        );
        res.status(200).header("x-auth", token).send(token);
      } catch (err) {
        return res.status(422).json({ error: err });
      }
    },
    async getEmail(req, res) {
      try {
        const { email } = req.body;

        if (!email) {
          return res.status(422).json({ message: "Please Enter Email" });
        }
        u = await User.findOne({
          email,
        });
        if (!u) {
          return res.status(422).json({ message: "User Not Found" });
        }
        o = otpGenerator.generate(6, {
          upperCase: false,
          specialChars: false,
          alphabets: false,
        });

        let nodeTransporte = nodemailer.createTransport({
          service: "gmail",
          secure: false,
          auth: {
            user: process.env.USER,
            pass: process.env.PASS,
          },
        });
        let mailDetails = {
          from: process.env.FROM,
          to: "rajat.brinfotech@gmail.com",
          subject: "Forget Password Authentication",
          text: `OTP: ${o}`,
        };
        nodeTransporte.sendMail(mailDetails, function (err, data) {
          if (err) return res.status(422).json({ error: err });
          else {
            return res.status(200).json({
              message: "Mail Send Successfully"
            });
          }
        });
      } catch (err) {
        return res.status(422).json({ error: err });
      }
    },
    verifyOtp(req, res) {
      if (!u) {
        return res.status(422).json({ message: "User Not Found" });
      }
      const { otp } = req.body;

      if (o != otp) {
        return res.status(422).json({ message: "Invalid OTP" });
      } else {
        return res.status(200).json({ message: "OTP Matched Succesfully" });
      }
    },
    async changePassword(req, res) {
      try {
        if (!u) {
          return res.status(422).json({ message: "User Not Found" });
        }
        if (!o) {
          return res.status(422).json({ message: "OTP Not Verified" });
        }
        const { password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        up = await u.updateOne({ password: hash });
        return res.status(200).json({message:"Password Changed Succesfully"+up});
      } catch (err) {
        return res.status(422).json({error:err});
      }
    },
  };
}

module.exports = authController;
