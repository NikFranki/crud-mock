const express = require('express');
const router = express.Router();

const Api = require('../lib/api');

// hub hub overview api
router.post('/dashboard/delivery_productivity/delivery_progress', Api.deliveryProgress);
router.post('/dashboard/delivery_productivity/fleet_head_counts', Api.fleetHeadCounts);

// hub fleet overview api
router.post('/dashboard/delivery_productivity/fleet_overall', Api.fleetOverall);
router.post('/dashboard/delivery_productivity/drivers_delivery_list', Api.driversDeliveryList);
router.get('/dashboard/delivery_productivity/hub_overall/export_backlogs', Api.exportBacklogs);
router.post('/spx/smartsorting/zone/customized_zone/dropdown/list', Api.zoneList);
router.post('/driverservice/admin/driver/get_contracted_driver_list_with_pagination', Api.driverList);

// admin hub overview api
router.post('/dashboard/delivery_productivity/hubs_delivery_list', Api.deliveryList);
router.post('/dashboard/delivery_productivity/hubs_delivery_list/export', Api.deliveryListExport);
router.post('/dashboard/delivery_productivity/hubs_not_meeting_target', Api.notMeetingTarget);
router.post('/dashboard/delivery_productivity/hubs_progress_list', Api.progressList);
router.post('/spx_delivery/admin/dashboard/conf/log/list', Api.logList);
router.post('/spx_delivery/admin/dashboard/conf/log/detail', Api.logDetail);

// both hub & admin api
router.post('/dashboard/delivery_productivity/hub_overall', Api.hubOverall);
router.post('/dashboard/delivery_productivity/driver_productivity', Api.driverProductivity);
router.post('/station/dropdown/search/', Api.stationList);

// driver map api
router.post('/dashboard/delivery_productivity/map/driver_list', Api.mapDriverList);
router.post('/dashboard/delivery_productivity/map/driver_detail', Api.mapDriverListDetail);
router.post('/dashboard/delivery_productivity/map/driver/detail', Api.mapDriverDetail);
router.post('/dashboard/delivery_productivity/map/delivery_order/todo_list', Api.mapDriverTodolist);
router.post('/dashboard/delivery_productivity/map/delivery_order/on_hold_list', Api.mapDriverOnHoldList);
router.post('/dashboard/delivery_productivity/map/delivery_order/delivered_list', Api.mapDriverDeliveredList);
router.post('/dashboard/delivery_productivity/map/order_detail', Api.mapOrderDetail);

// wcs api start
router.post('/user/login', Api.login);
router.get('/user/logout', Api.logout);
router.get('/user/check-session', Api.checkSession);

router.post('/user/list', Api.getUserList);
router.post('/user/log/list', Api.getUserLog);
router.get('/user/log/detail', Api.getUserLogDetail);
router.get('/user/detail', Api.getUserInfoByID);
router.post('/user/create', Api.createUser);
router.post('/user/edit', Api.editUser);
router.post('/user/delete', Api.deleteUser);

router.post('/role/list', Api.getRoleList);
router.post('/role/create', Api.createRole);
router.post('/role/edit', Api.editRole);
router.get('/role/detail', Api.getRoleInfoByID);
router.post('/role/log/list', Api.getRoleLog);
router.get('/role/log/detail', Api.getRoleLogDetail);
router.get('/permission/list', Api.getRolePermissionList);
// wcs api end

module.exports = router;
