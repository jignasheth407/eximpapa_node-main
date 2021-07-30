const User = require("../models/user-model");

const Postproductmodel = require("../models/post-product-model");
function user() {
  return {
    profile(req, res) {
      User.findOne({ _id: req.params.id })
        .select("-password")
        .then((user) => {
          Postproductmodel.find({ user_id: req.params.id })
            .populate("user_id", "_id name")
            .exec((err, post) => {
              if (err) {
                return res.status(422).send({ error: err });
              }
              res.send({ user, post });
            });
        })
        .catch((err) => {
          return res.status(404).send({ message: "User Not Found" });
        });
    },
    async getpostproduct(req, res) {
      try {
        const post = await Postproductmodel.find({
          user_id: req.user.id,
        }).populate("user_id", "fname lname country -_id");
        if (!post) {
          return res.send({ message: "No Post Found" });
        }
        return res.send({ post: post });
      } catch (err) {
        return res.send({ erorr: err });
      }
    },
  
    userprofilepic(req, res) {
      User.findOneAndUpdate(
        { _id: req.user.id },
        {
          $set: {
            profileimage: req.file.path,
          },
        },
        {
          new:true
        }
      )
        .then((result) => {
          res.status(200).json({ result: result });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    },
    follow(req, res) {
      User.findByIdAndUpdate(
        { _id: req.body.followerId },
        { $push: { followers: req.user.id } },
        { new: true },
        (err, result) => {
          if (err) {
            return res.status(422).send({ error: err });
          }
          User.findByIdAndUpdate(
            req.user.id,
            {
              $push: { following: req.body.followerId },
            },
            {
              new: true,
            }
          )
            .select("-password -createdAt -updatedAt -__v -iscomplete")
            .then((result) => {
              return res.send({ result: result });
            })
            .catch((err) => {
              return res.status(422).send({ error: err });
            });
        }
      );
    },
    unfollow(req, res) {
      User.findByIdAndUpdate(
        { _id: req.body.unfollowerId },
        { $pull: { followers: req.user.id } },
        { new: true },
        (err, result) => {
          if (err) {
            return res.status(422).send({ error: err });
          }
          User.findByIdAndUpdate(
            req.user.id,
            {
              $pull: { following: req.body.unfollowerId },
            },
            {
              new: true,
            }
          )
            .select("-password -createdAt -updatedAt -__v -iscomplete")
            .then((result) => {
              return res.send({ result: result });
            })
            .catch((err) => {
              return res.status(422).send({ error: err });
            });
        }
      );
    },
  };
}

module.exports = user;
