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
