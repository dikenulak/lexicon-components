import { EVENT_OPERATION } from './EventOperation';

const FORM_CONFIG = {
  MAPPER: 'mapper',
  REFS_OBJ: 'refsObj',
  TITLE: 'title',
  VALIDATION_FIELD: 'validationField',
  VALIDATION_REQUIRED: 'validationRequired',
};

const CONFIRMATION_CONFIG = {
  [EVENT_OPERATION.DELETE]: {
    [FORM_CONFIG.MAPPER]: element => ({
      id: element.id || '',
    }),
    [FORM_CONFIG.TITLE]: 'Confirmation Dialog',
  },
  [EVENT_OPERATION.BULK_DELETE]: {
    [FORM_CONFIG.MAPPER]: element => ({
      ids: element || '',
    }),
    [FORM_CONFIG.TITLE]: 'Confirmation Dialog',
  },
  [EVENT_OPERATION.UPDATE_STATUS]: {
    [FORM_CONFIG.MAPPER]: element => ({
      id: element.id || '',
    }),
    [FORM_CONFIG.TITLE]: 'Confirmation Dialog',
  },
};

export { FORM_CONFIG, CONFIRMATION_CONFIG };
