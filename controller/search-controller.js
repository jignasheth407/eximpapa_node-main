const User = require("../models/user-model");

function searching() {
  return {
    async search(req, res) {
      try {
        const { type } = req.query;
        if (type == "latest") {
          const u = await User.find().sort({ updatedAt: -1 });
          if (!u) {
            return res.send({ message: "No Latest Post" });
          }
          return res.send(u);
        }
        if (type == "exporter") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No Exporter Found" });
          }
          return res.send(u);
        }
        if (type == "warehouse") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No Warehouse Found" });
          }
          return res.send(u);
        }
        if (type == "financer") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No Financer Found" });
          }
          return res.send(u);
        }
        if (type == "insuranceprovider") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res
              .send({ message: "No Insurance provider Found" })
              .select(
                "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
              );
          }
          return res.send(u);
        }
        if (type == "inspection") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No Inspection Found" });
          }
          return res.send(u);
        }
        if (type == "insurance") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No Insurance Found" });
          }
          return res.send(u);
        }
        if (type == "farmer") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No farmer Found" });
          }
          return res.send(u);
        }
        if (type == "cha") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No cha Found" });
          }
          return res.send(u);
        }
        if (type == "shippingline") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No Shippingline Found " });
          }
          return res.send(u);
        }
        if (type == "freightforwarder") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No Freightforwarder Found " });
          }
          return res.send(u);
        }
        if (type == "broker") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No Broker Found " });
          }
          return res.send(u);
        }
        if (type == "investor ") {
          const u = await User.find({ profile: req.query.type }).select(
            "-iscomplete -followers -following -_id -password -createdAt -updatedAt -__v"
          );
          if (!u) {
            return res.send({ message: "No Investor Found " });
          }
          return res.send(u);
        }
      } catch (err) {
        return res.send({ error: err });
      }
    },
  };
}

module.exports = searching;
