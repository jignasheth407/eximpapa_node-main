const User = require("../models/user-model");

function user() {
  return {
    async completeprofile(req, res) {
      _id = req.user.id;
      const x = req.body;
      u=null;
      try {
        if (x.profile == "exporter") {
          u= await User.findByIdAndUpdate(
            _id,
            {
              fname: x.fname,
              lname: x.lname,
              email: x.email,
              mobilenumber: x.mobilenumber,
              city: x.city,
              country: x.country,
              profile: x.profile,
              companyname: x.companyname,
              position: x.position,
              type: x.type,
              companylocationcity: x.companylocationcity,
              companylocationcountry: x.companylocationcountry,
              contactinfo: x.contactinfo,
              contactemail: x.contactemail,
              productlist: x.productlist,
              iscomplete: true,
            },
            {
              new: true,
            });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "importer") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            productlist: x.productlist,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "farmer") {
          u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            cropname: x.cropname,
            minimumproductlistioncapacity: x.minimumproductlistioncapacity,
            availableland: x.availableland,
            countryname: x.countryname,
            cityname: x.cityname,
            area: x.area,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "manufacturer") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            productlist: x.productlist,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "cha") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            servicesincountry: x.servicesincountry,
            coveredportname: x.coveredportname,
            type: x.type,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "inspection") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            productlist: x.productlist,
            serveincity: x.serveincity,
            serveincountry: x.serveincountry,
            approxprice: x.approxprice,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "freightforwarder") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            servicesincountry: x.servicesincountry,
            routefromcitytocity: x.routefromcitytocity,
            schedule: x.schedule,
            loadingcapacity: x.loadingcapacity,
            approxprice: x.approxprice,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "shippingline") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            servicesincountry: x.servicesincountry,
            coveredportname: x.coveredportname,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "warehouse") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            productlist: x.productlist,
            holdingcapacity: x.holdingcapacity,
            approxcharges: x.approxcharges,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "broker") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            productlist: x.productlist,
            countryselected: x.countryselected,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "insuranceprovider") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            productlist: x.productlist,
            serveinthecity: x.serveinthecity,
            serveinthecountry: x.serveinthecountry,
            approxcharges: x.approxcharges,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ error: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "finance") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            productlist: x.productlist,
            serveinthecity: x.serveinthecity,
            serveinthecountry: x.serveinthecountry,
            raisefund: x.raisefund,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      try {
        if (x.profile == "investor") {
           u = await User.findByIdAndUpdate(_id, {
            fname: x.fname,
            lname: x.lname,
            email: x.email,
            mobilenumber: x.mobilenumber,
            city: x.city,
            country: x.country,
            profile: x.profile,
            companyname: x.companyname,
            position: x.position,
            companylocationcity: x.companylocationcity,
            companylocationcountry: x.companylocationcountry,
            contactinfo: x.contactinfo,
            contactemail: x.contactemail,
            productlist: x.productlist,
            serveinthecity: x.serveinthecity,
            serveinthecountry: x.serveinthecountry,
            raisefund: x.raisefund,
            iscomplete: true,
          },{
            new:true
          });
          if (!u) {
            return res.status(422).json({ message: "User Not Found" });
          }
        }
      } catch (err) {
        return res.status(422).json({ error: err });
      }
      return res.status(200).send({iscomplete:u.iscomplete});
    },
  };
}
module.exports = user;
