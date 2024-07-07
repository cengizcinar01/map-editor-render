const mbgl = require("@maplibre/maplibre-gl-native");
const axios = require("axios");
const sharp = require("sharp");
const mapUtils = require("../utils/mapUtils");
const serverConfig = require("../configs/serverConfig");
const { layerScaleZoomLevel } = require("../configs/layerConfig");

exports.getMap = async (req, res) => {
  const { lng, lat, zoom, mapWidth, mapHeight, style } = req.query;

  try {
    const styleURL = `${serverConfig.styleURL}/styles/${style}/style.json`;
    const { data } = await axios.get(styleURL);

    const adjustedData = mapUtils.adjustStyleJson(
      data,
      300,
      layerScaleZoomLevel
    );

    const map = new mbgl.Map({ request: mapUtils.axiosRequestAdapter });
    map.load(adjustedData);

    const { width, height } = { width: +mapWidth, height: +mapHeight };
    const buffer = await new Promise((resolve, reject) => {
      map.render(
        { zoom: +zoom, center: [+lng, +lat], width, height },
        (error, buffer) => {
          if (error) reject(error);
          else resolve(buffer);
        }
      );
    });

    const img = await sharp(buffer, { raw: { width, height, channels: 4 } })
      .sharpen()
      .png()
      .toBuffer();

    return res.type("png").send(img);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: error.message });
  }
};
