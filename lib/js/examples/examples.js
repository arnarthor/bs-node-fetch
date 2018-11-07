'use strict';

var NodeFetch = require("node-fetch");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Bs_node_fetch = require("../src/bs_node_fetch.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function unwrapUnsafely(param) {
  if (param !== undefined) {
    return Js_primitive.valFromOption(param);
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "unwrapUnsafely called on None"
        ];
  }
}

var Option = /* module */[/* unwrapUnsafely */unwrapUnsafely];

NodeFetch.default("https://dog.ceo/api/breeds/list/all").then((function (prim) {
          return prim.text();
        })).then((function (text) {
        return Promise.resolve((console.log(text), /* () */0));
      }));

NodeFetch.default("https://dog.ceo/api/breeds/list/all", Bs_node_fetch.RequestInit[/* make */0](/* Post */2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (prim) {
          return prim.text();
        })).then((function (text) {
        return Promise.resolve((console.log(text), /* () */0));
      }));

exports.Option = Option;
/*  Not a pure module */
