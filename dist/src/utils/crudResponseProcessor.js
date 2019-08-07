"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFormSubmit = exports.crudResponseProcessor = void 0;

var arrayProcessor = _interopRequireWildcard(require("./arrayProcessor"));

var _EventOperation = require("../data/enums/EventOperation");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * @function callBack : update state in Primary Component
 * @param getData: get the state value for data{list: [], total}
 * @param updateKeyList: keyList to update while editing
 * @param primaryKey: primary Key of Data List
 * @return {onCRUDSuccess}: return
 */
var crudResponseProcessor = function crudResponseProcessor(callBack, getData) {
  var updateKeyList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['title'];
  var primaryKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ids';

  var onCRUDSuccess = function onCRUDSuccess(type) {
    switch (type) {
      case _EventOperation.EVENT_OPERATION.CREATE:
        return function (response) {
          var data = getData();
          data.list = arrayProcessor.add(data.list, response);
          data.total += 1;
          callBack(data, type);
        };

      case _EventOperation.EVENT_OPERATION.UPDATE:
        return function (response) {
          var data = getData();
          data.list = arrayProcessor.update(data.list, response, updateKeyList);
          callBack(data, type);
        };

      case _EventOperation.EVENT_OPERATION.DELETE:
        return function (response) {
          var data = getData();
          data.list = arrayProcessor.remove(data.list, response[primaryKey]);
          data.total -= 1;
          callBack(data, type);
        };

      case _EventOperation.EVENT_OPERATION.BULK_DELETE:
        return function (response) {
          var data = getData();
          data.list = arrayProcessor.remove(data.list, response[primaryKey]);
          data.total -= response.ids.length;
          callBack(data, type);
        };

      case _EventOperation.EVENT_OPERATION.UPDATE_STATUS:
        return function (response) {
          var data = getData();
          var selectedList = response.ids;
          var updatedData = arrayProcessor.toggleState(data, selectedList);
          callBack(updatedData, type);
        };

      default:
        return function (response) {
          callBack(response, type);
        };
    }
  };

  return onCRUDSuccess;
};

exports.crudResponseProcessor = crudResponseProcessor;

var handleFormSubmit = function handleFormSubmit(successCallBack, failureCallBack, config, serverCall) {
  var onFormSubmit = function onFormSubmit(type) {
    var entity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var mapper = {};
    var transformedData = {};

    switch (type) {
      case _EventOperation.EVENT_OPERATION.UPLOAD:
        mapper = config[_EventOperation.EVENT_OPERATION[type]];
        mapper.objectMapper(entity).then(function (data) {
          serverCall[_EventOperation.EVENT_OPERATION[type]](data, {
            handleSuccess: function handleSuccess(response) {
              return successCallBack(_EventOperation.EVENT_OPERATION[type])(response.data[config[_EventOperation.EVENT_OPERATION[type]].responseName]);
            },
            handleError: function handleError(response) {
              return failureCallBack(response);
            }
          });
        });
        break;

      case _EventOperation.EVENT_OPERATION[type]:
        mapper = config[_EventOperation.EVENT_OPERATION[type]];
        transformedData = mapper.objectMapper(entity);

        serverCall[_EventOperation.EVENT_OPERATION[type]](transformedData, {
          handleSuccess: function handleSuccess(response) {
            return successCallBack(_EventOperation.EVENT_OPERATION[type])(response.data[config[_EventOperation.EVENT_OPERATION[type]].responseName]);
          },
          handleError: function handleError(response) {
            return failureCallBack(response);
          }
        });

        break;

      default:
        break;
    }
  };

  return onFormSubmit;
};

exports.handleFormSubmit = handleFormSubmit;

//# sourceMappingURL=crudResponseProcessor.js.map