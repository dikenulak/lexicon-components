"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONFIRMATION_CONFIG = exports.FORM_CONFIG = void 0;

var _EventOperation = require("./EventOperation");

var _EVENT_OPERATION$DELE, _EVENT_OPERATION$BULK, _EVENT_OPERATION$UPDA, _CONFIRMATION_CONFIG;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FORM_CONFIG = {
  MAPPER: 'mapper',
  REFS_OBJ: 'refsObj',
  TITLE: 'title',
  VALIDATION_FIELD: 'validationField',
  VALIDATION_REQUIRED: 'validationRequired'
};
exports.FORM_CONFIG = FORM_CONFIG;
var CONFIRMATION_CONFIG = (_CONFIRMATION_CONFIG = {}, _defineProperty(_CONFIRMATION_CONFIG, _EventOperation.EVENT_OPERATION.DELETE, (_EVENT_OPERATION$DELE = {}, _defineProperty(_EVENT_OPERATION$DELE, FORM_CONFIG.MAPPER, function (element) {
  return {
    id: element.id || ''
  };
}), _defineProperty(_EVENT_OPERATION$DELE, FORM_CONFIG.TITLE, 'Confirmation Dialog'), _EVENT_OPERATION$DELE)), _defineProperty(_CONFIRMATION_CONFIG, _EventOperation.EVENT_OPERATION.BULK_DELETE, (_EVENT_OPERATION$BULK = {}, _defineProperty(_EVENT_OPERATION$BULK, FORM_CONFIG.MAPPER, function (element) {
  return {
    ids: element || ''
  };
}), _defineProperty(_EVENT_OPERATION$BULK, FORM_CONFIG.TITLE, 'Confirmation Dialog'), _EVENT_OPERATION$BULK)), _defineProperty(_CONFIRMATION_CONFIG, _EventOperation.EVENT_OPERATION.UPDATE_STATUS, (_EVENT_OPERATION$UPDA = {}, _defineProperty(_EVENT_OPERATION$UPDA, FORM_CONFIG.MAPPER, function (element) {
  return {
    id: element.id || ''
  };
}), _defineProperty(_EVENT_OPERATION$UPDA, FORM_CONFIG.TITLE, 'Confirmation Dialog'), _EVENT_OPERATION$UPDA)), _CONFIRMATION_CONFIG);
exports.CONFIRMATION_CONFIG = CONFIRMATION_CONFIG;

//# sourceMappingURL=config.js.map