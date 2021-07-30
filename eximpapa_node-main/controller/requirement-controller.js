const Requirementmodel = require("../models/requirement-model");

function requirement() {
  return {
   postrequiremets(req, res) {
      const {
        minimumunit,
        minimumqty,
        portofdischarge,
        targetprice,
        requiredpricetype,
        paymentterms,
        requiredquotenos,
        origin,
      } = req.body;

      const requirement = new Requirementmodel({
        userid: req.user.id,
        minimumunit,
        minimumqty,
        portofdischarge,
        targetprice,
        requiredpricetype,
        paymentterms,
        requiredquotenos,
        origin,
      });
      requirement
        .save()
        .then((result) => {
          return res.send({ message: "Requirement Added" });
        })
        .catch((err) => {
          return res.send({ err: err });
        });
    },
  };
}

module.exports = requirement;
