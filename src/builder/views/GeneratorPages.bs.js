// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Dom2 = require("../bindings/Dom2.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var Jspdf = require("jspdf");
var React = require("react");
var Buttons = require("./Buttons.bs.js");
var PageSize = require("../modules/PageSize.bs.js");
var ButtonStyles = require("./ButtonStyles.bs.js");
var PrintElement = require("../modules/PrintElement.bs.js");

function px(n) {
  return n.toString() + "px";
}

function scaleInt(value, scale) {
  return value * scale | 0;
}

function scaleRegion(param, actualWidth) {
  var scale = actualWidth / PageSize.A4.px.width;
  return [
          param[0] * scale | 0,
          param[1] * scale | 0,
          param[2] * scale | 0,
          param[3] * scale | 0
        ];
}

function GeneratorPages$RegionInputs(Props) {
  var model = Props.model;
  var currentPageId = Props.currentPageId;
  var containerWidth = Props.containerWidth;
  var onClick = Props.onClick;
  var regions = model.inputs.reduce((function (acc, input) {
          if (input.TAG === /* RegionInput */2 && input._0 === currentPageId) {
            return acc.concat([[
                          input._1,
                          input._2
                        ]]);
          } else {
            return acc;
          }
        }), []);
  if (regions.length > 0) {
    return React.createElement("div", undefined, regions.map(function (param, i) {
                    var callback = param[1];
                    var match = scaleRegion(param[0], containerWidth);
                    var style = {
                      height: match[3].toString() + "px",
                      left: match[0].toString() + "px",
                      top: match[1].toString() + "px",
                      width: match[2].toString() + "px"
                    };
                    return React.createElement("div", {
                                key: i.toString(),
                                className: "absolute border-4 border-transparent hover:border-blue-500",
                                style: style,
                                onClick: (function (param) {
                                    return Curry._1(onClick, callback);
                                  })
                              });
                  }));
  } else {
    return null;
  }
}

var RegionInputs = {
  scaleInt: scaleInt,
  scaleRegion: scaleRegion,
  make: GeneratorPages$RegionInputs
};

function GeneratorPages$SaveAsPDFButton(Props) {
  var size = Props.size;
  var color = Props.color;
  var generatorDef = Props.generatorDef;
  var model = Props.model;
  var onSavePDF = function (param) {
    var doc = new Jspdf.jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4"
        });
    model.pages.forEach(function (page, index) {
          var dataUrl = Dom2.Canvas.toDataUrlAsPng(page.canvas);
          if (index > 0) {
            doc.addPage("a4", "portrait");
          }
          doc.addImage(dataUrl, "PNG", 0, 0, PageSize.A4.mm.width, PageSize.A4.mm.height);
          
        });
    doc.save(generatorDef.name);
    
  };
  return React.createElement(Buttons.Button.make, {
              state: "Ready",
              onClick: onSavePDF,
              color: color,
              size: size,
              children: "Save as PDF"
            });
}

var SaveAsPDFButton = {
  make: GeneratorPages$SaveAsPDFButton
};

function GeneratorPages$SaveAsImageButton(Props) {
  var size = Props.size;
  var color = Props.color;
  var dataUrl = Props.dataUrl;
  var download = Props.download;
  var match = React.useState(function () {
        return "#";
      });
  var setHref = match[1];
  var onClick = function (param) {
    return Curry._1(setHref, (function (param) {
                  return dataUrl;
                }));
  };
  var className = ButtonStyles.makeClassName("Ready", color, size, false);
  return React.createElement("a", {
              className: className,
              download: download,
              href: match[0],
              onClick: onClick
            }, "Save as PNG");
}

var SaveAsImageButton = {
  make: GeneratorPages$SaveAsImageButton
};

