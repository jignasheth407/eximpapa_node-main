const authController = require("../controller/auth-controller");
const completeProfileController = require("../controller/complete-profile-controller");
const feedbackController = require("../controller/feedback-controller");
const requirementController = require("../controller/requirement-controller");
const homeController = require("../controller/home-controller");
const searchController = require("../controller/search-controller");
const postProductController = require("../controller/post-product-controller");
const profileController = require("../controller/profile-controller");
const auth = require("../middleware/auth-middleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./assets/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  //reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

function initRoutes(app) {
  app.post("/signup", authController().signup);
  app.post("/login", authController().login);
  app.post("/getemail", authController().getEmail);
  app.post("/verifyotp", authController().verifyOtp);
  app.put("/changepassword", authController().changePassword);
  app.put("/completeprofile",auth,completeProfileController().completeprofile);
  app.post("/requirements", auth, requirementController().postrequiremets);
  app.get("/search", auth, searchController().search);
  app.post("/feedback", auth, feedbackController().feedback);
  app.post("/postproduct",[auth, upload.single("image")],postProductController().postproduct);
  app.get("/getallpost", auth, homeController().getallpostproduct);
  app.put("/like", auth, homeController().like);
  app.put("/unlike", auth, homeController().unlike);
  app.put("/comment", auth, homeController().comment);
  app.get("/followingpost", auth, homeController().followingpost);
  app.get('/getusers',auth,homeController().getusers)
  app.get("/getpost", auth, profileController().getpostproduct);
  app.get("/profile/:id", auth, profileController().profile);
  app.put("/follow", auth, profileController().follow);
  app.put("/unfollow", auth, profileController().unfollow);
  app.put("/userprofilepic",[auth, upload.single("profileimage")],profileController().userprofilepic);

}

module.exports = initRoutes;
