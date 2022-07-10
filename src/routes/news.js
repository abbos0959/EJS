const express = require("express");
const newsRouter = express.Router();
const axios = require("axios");

newsRouter.get("", async (req, res) => {
   try {
      const newApi = await axios.get(
         `https://raddy.dev/wp-json/wp/v2/posts/`
      );
      res.render("news", { articles: newApi.data });
   } catch (error) {
      console.log("errorcha");
   }
});
module.exports = newsRouter;