function GeneratorPages$PrintImageButton(Props) {
  var size = Props.size;
  var color = Props.color;
  var dataUrl = Props.dataUrl;
  var onClick = function ($$event) {
    $$event.preventDefault();
    var image = new Image();
    var onLoad = function (param) {
      image.onload = undefined;
      return PrintElement.print(image);
    };
    image.onload = onLoad;
    image.src = dataUrl;
    
  };
  var className = ButtonStyles.makeClassName("Ready", color, size, false);
  return React.createElement("a", {
              className: className,
              href: "#",
              onClick: onClick
            }, "Print");
}

var PrintImageButton = {
  make: GeneratorPages$PrintImageButton
};

function useElementWidthListener(elRef) {
  var match = React.useState(function () {
        
      });
  var setWidth = match[1];
  React.useEffect((function () {
          var updateWidth = function (param) {
            var el = elRef.current;
            if (el == null) {
              return ;
            }
            var width = el.width;
            return Curry._1(setWidth, (function (param) {
                          return width;
                        }));
          };
          var onResize = function (param) {
            return updateWidth(undefined);
          };
          window.addEventListener("resize", onResize);
          updateWidth(undefined);
          return (function (param) {
                    window.removeEventListener("resize", onResize);
                    
                  });
        }), []);
  return match[0];
}

function GeneratorPages(Props) {
  var generatorDef = Props.generatorDef;
  var model = Props.model;
  var onChange = Props.onChange;
  var containerElRef = React.useRef(null);
  var containerWidth = useElementWidthListener(containerElRef);
  var showPageIds = model.pages.length > 1;
  return React.createElement("div", undefined, model.pages.map(function (page, index) {
                  var dataUrl = Dom2.Canvas.toDataUrlAsPng(page.canvas);
                  var fileName = model.pages.length > 1 ? generatorDef.name + " - " + page.id : generatorDef.name;
                  return React.createElement("div", {
                              key: page.id
                            }, showPageIds ? React.createElement("h1", {
                                    className: "font-bold text-2xl mb-4"
                                  }, page.id) : null, React.createElement("div", {
                                  className: "mb-4 flex justify-between items-center",
                                  style: {
                                    maxWidth: PageSize.A4.px.width.toString() + "px"
                                  }
                                }, React.createElement("div", undefined, React.createElement("span", {
                                          className: "mr-4"
                                        }, React.createElement(GeneratorPages$PrintImageButton, {
                                              size: "Small",
                                              color: "Blue",
                                              dataUrl: dataUrl
                                            })), React.createElement(GeneratorPages$SaveAsImageButton, {
                                          size: "Small",
                                          color: "Blue",
                                          dataUrl: dataUrl,
                                          download: fileName
                                        })), React.createElement("div", undefined, index === 0 ? React.createElement(GeneratorPages$SaveAsPDFButton, {
                                            size: "Small",
                                            color: "Green",
                                            generatorDef: generatorDef,
                                            model: model
                                          }) : null)), React.createElement("div", {
                                  className: "relative",
                                  style: {
                                    maxWidth: PageSize.A4.px.width.toString() + "px"
                                  }
                                }, React.createElement("img", {
                                      ref: containerElRef,
                                      className: "border shadow-xl mb-8",
                                      style: Object.assign({}, {}, {
                                            imageRendering: "pixelated"
                                          }),
                                      src: dataUrl
                                    }), containerWidth !== undefined ? React.createElement(GeneratorPages$RegionInputs, {
                                        model: model,
                                        currentPageId: page.id,
                                        containerWidth: containerWidth,
                                        onClick: (function (callback) {
                                            Curry._1(callback, undefined);
                                            return Curry._1(onChange, undefined);
                                          })
                                      }) : null));
                }));
}

var make = GeneratorPages;

exports.px = px;
exports.RegionInputs = RegionInputs;
exports.SaveAsPDFButton = SaveAsPDFButton;
exports.SaveAsImageButton = SaveAsImageButton;
exports.PrintImageButton = PrintImageButton;
exports.useElementWidthListener = useElementWidthListener;
exports.make = make;
/* jspdf Not a pure module */
