const Feedbackmodel = require("../models/feedback-model");

function feed() {
  return {
    feedback(req, res) {
      
      const { feedback } = req.body;
      const feed = new Feedbackmodel({
        feedback,
        user_id: req.user.id,
      });
      feed
        .save()
        .then(() => {
          return res.send({ message: "Feedback Recorded Succesfully" });
        })
        .catch((err) => {
          return res.send({ erorr: err });
        });
    },
  };
}

module.exports = feed;
