// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Generator = require("../../builder/modules/Generator.bs.js");

var id = "demo";

var name = "Demo";

var images = [{
    id: "Grid",
    url: require("./images/Grid.png")
  }];

var textures = [
  {
    id: "Creeper",
    url: require("./textures/Creeper.png"),
    standardWidth: 64,
    standardHeight: 64
  },
  {
    id: "Steve",
    url: require("./textures/Steve.png"),
    standardWidth: 64,
    standardHeight: 64
  },
  {
    id: "Steve256",
    url: require("./textures/Steve256.png"),
    standardWidth: 256,
    standardHeight: 256
  }
];

function drawGrid(param) {
  for(var y = 0; y <= 5; ++y){
    for(var x = 0; x <= 3; ++x){
      Generator.drawImage("Grid", [
            (x << 7),
            (y << 7)
          ]);
    }
  }
  
}

function drawPage(texture, src) {
  drawGrid(undefined);
  var dst = function (gridx, gridy) {
    return [
            (gridx << 7) + 32 | 0,
            (gridy << 7) + 32 | 0,
            64,
            64
          ];
  };
  Generator.drawTexture(texture, src, dst(0, 0), undefined, undefined, 0.0, undefined);
  Generator.drawTexture(texture, src, dst(1, 0), undefined, undefined, 90.0, undefined);
  Generator.drawTexture(texture, src, dst(2, 0), undefined, undefined, 180.0, undefined);
  Generator.drawTexture(texture, src, dst(3, 0), undefined, undefined, 270.0, undefined);
  Generator.drawTexture(texture, src, dst(0, 1), "Horizontal", undefined, 0.0, undefined);
  Generator.drawTexture(texture, src, dst(1, 1), "Horizontal", undefined, 90.0, undefined);
  Generator.drawTexture(texture, src, dst(2, 1), "Horizontal", undefined, 180.0, undefined);
  Generator.drawTexture(texture, src, dst(3, 1), "Horizontal", undefined, 270.0, undefined);
  Generator.drawTexture(texture, src, dst(0, 2), "Vertical", undefined, 0.0, undefined);
  Generator.drawTexture(texture, src, dst(1, 2), "Vertical", undefined, 90.0, undefined);
  Generator.drawTexture(texture, src, dst(2, 2), "Vertical", undefined, 180.0, undefined);
  Generator.drawTexture(texture, src, dst(3, 2), "Vertical", undefined, 270.0, undefined);
  Generator.drawTexture(texture, src, dst(0, 3), undefined, undefined, 45.0, undefined);
  Generator.drawTexture(texture, src, dst(1, 3), undefined, undefined, 90.0, undefined);
  Generator.drawTexture(texture, src, dst(2, 3), undefined, undefined, 135.0, undefined);
  Generator.drawTexture(texture, src, dst(3, 3), undefined, undefined, 180.0, undefined);
  Generator.drawTexture(texture, src, dst(0, 4), "Horizontal", undefined, 45.0, undefined);
  Generator.drawTexture(texture, src, dst(1, 4), "Horizontal", undefined, 90.0, undefined);
  Generator.drawTexture(texture, src, dst(2, 4), "Horizontal", undefined, 135.0, undefined);
  Generator.drawTexture(texture, src, dst(3, 4), "Horizontal", undefined, 180.0, undefined);
  Generator.drawTexture(texture, src, dst(0, 5), "Vertical", undefined, 45.0, undefined);
  Generator.drawTexture(texture, src, dst(1, 5), "Vertical", undefined, 90.0, undefined);
  Generator.drawTexture(texture, src, dst(2, 5), "Vertical", undefined, 135.0, undefined);
  return Generator.drawTexture(texture, src, dst(3, 5), "Vertical", undefined, 180.0, undefined);
}

function script(param) {
  Generator.usePage("Page 1");
  drawPage("Steve", [
        8,
        8,
        8,
        8
      ]);
  Generator.usePage("Page 2");
  drawPage("Steve256", [
        32,
        32,
        32,
        32
      ]);
  Generator.usePage("Page 3");
  drawGrid(undefined);
  var dw = 64;
  var dh = 24;
  var src = [
    8,
    11,
    8,
    3
  ];
  var dst = function (gridx, gridy) {
    return [
            ((gridx << 7) + 64 | 0) - (dw / 2 | 0) | 0,
            ((gridy << 7) + 64 | 0) - (dh / 2 | 0) | 0,
            dw,
            dh
          ];
  };
  var deg = 360.0 / 24;
  for(var row = 0; row <= 5; ++row){
    for(var col = 0; col <= 3; ++col){
      var factor = (row << 2) + col | 0;
      var rotate = deg * factor;
      Generator.drawTexture("Steve", src, dst(col, row), undefined, undefined, rotate, undefined);
    }
  }
  
}

var generator = {
  id: id,
  name: name,
  images: images,
  textures: textures,
  script: script
};

exports.id = id;
exports.name = name;
exports.images = images;
exports.textures = textures;
exports.drawGrid = drawGrid;
exports.drawPage = drawPage;
exports.script = script;
exports.generator = generator;
/* images Not a pure module */