const axios = require("axios");
const { layersToScale } = require("../configs/layerConfig");

exports.axiosRequestAdapter = async (req, cb) => {
  try {
    const { data } = await axios.get(req.url, { responseType: "arraybuffer" });
    cb(null, { data });
  } catch (err) {
    cb(err);
  }
};

exports.scaleLayerZoomLevel = (original, scaleFactor) =>
  Object.fromEntries(
    Object.entries(original).map(([key, value]) => [
      key,
      Object.fromEntries(
        Object.entries(value).map(([zoom, scale]) => [
          zoom,
          scale * scaleFactor,
        ])
      ),
    ])
  );

exports.adjustStyleJson = (styleJson, dpi, dynamicLayerScaleZoomLevel) => {
  if (!styleJson.layers) return styleJson;
  return {
    ...styleJson,
    layers: styleJson.layers.map((layer) => {
      const layerScale =
        dynamicLayerScaleZoomLevel[layersToScale[layer.id] || "default"];
      const stops = layer.paint?.["line-width"]?.stops;
      return stops
        ? {
            ...layer,
            paint: {
              ...layer.paint,
              "line-width": {
                ...layer.paint["line-width"],
                stops: stops.map(([zoom, width]) => [
                  zoom,
                  width * (dpi / 96) * (layerScale[zoom] || 1),
                ]),
              },
            },
          }
        : layer;
    }),
  };
};
