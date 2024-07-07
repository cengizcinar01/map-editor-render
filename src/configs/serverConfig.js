require("dotenv").config();

const serverConfig = {
  port: process.env.PORT,
  styleURL: process.env.STYLE_URL,
};

module.exports = serverConfig;
