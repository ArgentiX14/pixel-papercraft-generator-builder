// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Builder = require("./Builder.bs.js");

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

function defineButtonInput(id, toRun) {
  model.contents = Builder.defineButtonInput(model.contents, id, toRun);
  
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

function drawTextureLegacy(id, source, dest, flipOpt, rotateLegacyOpt, rotateOpt, param) {
  var flip = flipOpt !== undefined ? flipOpt : "None";
  var rotateLegacy = rotateLegacyOpt !== undefined ? rotateLegacyOpt : 0.0;
  var rotate = rotateOpt !== undefined ? rotateOpt : 0.0;
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
            ], flip, rotateLegacy, rotate, undefined);
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
exports.defineTextureInput = defineTextureInput;
exports.defineText = defineText;
exports.usePage = usePage;
exports.drawTexture = drawTexture;
exports.drawTextureLegacy = drawTextureLegacy;
exports.drawImage = drawImage;
exports.hasImage = hasImage;
exports.hasTexture = hasTexture;
/* model Not a pure module */
