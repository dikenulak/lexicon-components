// USE the bread crumb function over here.
const login = {
  id: 0,
  title: 'URL1',
  path: '/login',
  active: false,
};

const test = {
  id: 1,
  path: 'URL2',
  url: '/login',
  active: false,
};

const CONFIGURATION_BASE = 'configuration';
const INVENTORY_BASE = 'inventory';
const SALES_BASE = 'sales';
const REPORTS_BASE = 'reports';

const ORDER_FULFILMENT = `${SALES_BASE}/order-fulfilment`;
const ORDER_INVOICE = `${ORDER_FULFILMENT}/invoice`;
const GRN = `${INVENTORY_BASE}/grn`;
const GRN_CREATE = `${GRN}/create`;
const GRN_DETAILS = `${GRN}/details`;
const SKU = `${CONFIGURATION_BASE}/sku`;
const SKU_CREATE = `${SKU}/create`;
const SKU_DETAILS = `${SKU}/details`;
const TARGET_ACHIEVEMENT = `${SALES_BASE}/target-achievement`;
const TARGET_ACHIEVEMENT_DETAILS = `${TARGET_ACHIEVEMENT}/details`;
const TERRITORY = `${CONFIGURATION_BASE}/territory`;
const TOWN = `${CONFIGURATION_BASE}/town`;
const USER = `${CONFIGURATION_BASE}/user`;
const USER_ACCOUNT = `${USER}/user-account`;
const USER_ROLE = `${USER}/user-role`;
const PROMOTION = `${CONFIGURATION_BASE}/promotion`;
const PROMOTION_DETAILS = `${PROMOTION}/details`;
const CHANNEL = `${CONFIGURATION_BASE}/channel`;
const OUTLET = `${SALES_BASE}/outlet`;
const OUTLET_DETAILS = `${OUTLET}/details`;
const OUTLET_CREATE = `${OUTLET}/create`;
const ROUTE = `${SALES_BASE}/route`;
const ROUTE_DETAILS = `${ROUTE}/details`;
const ROUTE_CREATE = `${ROUTE}/create`;
const SUB_D = `${CONFIGURATION_BASE}/sub-d`;
const SUB_D_DETAILS = `${SUB_D}/details`;
const SUB_D_CREATE = `${SUB_D}/create`;
const STOCK_LEDGER = `${REPORTS_BASE}/stock-ledger`;
const MERCHANDISE = `${CONFIGURATION_BASE}/merchandise-device`;
const CATALOG = `${CONFIGURATION_BASE}/catalog`;


export {
  SKU,
  GRN,
  test,
  TOWN,
  login,
  USER_ROLE,
  TERRITORY,
  GRN_CREATE,
  SKU_CREATE,
  GRN_DETAILS,
  SKU_DETAILS,
  USER_ACCOUNT,
  ORDER_INVOICE,
  ORDER_FULFILMENT,
  TARGET_ACHIEVEMENT,
  TARGET_ACHIEVEMENT_DETAILS,
  PROMOTION,
  PROMOTION_DETAILS,
  CHANNEL,
  OUTLET,
  OUTLET_CREATE,
  OUTLET_DETAILS,
  ROUTE,
  ROUTE_CREATE,
  ROUTE_DETAILS,
  SUB_D,
  SUB_D_CREATE,
  SUB_D_DETAILS,
  STOCK_LEDGER,
  MERCHANDISE,
  CATALOG,
};
