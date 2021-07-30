const Postproductmodel = require("../models/post-product-model");

function postproducts() {
  return {
    postproduct(req, res) {
      let newProduct = new Postproductmodel({
        user_id: req.user.id,
        productname: req.body.productname,
        availableunit: req.body.availableunit,
        availableqty: req.body.availableqty,
        countryoforigin: req.body.countryoforigin,
        offerprice: req.body.offerprice,
        other: req.body.other,
        productimage: req.file.path,
      });

      newProduct
        .save()
        .then((result) => {
          return res.send(result);
        })
        .catch((err) => {
          return res.send(err);
        });
    },
  };
}
module.exports = postproducts;
