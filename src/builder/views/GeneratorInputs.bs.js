// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Icon = require("./Icon.bs.js");
var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Builder = require("../modules/Builder.bs.js");
var Js_dict = require("rescript/lib/js/js_dict.js");
var FormInput = require("./FormInput.bs.js");
var Caml_array = require("rescript/lib/js/caml_array.js");
var Caml_option = require("rescript/lib/js/caml_option.js");

function GeneratorInputs$TextureInput(Props) {
  var id = Props.id;
  var textures = Props.textures;
  var choices = Props.choices;
  var onChange = Props.onChange;
  var match = React.useState(function () {
        
      });
  var setName = match[1];
  var name = match[0];
  var onInputChange = function (e) {
    var target = e.target;
    var files = target.files;
    if (files === undefined) {
      return ;
    }
    var file = Caml_array.get(files, 0);
    var fileReader = new FileReader();
    fileReader.onload = (function (e) {
        var target = e.target;
        var result = target.result;
        if (result !== undefined) {
          Curry._1(setName, (function (param) {
                  return file.name;
                }));
          Builder.ImageFactory.makeFromUrl(result).then(function (image) {
                return Curry._1(onChange, Caml_option.some(image));
              });
          return ;
        }
        
      });
    fileReader.readAsDataURL(file);
    
  };
  var onChoiceChange = function (e) {
    var target = e.target;
    var value = target.value;
    var texture = Js_dict.get(textures, value);
    if (texture !== undefined) {
      return Curry._1(onChange, Caml_option.some(texture.image));
    } else {
      return Curry._1(onChange, undefined);
    }
  };
  return React.createElement("div", {
              className: "mb-4"
            }, React.createElement("div", {
                  className: "font-bold"
                }, id), React.createElement("div", {
                  className: "flex items-center"
                }, choices.length > 0 ? React.createElement("div", undefined, React.createElement("select", {
                            className: "p-2",
                            onChange: onChoiceChange
                          }, React.createElement("option", {
                                value: ""
                              }, "None"), choices.map(function (choice) {
                                return React.createElement("option", {
                                            key: choice,
                                            value: choice
                                          }, choice);
                              })), React.createElement("span", {
                            className: "px-2"
                          }, "or")) : null, React.createElement("div", {
                      className: "overflow-hidden relative w-48"
                    }, React.createElement("button", {
                          className: "bg-blue-500 rounded text-white py-1 px-4 w-full inline-flex items-center"
                        }, React.createElement(Icon.Upload.make, {}), React.createElement("span", {
                              className: "ml-2"
                            }, "Choose file")), React.createElement("input", {
                          className: "cursor-pointer absolute block opacity-0 top-0 bottom-0 left-0 right-0",
                          type: "file",
                          onChange: onInputChange
                        })), React.createElement("div", {
                      className: "ml-3"
                    }, name !== undefined ? name : null)));
}

var TextureInput = {
  make: GeneratorInputs$TextureInput
};

function GeneratorInputs$BooleanInput(Props) {
  var id = Props.id;
  var checked = Props.checked;
  var onChange = Props.onChange;
  var onInputChange = function (param) {
    return Curry._1(onChange, !checked);
  };
  return React.createElement("div", {
              className: "mb-4"
            }, React.createElement("div", {
                  className: "flex flex-col"
                }, checked ? React.createElement("label", {
                        className: "mt-3 inline-flex items-center cursor-pointer"
                      }, React.createElement("span", {
                            className: "relative"
                          }, React.createElement("span", {
                                className: "block w-10 h-6 bg-gray-300 rounded-full shadow-inner"
                              }), React.createElement("span", {
                                className: "absolute block w-4 h-4 mt-1 ml-1 rounded-full inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-50 ease-in-out bg-blue-500 transform translate-x-full"
                              }, React.createElement("input", {
                                    className: "absolute opacity-0 w-0 h-0",
                                    type: "checkbox",
                                    onChange: onInputChange
                                  }))), React.createElement("span", {
                            className: "ml-3"
                          }, id)) : React.createElement("label", {
                        className: "mt-3 inline-flex items-center cursor-pointer"
                      }, React.createElement("span", {
                            className: "relative"
                          }, React.createElement("span", {
                                className: "block w-10 h-6 bg-gray-300 rounded-full shadow-inner"
                              }), React.createElement("span", {
                                className: "absolute block w-4 h-4 mt-1 ml-1 bg-white rounded-full inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-50 ease-in-out"
                              }, React.createElement("input", {
                                    className: "absolute opacity-0 w-0 h-0",
                                    type: "checkbox",
                                    onChange: onInputChange
                                  }))), React.createElement("span", {
                            className: "ml-3"
                          }, id))));
}

