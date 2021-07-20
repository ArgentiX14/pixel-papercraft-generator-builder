// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Builder = require("./Builder.bs.js");

function Generator$Markup$H2(Props) {
  var children = Props.children;
  return React.createElement("h2", {
              className: "mb-4 text-2xl font-bold"
            }, children);
}

var H2 = {
  make: Generator$Markup$H2
};

function Generator$Markup$H3(Props) {
  var children = Props.children;
  return React.createElement("h3", {
              className: "mb-4 font-bold"
            }, children);
}

var H3 = {
  make: Generator$Markup$H3
};

function Generator$Markup$LI(Props) {
  var children = Props.children;
  return React.createElement("li", undefined, children);
}

var LI = {
  make: Generator$Markup$LI
};

function Generator$Markup$UL(Props) {
  var children = Props.children;
  return React.createElement("ul", {
              className: "mb-4 ml-4 list-disc"
            }, children);
}

var UL = {
  make: Generator$Markup$UL
};

function Generator$Markup$OL(Props) {
  var children = Props.children;
  return React.createElement("ol", {
              className: "mb-4 ml-4 list-decimal"
            }, children);
}

var OL = {
  make: Generator$Markup$OL
};

function Generator$Markup$P(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "mb-4"
            }, children);
}

var P = {
  make: Generator$Markup$P
};

function Generator$Markup$A(Props) {
  var href = Props.href;
  var children = Props.children;
  return React.createElement("a", {
              className: "text-green-600 font-medium hover:underline",
              href: href
            }, children);
}

var A = {
  make: Generator$Markup$A
};

var Markup = {
  H2: H2,
  H3: H3,
  LI: LI,
  UL: UL,
  OL: OL,
  P: P,
  A: A
};

var model = {
  contents: Builder.Model.make(undefined)
};

function setModel(newModel) {
  model.contents = newModel;
  
}

function getModel(param) {
  return model.contents;
}

function defineRegionInput(region, callback) {
  model.contents = Builder.defineRegionInput(model.contents, region, callback);
  
}

function defineCustomStringInput(id, fn) {
  model.contents = Builder.defineCustomStringInput(model.contents, id, fn);
  
}

function getStringInputValue(id) {
  return Builder.getStringInputValue(model.contents, id);
}

function setStringInputValue(id, value) {
  model.contents = Builder.setStringInputValue(model.contents, id, value);
  
}

function defineBooleanInput(id, initial) {
  model.contents = Builder.defineBooleanInput(model.contents, id, initial);
  
}

function defineButtonInput(id, onClick) {
  model.contents = Builder.defineButtonInput(model.contents, id, onClick);
  
}

function setBooleanInputValue(id, value) {
  model.contents = Builder.setBooleanInputValue(model.contents, id, value);
  
}

function getBooleanInputValue(id) {
  return Builder.getBooleanInputValue(model.contents, id);
}

function defineSelectInput(id, options) {
  model.contents = Builder.defineSelectInput(model.contents, id, options);
  
}

function setSelectInputValue(id, value) {
  model.contents = Builder.setSelectInputValue(model.contents, id, value);
  
}

function getSelectInputValue(id) {
  return Builder.getSelectInputValue(model.contents, id);
}

function defineRangeInput(id, options) {
  model.contents = Builder.defineRangeInput(model.contents, id, options);
  
}

function getRangeInputValue(id) {
  return Builder.getRangeInputValue(model.contents, id);
}

function defineTextureInput(id, options) {
  model.contents = Builder.defineTextureInput(model.contents, id, options);
  
}

function defineText(text) {
  model.contents = Builder.defineText(model.contents, text);
  
}

function usePage(id) {
  model.contents = Builder.usePage(model.contents, id);
  
}

function drawTexture(id, source, dest, flipOpt, rotateLegacyOpt, rotateOpt, param) {
  var flip = flipOpt !== undefined ? flipOpt : "None";
  var rotateLegacy = rotateLegacyOpt !== undefined ? rotateLegacyOpt : 0.0;
  var rotate = rotateOpt !== undefined ? rotateOpt : 0.0;
  var rotate$1 = rotateLegacy !== 0.0 ? ({
        NAME: "Corner",
        VAL: rotateLegacy
      }) : (
      rotate !== 0.0 ? ({
            NAME: "Center",
            VAL: rotate
          }) : "None"
    );
  model.contents = Builder.drawTexture(model.contents, id, source, dest, flip, rotate$1, undefined);
  
}

function drawTextureLegacy(id, source, dest, flipOpt, rotateLegacyOpt, param) {
  var flip = flipOpt !== undefined ? flipOpt : "None";
  var rotateLegacy = rotateLegacyOpt !== undefined ? rotateLegacyOpt : 0.0;
  return drawTexture(id, [
              source.x,
              source.y,
              source.w,
              source.h
            ], [
              dest.x,
              dest.y,
              dest.w,
              dest.h
            ], flip, rotateLegacy, undefined, undefined);
}

function drawImage(id, position) {
  model.contents = Builder.drawImage(model.contents, id, position);
  
}

function hasImage(id) {
  return Builder.hasImage(model.contents, id);
}

function hasTexture(id) {
  return Builder.hasTexture(model.contents, id);
}

exports.Markup = Markup;
exports.model = model;
exports.setModel = setModel;
exports.getModel = getModel;
exports.defineRegionInput = defineRegionInput;
exports.defineCustomStringInput = defineCustomStringInput;
exports.getStringInputValue = getStringInputValue;
exports.setStringInputValue = setStringInputValue;
exports.defineBooleanInput = defineBooleanInput;
exports.defineButtonInput = defineButtonInput;
exports.setBooleanInputValue = setBooleanInputValue;
exports.getBooleanInputValue = getBooleanInputValue;
exports.defineSelectInput = defineSelectInput;
exports.setSelectInputValue = setSelectInputValue;
exports.getSelectInputValue = getSelectInputValue;
exports.defineRangeInput = defineRangeInput;
exports.getRangeInputValue = getRangeInputValue;
exports.defineTextureInput = defineTextureInput;
exports.defineText = defineText;
exports.usePage = usePage;
exports.drawTexture = drawTexture;
exports.drawTextureLegacy = drawTextureLegacy;
exports.drawImage = drawImage;
exports.hasImage = hasImage;
exports.hasTexture = hasTexture;
/* model Not a pure module */
