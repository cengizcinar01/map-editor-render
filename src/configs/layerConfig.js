module.exports.layerScaleZoomLevel = {
  default: { 8: 0.6, 11: 0.8, 12: 1.0, 14: 1.2, 15: 1.4, 16: 1.6, 17: 1.8 },
  second: { 8: 0.2, 12: 0.3, 15: 0.5, 17: 0.7 },
};

module.exports.layersToScale = {
  aeroway_line: "default",
  railway: "default",
  motorway: "default",
  motorway_link: "default",
  trunk: "default",
  trunk_link: "default",
  primary: "default",
  primary_link: "default",
  secondary: "default",
  secondary_link: "default",
  tertiary: "default",
  tertiary_link: "default",
  residential: "second",
  pedestrian_line: "default",
  unclassified_road: "default",
  ski_lifts: "default",
};

module.exports.scaleFactors = {
  A1: 1,
  "A1@L": 0.9,
  A2: 0.9,
  "A2@L": 0.85,
  A3: 0.8,
  "A3@L": 0.75,
  A4: 0.7,
  "A4@L": 0.6,
  "50x70": 0.9,
  "50x70@L": 0.85,
  "11x14@L": 0.65,
};