var BooleanInput = {
  make: GeneratorInputs$BooleanInput
};

function GeneratorInputs$SelectInput(Props) {
  var id = Props.id;
  var options = Props.options;
  var value = Props.value;
  var onChange = Props.onChange;
  var onSelectChange = function (e) {
    var target = e.target;
    var value = target.value;
    if (value !== undefined) {
      return Curry._1(onChange, value);
    }
    
  };
  return React.createElement("div", {
              className: "mb-4"
            }, React.createElement("div", {
                  className: "font-bold"
                }, id), React.createElement(FormInput.Select.make, {
                  onChange: onSelectChange,
                  value: value,
                  children: options.map(function (option) {
                        return React.createElement(FormInput.$$Option.make, {
                                    value: option,
                                    children: option,
                                    key: option
                                  });
                      })
                }));
}

var SelectInput = {
  make: GeneratorInputs$SelectInput
};

function GeneratorInputs$Text(Props) {
  var text = Props.text;
  return React.createElement("div", {
              className: "mb-4"
            }, React.createElement("p", undefined, text));
}

var $$Text = {
  make: GeneratorInputs$Text
};

function GeneratorInputs(Props) {
  var model = Props.model;
  var onChange = Props.onChange;
  if (model.inputs.length > 0) {
    return React.createElement("div", {
                className: "bg-gray-100 p-4 mb-8 rounded"
              }, model.inputs.map(function (input) {
                    switch (input.TAG | 0) {
                      case /* Text */0 :
                          return React.createElement(GeneratorInputs$Text, {
                                      text: input._1,
                                      key: input._0
                                    });
                      case /* CustomStringInput */1 :
                          var id = input._0;
                          return React.createElement("div", {
                                      key: id
                                    }, Curry._1(input._1, (function (param) {
                                            return Curry._1(onChange, Builder.setStringInputValue(model, id, param));
                                          })));
                      case /* TextureInput */3 :
                          var match = input._1;
                          var standardHeight = match.standardHeight;
                          var standardWidth = match.standardWidth;
                          var id$1 = input._0;
                          return React.createElement(GeneratorInputs$TextureInput, {
                                      id: id$1,
                                      textures: model.values.textures,
                                      choices: match.choices,
                                      onChange: (function (param) {
                                          if (param === undefined) {
                                            return Curry._1(onChange, Builder.clearTexture(model, id$1));
                                          }
                                          var texture = Builder.Texture.make(Caml_option.valFromOption(param), standardWidth, standardHeight);
                                          return Curry._1(onChange, Builder.addTexture(model, id$1, texture));
                                        }),
                                      key: id$1
                                    });
                      case /* BooleanInput */4 :
                          var id$2 = input._0;
                          var checked = Builder.getBooleanInputValue(model, id$2);
                          return React.createElement(GeneratorInputs$BooleanInput, {
                                      id: id$2,
                                      checked: checked,
                                      onChange: (function (param) {
                                          return Curry._1(onChange, Builder.setBooleanInputValue(model, id$2, param));
                                        }),
                                      key: id$2
                                    });
                      case /* SelectInput */5 :
                          var id$3 = input._0;
                          var value = Builder.getSelectInputValue(model, id$3);
                          return React.createElement(GeneratorInputs$SelectInput, {
                                      id: id$3,
                                      options: input._1,
                                      value: value,
                                      onChange: (function (param) {
                                          return Curry._1(onChange, Builder.setSelectInputValue(model, id$3, param));
                                        }),
                                      key: id$3
                                    });
                      case /* RegionInput */2 :
                      case /* RangeInput */6 :
                          return null;
                      case /* ButtonInput */7 :
                          var id$4 = input._0;
                          return React.createElement("button", {
                                      key: id$4,
                                      className: "text-white text-center font-semibold rounded text-sm py-2 px-4 bg-blue-600 hover:bg-blue-500",
                                      onClick: input._1
                                    }, id$4);
                      
                    }
                  }));
  } else {
    return null;
  }
}

var make = GeneratorInputs;

exports.TextureInput = TextureInput;
exports.BooleanInput = BooleanInput;
exports.SelectInput = SelectInput;
exports.$$Text = $$Text;
exports.make = make;
/* Icon Not a pure module */
