const Postproductmodel = require("../models/post-product-model");
const User = require("../models/user-model");

function home() {
  return {
    async getallpostproduct(req, res) {
      try {
        const post = await Postproductmodel.find()
          .populate("user_id", "fname lname country _id")
          .populate("comments.user_id", "country city profile _id")
          .select("-createdAt -updatedAt -__v")
          .sort("-createdAt");
        if (!post) {
          return res.send({ message: "No Post Found" });
        }
        return res.send({ post: post });
      } catch (err) {
        return res.send({ error: err });
      }
    },
    async like(req, res) {
      const li = await Postproductmodel.findByIdAndUpdate(
        req.body.postId,
        {
          $push: { like: req.user.id },
        },
        {
          new: true,
        }
      ).select(
        "-productname -availableunit -availableqty -countryoforigin -offerprice -other -createdAt -updatedAt -__v -comments"
      );
      return res.send({ like: li });
    },
    async unlike(req, res) {
      const unlike = await Postproductmodel.findByIdAndUpdate(
        req.body.postId,
        {
          $pull: { like: req.user.id },
        },
        {
          new: true,
        }
      ).select(
        "-productname -availableunit -availableqty -countryoforigin -offerprice -other -createdAt -updatedAt -__v -comments"
      );
      return res.send({ unlike: unlike });
    },
    async comment(req, res) {
      const comments = {
        text: req.body.text,
        user_id: req.user.id,
      };
      const comment = await Postproductmodel.findByIdAndUpdate(
        req.body.postId,
        {
          $push: { comments: comments },
        },
        {
          new: true,
        }
      )
        .select(
          "-productname -availableunit -availableqty -countryoforigin -offerprice -other -createdAt -updatedAt -__v"
        )
        .populate("comments.user_id", "country city profile _id")
        .populate("user_id", "country city profile _id");
      return res.send({ comment: comment });
    },

    async followingpost(req, res) {
      try {
        const post = await Postproductmodel.find({
          user_id: { $in: req.user.following },
        })
          .populate("user_id", "fname lname country -_id")
          .populate("comments.user_id", "country city profile -_id");
        if (!post) {
          return res.send({ message: "No Post Found" });
        }
        return res.send({ post: post });
      } catch (err) {
        return res.send({ error: err });
      }
    },
    async getusers(req, res) {
      const u = await User.find().select("fname lname ");
      return res.send(u);
    },
  };
}

module.exports = home;
