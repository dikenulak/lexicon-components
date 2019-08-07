import * as arrayProcessor from './arrayProcessor';
import { EVENT_OPERATION } from '../data/enums/EventOperation';

/**
 * @function callBack : update state in Primary Component
 * @param getData: get the state value for data{list: [], total}
 * @param updateKeyList: keyList to update while editing
 * @param primaryKey: primary Key of Data List
 * @return {onCRUDSuccess}: return
 */
const crudResponseProcessor = (callBack, getData, updateKeyList = ['title'], primaryKey = 'ids') => {
  const onCRUDSuccess = (type) => {
    switch (type) {
      case EVENT_OPERATION.CREATE:
        return (response) => {
          const data = getData();
          data.list = arrayProcessor.add(data.list, response);
          data.total += 1;
          callBack(
            data,
            type,
          );
        };
      case EVENT_OPERATION.UPDATE:
        return (response) => {
          const data = getData();
          data.list = arrayProcessor.update(data.list, response, updateKeyList);
          callBack(
            data,
            type,
          );
        };
      case EVENT_OPERATION.DELETE:
        return (response) => {
          const data = getData();
          data.list = arrayProcessor.remove(data.list, response[primaryKey]);
          data.total -= 1;
          callBack(
            data,
            type,
          );
        };
      case EVENT_OPERATION.BULK_DELETE:
        return (response) => {
          const data = getData();
          data.list = arrayProcessor.remove(data.list, response[primaryKey]);
          data.total -= response.ids.length;
          callBack(
            data,
            type,
          );
        };
      case EVENT_OPERATION.UPDATE_STATUS:
        return (response) => {
          const data = getData();
          const selectedList = response.ids;
          const updatedData = arrayProcessor.toggleState(data, selectedList);
          callBack(
            updatedData,
            type,
          );
        };
      default:
        return (response) => {
          callBack(
            response,
            type,
          );
        };
    }
  };

  return onCRUDSuccess;
};

const handleFormSubmit = (successCallBack, failureCallBack, config, serverCall) => {
  const onFormSubmit = (type, entity = {}) => {
    let mapper = {};
    let transformedData = {};
    switch (type) {
      case EVENT_OPERATION.UPLOAD:
        mapper = config[EVENT_OPERATION[type]];
        mapper.objectMapper(entity)
          .then((data) => {
            serverCall[EVENT_OPERATION[type]](data, {
              handleSuccess: response => successCallBack(EVENT_OPERATION[type])(response.data[config[EVENT_OPERATION[type]].responseName]),
              handleError: response => failureCallBack(response),
            });
          });
        break;
      case EVENT_OPERATION[type]:
        mapper = config[EVENT_OPERATION[type]];
        transformedData = mapper.objectMapper(entity);
        serverCall[EVENT_OPERATION[type]](transformedData, {
          handleSuccess: response => successCallBack(EVENT_OPERATION[type])(response.data[config[EVENT_OPERATION[type]].responseName]),
          handleError: response => failureCallBack(response),
        });
        break;
      default:
        break;
    }
  };

  return onFormSubmit;
};

export { crudResponseProcessor, handleFormSubmit };
