const express = require('express');
const router = express.Router();

const Dashboard = require('../lib/dashboard_v1_5');

router.post('/list', Dashboard.getList);
router.post('/order_volume', Dashboard.loadOrderVolume);
router.post('/order_volume_forecast', Dashboard.loadOrderVolumeForecast);
router.post('/backlogs', Dashboard.loadBacklogs);
router.post('/backlogs_export', Dashboard.exportBacklogs);
router.post('/delivery_progress', Dashboard.loadDeliveryProgress);
router.post('/fleet_head_counts', Dashboard.loadFleetHeadCounts);
router.post('/driver_productivity', Dashboard.loadDriverProductivity);
router.post('/fleet_overall', Dashboard.loadFleetOverall);
router.post('/on_hold_orders_export', Dashboard.exportOnholdOrders);
router.post('/drivers_delivery_list', Dashboard.loadDriversDeliveryList);

module.exports = router;
