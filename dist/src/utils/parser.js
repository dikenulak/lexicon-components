"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileParser = void 0;

var fileParser = function fileParser(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result.split(',')[1]);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
};

exports.fileParser = fileParser;

//# sourceMappingURL=parser.js.map