const fs = require('fs');
const path = require('path');

const listTable = new Array(20).fill(null).map((_, index) => {
  return {
    sls_tn: index + 1,
    tpl_tn: 1,
    lost_case_created_time: '2023/02/23',
    latest_status: 1,
    actual_carrier_name: 'xx',
  };
});

class Dashboard {
  constructor(data) {
    this.data = data;
    this.pager = {
      pageno: 1,
      count: 10,
      total: 20,
    };
  }

  getList(req, res, next) {
    const result = listTable;

    res.send({
      code: 0,
      message: 'success',
      list: result,
      total: listTable.length,
    });
  }

  loadOrderVolume(req, res) {
    res.send({
      data: {
        to_inbound_order_qty_td: 0,
        inbound_order_qty_eod: 0,
        inbound_cot_start_time: 1691485200,
        inbound_cot_end_time: 1691571600,
        in_system_order_qty_td: 0,
        delivered_order_qty_eod: 0,
        avg_daily_delivered_order_qty_7d: 0,
        avg_day_to_process_order_health_color_1d: 0,
      },
      retcode: 0,
      message: 'message',
    });
  }

  loadOrderVolumeForecast(req, res) {
    res.send({
      data: {
        forecast_inbound_order_qty_1d: 100,
        fcst_cot_start_time: 1691577785,
        fcst_cot_end_time: 1691664185,
        avg_fcst_error_pct_14d: 16,
      },
      retcode: 0,
      message: 'message',
    });
  }

  loadBacklogs(req, res) {
    res.send({
      data: {
        backlog_1day_order_qty_td: 10,
        backlog_2day_order_qty_td: 20,
        backlog_3day_order_qty_td: 30,
        backlog_4day_order_qty_td: 40,
        backlog_5day_order_qty_td: 50,
        backlog_6day_order_qty_td: 60,
        backlog_than_7day_order_qty_td: 70,
        attempt_0_backlog_order_qty_td: 100,
        attempt_1_backlog_order_qty_td: 200,
        attempt_noless_2_backlog_order_qty_td: 300,
      },
      retcode: 0,
      message: 'message',
    });
  }

  exportBacklogs(req, res) {
    const result = fs.readFileSync(path.join(__dirname, '../public/xlsx/admin_import_pickup_dashboard_hourly_target.xlsx'))

    res.send(result);
  }

  loadDeliveryProgress(req, res) {
    res.send({
      data: {
        in_transported_order_qty_td: 0,
        in_received_order_qty_td: 0,
        in_assigned_order_qty_td: 0,
        in_delivering_order_qty_td: 0,
        delivered_order_qty_eod: 0,
        in_onhold_order_qty_td: 0,
        not_meet_delivered_target_driver_qty_eod: 0,
      },
      retcode: 0,
      message: 'message',
    });
  }

  loadFleetHeadCounts(req, res) {
    res.send({
      data: {
        full_time_actual_2_wheelers: 0,
        full_time_schedule_2_wheelers: 0,
        full_time_actual_4_wheelers: 0,
        full_time_schedule_4_wheelers: 0,
        full_time_actual_others_wheelers: 0,
        full_time_schedule_others_wheelers: 0,
        part_time_actual_2_wheelers: 0,
        part_time_schedule_2_wheelers: 0,
        part_time_actual_4_wheelers: 0,
        part_time_schedule_4_wheelers: 0,
        part_time_actual_others_wheelers: 0,
        part_time_schedule_others_wheelers: 0,
      },
      retcode: 0,
      message: 'message',
    });
  }

  loadDriverProductivity(req, res) {
    res.send({
      data: {
        full_time_delivered_2_wheelers: 0,
        full_time_handed_2_wheelers: 0,
        full_time_delivered_4_wheelers: 0,
        full_time_handed_4_wheelers: 0,
        full_time_delivered_others_wheelers: 0,
        full_time_handed_others_wheelers: 0,
        part_time_delivered_2_wheelers: 0,
        part_time_handed_2_wheelers: 0,
        part_time_delivered_4_wheelers: 0,
        part_time_handed_4_wheelers: 0,
        part_time_delivered_others_wheelers: 0,
        part_time_handed_others_wheelers: 0,
      },
      retcode: 0,
      message: 'message',
    });
  }

  loadFleetOverall(req, res) {
    res.send({
      data: {
        full_time_actual_2_wheelers: 0,
      },
      retcode: 0,
      message: 'message',
    });
  }

  exportOnholdOrders(req, res) {
    const result = fs.readFileSync(path.join(__dirname, '../public/xlsx/admin_import_pickup_dashboard_hourly_target.xlsx'))

    res.send(result);
  }

  loadDriversDeliveryList(req, res) {
    const contract_types = ['Full-Time', 'Part-Time'];
    const vehicle_types = ['2WH', '4WH', 'Others'];
    const target_orders = [9, 10, 11];
    res.send({
      data: {
        list: new Array(50).fill(null).map((_, index) => {
          return {
            driver_id: index < 5 ? 1 : index + 1,
            driver_name: index < 5 ? 'haha1haha1haha1haha1haha1haha1' : 'haha' + (index + 1),
            vehicle_group_name: vehicle_types[index % 3],
            contract_group_name: contract_types[index % 2],
            delivered_order_qty_eod: index + 1,
            in_onhold_order_qty_eod: index + 1,
            handedover_order_qty_eod: index + 1,
            target_delivered_order_qty_eod: target_orders[index % 3],
            max_assigned_zone_id: 'hahahahahahahaha',
            assigned_order_qty_td: 10,
            onhold_order_qty_eod: index + 1,
          };
        }),
      },
      retcode: 0,
      message: 'message',
    });
  }
}

module.exports = new Dashboard();
