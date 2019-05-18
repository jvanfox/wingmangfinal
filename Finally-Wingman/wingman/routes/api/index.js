const router = require("express").Router();

const userRoutes = require("./users");
const postRoutes = require("./posts");
const portfolioRoutes = require("./userPortfolio");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/portfolios", portfolioRoutes);


module.exports = router;
