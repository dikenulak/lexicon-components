import orderBy from 'lodash/orderBy';

const has = Object.prototype.hasOwnProperty;

const objectToArrayConverter = (object) => {
  return Object.keys(object)
    .map(attribute => {
      return object[attribute];
    });
};

const objectToSortedArray = (object, sortingLabel = 'title') => {
  const arrayList = objectToArrayConverter(object);
  return orderBy(arrayList, sortingLabel);
};

const isObjectEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;
// const filterGroups = ['asm', 'stl', 'dse', 'channel', 'category'];

const removeProperty = (obj, propertyName) => {
  let { [propertyName]: _, ...result} = obj;
  return result;
};

const config = {
  userOption: {
    title: '',
    label: 'userOption',
    selectedItemList: [],
    selectedIdList: [],
    index: 0,
    value: 'user_option',
    active: false,
  },
  period: {
    title: 'Period',
    label: 'period',
    selectedItemList: [],
    selectedIdList: [],
    value: 'period_id',
    index: 0,
    active: false,
  },
  sub_d: {
    title: 'Sub-D',
    label: 'sub_d',
    selectedItemList: [],
    selectedIdList: [],
    value: 'distributor_id',
    index: 0,
    active: false,
  },
  channel: {
    title: 'Channel',
    label: 'channel',
    selectedItemList: [],
    selectedIdList: [],
    value: 'channel_id',
    index: 0,
    active: false,
  },
  category: {
    title: 'Category',
    label: 'category',
    selectedItemList: [],
    selectedIdList: [],
    value: 'category_id',
    index: 0,
    active: false,
  },
  brand: {
    title: 'Brand',
    label: 'brand',
    selectedItemList: [],
    selectedIdList: [],
    value: 'brand_id',
    index: 0,
    active: false,
  },
  asm: {
    title: 'ASM',
    label: 'asm',
    selectedItemList: [],
    selectedIdList: [],
    value: 'asm_id',
    index: 0,
    active: false,
  },
  stl: {
    title: 'STL',
    label: 'stl',
    selectedItemList: [],
    selectedIdList: [],
    value: 'stl_id',
    index: 0,
    active: false,
  },
  dse: {
    title: 'DSE',
    label: 'dse',
    selectedItemList: [],
    selectedIdList: [],
    value: 'dse_id',
    index: 0,
    active: false,
  },
  sub_brand: {
    title: 'Sub Brand',
    label: 'sub_brand',
    selectedItemList: [],
    selectedIdList: [],
    value: 'sub_brand_id',
    index: 0,
    active: false,
  },
  market_catalog: {
    title: 'Market Catalog',
    label: 'market_catalog',
    selectedItemList: [],
    selectedIdList: [],
    value: 'market_catalog_id',
    index: 0,
    active: false,
  },
  sku: {
    title: 'SKU',
    label: 'sku',
    selectedItemList: [],
    selectedIdList: [],
    value: 'sku_id',
    index: 0,
    active: false,
  },
  product_group: {
    title: 'Product Group',
    label: 'product_group',
    selectedItemList: [],
    selectedIdList: [],
    value: 'product_group_id',
    index: 0,
    active: false,
  },
  call_status: {
    title: 'Call Status',
    label: 'call_status',
    selectedItemList: [],
    selectedIdList: [],
    value: 'call_status_id',
    index: 0,
    active: false,
  },
};

const getFilter = (filterGroups) => {
  const filterConfig = {};
  for (let count = 0; count < filterGroups.length; count += 1) {
    const labelName = filterGroups[count];
    if (config[labelName]) {
      filterConfig[labelName] = config[labelName];
    }
  }
  return filterConfig;
};

export {
  has, objectToSortedArray, getFilter, isObjectEmpty, removeProperty
};
