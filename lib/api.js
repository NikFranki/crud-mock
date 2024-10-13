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

function randomName() {
  const lowcaseAlphabelts = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const toUppercaseAlphabelts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let index = 0;
  let result = '';
  while (index < 6) {
    const a = lowcaseAlphabelts[Math.floor(Math.random() * 26)];
    const A = toUppercaseAlphabelts[Math.floor(Math.random() * 26)];
    result += `${a}${A}`;
    index++;
  }
  return result;
}

const mapDriverlist = {
  "retcode": 0,
  "data": {
    "list": [
      {
        "driver_id": 26828,
        "driver_name": "Eric_JTN",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": "08129273409",
        "contract_type": 1,
        "contract_type_name": "Full-time",
        "vehicle_type": 28,
        "vehicle_type_name": "1111",
        "delivering_num": 8,
        "driver_lat": 1.440221,
        "driver_lng": 110.847010,
        "is_miss_location": false,
        "contract_group": 1,
        "vehicle_grouping": "Others"
      },
      {
        "driver_id": 26827,
        "driver_name": "Eric_DM",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": "08129273408",
        "contract_type": 1,
        "contract_type_name": "Full-time",
        "vehicle_type": 2,
        "vehicle_type_name": "4WH",
        "delivering_num": 3,
        "driver_lat": 0.840223,
        "driver_lng": 118.847012,
        "is_miss_location": false,
        "contract_group": 1,
        "vehicle_grouping": "Others"
      },
      {
        "driver_id": 26359,
        "driver_name": "婷婷宝贝儿",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": "0077755532",
        "contract_type": 48,
        "contract_type_name": "Dedicated-77",
        "vehicle_type": 21,
        "vehicle_type_name": "22WH",
        "delivering_num": 0,
        "driver_lat": 0.440227,
        "driver_lng": 118.847015,
        "is_miss_location": false,
        "contract_group": 2,
        "vehicle_grouping": "Others"
      },
      {
        "driver_id": 26345,
        "driver_name": "32423423423",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": "00666555332",
        "contract_type": 42,
        "contract_type_name": "22-Dedicated",
        "vehicle_type": 21,
        "vehicle_type_name": "22WH",
        "delivering_num": 0,
        "driver_lat": 0.540228,
        "driver_lng": 113.847016,
        "is_miss_location": false,
        "contract_group": 1,
        "vehicle_grouping": "Others"
      },
      {
        "driver_id": 26336,
        "driver_name": "rifqi [UAT]",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": "007978",
        "contract_type": 1,
        "contract_type_name": "Full-time",
        "vehicle_type": 1,
        "vehicle_type_name": "2WH",
        "delivering_num": 0,
        "driver_lat": 0.840226,
        "driver_lng": 114.847015,
        "is_miss_location": false,
        "contract_group": 1,
        "vehicle_grouping": "2WH"
      },
      {
        "driver_id": 26120,
        "driver_name": "AUTO-DRIVER-847",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": "1666072271945",
        "contract_type": 1,
        "contract_type_name": "Full-time",
        "vehicle_type": 33,
        "vehicle_type_name": "BLINDVAN",
        "delivering_num": 0,
        "driver_lat": 0.740227,
        "driver_lng": 117.847013,
        "is_miss_location": false,
        "contract_group": 1,
        "vehicle_grouping": "Others"
      },
      {
        "driver_id": 25682,
        "driver_name": "Zieggy ID Driver 1",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": "000321",
        "contract_type": 1,
        "contract_type_name": "Full-time",
        "vehicle_type": 2,
        "vehicle_type_name": "4WH",
        "delivering_num": 0,
        "driver_lat": 1.840226,
        "driver_lng": 118.847013,
        "is_miss_location": false,
        "contract_group": 1,
        "vehicle_grouping": "Others"
      },
      {
        "driver_id": 25248,
        "driver_name": "847-gaia-linehaul",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": "1641741752",
        "contract_type": 26,
        "contract_type_name": "test",
        "vehicle_type": 16,
        "vehicle_type_name": "Car/Van (4WH)",
        "delivering_num": 0,
        "driver_lat": 0.540227,
        "driver_lng": 112.847012,
        "is_miss_location": false,
        "contract_group": 1,
        "vehicle_grouping": "Others"
      },
      {
        "driver_id": 25247,
        "driver_name": "847-gaia-delivery",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": "1641741708",
        "contract_type": 26,
        "contract_type_name": "test",
        "vehicle_type": 16,
        "vehicle_type_name": "Car/Van (4WH)",
        "delivering_num": 0,
        "driver_lat": 0.940229,
        "driver_lng": 115.847011,
        "is_miss_location": false,
        "contract_group": 1,
        "vehicle_grouping": "Others"
      },
      {
        "driver_id": 25134,
        "driver_name": "Driver007v4",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": "000000001",
        "contract_type": 2,
        "contract_type_name": "Freelancer",
        "vehicle_type": 13,
        "vehicle_type_name": "CDE (4WH)",
        "delivering_num": 0,
        "driver_lat": 0.840227,
        "driver_lng": 116.847012,
        "is_miss_location": false,
        "contract_group": 2,
        "vehicle_grouping": "Others"
      }
    ],
    "total": 10
  },
  "message": "success"
};

const orderTodoList = [
  {
    "order_id": 'SPXID038040094581',
    "driver_id": 296074437971792,
    "delivery_order_status": 2,
    "payment_method": "COD",
    "cod_amount": 1,
    "sla_target_time_text": "",
    "urgent_time_text": "Urgent",
    "assigned_time": 1684290831,
    "sla_target_time": 1684290831,
    "urgent_time": 1684290831,
    "receiver_geo_lat": 1.440221,
    "receiver_geo_lng": 110.847010,
    "mtime": 1684290831
  },
  {
    "order_id": 'SPXID038040094582',
    "driver_id": 296074437971792,
    "delivery_order_status": 2,
    "payment_method": "COD",
    "cod_amount": 1,
    "sla_target_time_text": "Overtime",
    "urgent_time_text": "",
    "assigned_time": 1684290831,
    "sla_target_time": 1684290831,
    "urgent_time": 1684290831,
    "receiver_geo_lat": 0.440221,
    "receiver_geo_lng": 119.847010,
    "mtime": 1684290831
  },
];

const orderOnHoldList = [
  {
    "order_id": 'SPXID038040094583',
    "driver_id": 3088971015693484,
    "delivery_order_status": 3,
    "payment_method": "COD",
    "cod_amount": 1,
    "on_hold_time": 1682404503000,
    "sla_target_time": 1684290856,
    "urgent_time": 1684290856,
    "receiver_geo_lat": 2.450221,
    "receiver_geo_lng": 117.847010,
    "mtime": 1684290856
  },
];

const orderDeliveredList = [{
  "order_id": 'SPXID0' + (38040094584 + 1),
  "driver_id": 5747417992058568,
  "delivery_order_status": 4,
  "payment_method": "COD",
  "delivered_time": 1682404503000,
  "sla_target_time": 1684290876,
  "urgent_time": 1684290876,
  "receiver_geo_lat": 2.440221,
  "receiver_geo_lng": 112.847010,
  "mtime": 1684290876
}, {
  "order_id": 'SPXID0' + (38040094584 + 2),
  "driver_id": 5747417992058568,
  "delivery_order_status": 4,
  "payment_method": "COD",
  "delivered_time": 1682404503000,
  "sla_target_time": 1684290876,
  "urgent_time": 1684290876,
  "receiver_geo_lat": 2.440228,
  "receiver_geo_lng": 119.847010,
  "mtime": 1684290876
}];

class Api {
  constructor(data) {
    this.data = data;
    this.pager = {
      pageno: 1,
      count: 10,
      total: 20,
    };
  }

  list(req, res, next) {
    const { pageno, count } = req.body;
    const start = (pageno - 1) * count;
    const end = start + count;
    const result = listTable.slice(start, end);

    res.send({
      code: 200,
      message: 'success',
      list: result,
      pageno: pageno,
      count: count,
      total: listTable.length,
    });
  }

  deliveryProgress(req, res, next) {
    const { country_code, station_id } = req.body;

    res.send({
      code: 200,
      message: 'success',
      data: {
        "total_inbounded": 100,
        "to_assign_orders": 100,
        "to_assign_prev_day_orders": 100,
        "to_assign_today_orders": 100,
        "to_assign_assigned_today": 35,
        "to_handover_orders": 100,
        "to_handover_prev_day_orders": 100,
        "to_handover_today_orders": 100,
        "to_handover_handover_today": 35,
        "to_deliver_orders": 100,
        "to_deliver_prev_day_orders": 100,
        "to_deliver_today_orders": 100,
        "to_deliver_delivered_today": 35,
        "to_return_orders": 100,
        "to_return_prev_day_orders": 100,
        "to_return_today_orders": 100,
        "to_return_returned_today": 35
      },
    });
  }

  fleetHeadCounts(req, res, next) {
    const { country_code, station_id } = req.body;

    res.send({
      code: 200,
      message: 'success',
      data: {
        "full_time_actual_2_wheelers": 100,
        "full_time_schedule_2_wheelers": 100,
        "full_time_actual_4_wheelers": 100,
        "full_time_schedule_4_wheelers": 100,
        "full_time_actual_others_wheelers": 100,
        "full_time_schedule_others_wheelers": 100,
        "part_time_actual_2_wheelers": 100,
        "part_time_schedule_2_wheelers": 100,
        "part_time_actual_4_wheelers": 100,
        "part_time_schedule_4_wheelers": 100,
        "part_time_actual_others_wheelers": 100,
        "part_time_schedule_others_wheelers": 100
      },
    });
  }

  fleetOverall(req, res, next) {
    const { country_code, station_id } = req.body;

    res.send({
      code: 200,
      message: 'success',
      data: {
        "orders_to_assign": 100,
        "zones_to_assign": 100,
        "drivers_not_meeting_target": 100,
        "driver_backlog": 100
      },
    });
  }

  driversDeliveryList(req, res, next) {
    const { country_code, station_id } = req.body;

    res.send({
      "retcode": 7869309766969552,
      "message": "anim aute",
      "data": {
        "list": new Array(50).fill(null).map((_, index) => {
          return {
            "driver_id": index,
            "driver_name": "qui ullamco in",
            "vehicle_type": -6097092021511424,
            "contract_type": 4154504757325300,
            "delivered_orders": 70,
            "onhold_orders": 20 + index,
            "pending_orders": 10,
            "target_orders": 100,
            "zone_id": 0 + index
          };
        })
      }
    });
  }

  exportBacklogs(req, res, next) {
    const { country_code, station_id } = req.body;

    const result = fs.readFileSync(path.join(__dirname, '../public/xlsx/admin_import_pickup_dashboard_hourly_target.xlsx'))

    res.send(result);
  }

  zoneList(req, res, next) {
    const { country_code, station_id } = req.body;

    res.send({
      "retcode": 7869309766969552,
      "message": "anim aute",
      "data": [
        {
          zone_id: 1,
          zone_name: 'haha',
        },
        {
          zone_id: 2,
          zone_name: 'data',
        }
      ],
    });
  }

  driverList(req, res, next) {
    const { country_code, station_id } = req.body;

    res.send({
      "retcode": 7869309766969552,
      "message": "anim aute",
      "data": [
        {
          driver_id: 1,
          driver_name: 'haha',
        },
        {
          driver_id: 2,
          driver_name: 'data',
        }
      ],
    });
  }

  deliveryList(req, res, next) {
    const { country_code, station_id } = req.body;

    res.send({
      "retcode": -3207535567177308,
      "message": "ut incididunt laboris exercitation",
      "data": {
        "list": new Array(50).fill(null).map(() => ({
          "station_id": 1,
          "station_name": "proident ullamco minim ex dolor",
          "address_state": "laboris in",
          "address_city": "ut veniam in ",
          "days_to_clear": 1976903672794640.2,
          "backlog_zero_attempt": -5093867580385932,
          "backlog_gt_two_days": -6955379232863568,
          "total_inbounded": -4705615476233008,
          "forecasted": 7772600709619100,
          "max_last_7_days": -7402691235410200
        }))
      }
    });
  }

  deliveryListExport(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({});
  }

  notMeetingTarget(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": -5576042923288176,
      "message": "dolor pariatur ex",
      "data": {
        "quantity": -5705997171557156
      }
    });
  }

  progressList(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": 0,
      "message": "velit minim aute",
      "data": {
        "list": new Array(50).fill(null).map((_, index) => ({
          "station_id": index % 2 === 0 ? 417010 : 1,
          "station_name": "dolor nostrud dolor nostrud dolor nostrud dolor nostrud dolor nostrud dolor nostrud dolor nostrud",
          "is_meeting_target": false,
          "total_delivery": 5174538043489684,
          "sum_of_prod_target": -8259172496289308,
          "avg_fleet_productivity_2_wheels": 2926038338828260.5,
          "avg_fleet_productivity_4_wheels": 5504014701023589,
          "avg_fleet_productivity_others": 7480259341695344,
          "prod_target_2_wheels": 2084558122707416,
          "prod_target_4_wheels": -4780689460135516,
          "prod_target_others": 7431984701411880
        }))
      }
    });
  }

  logList(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": 0,
      "message": "Excepteur Duis velit irure",
      "data": {
        "log_list": [
          {
            "failed": 1,
            "log_id": 1,
            "operator": "laboris in",
            "succeeded": 1,
            "total_quantity": 1,
            "backlog_zero_attempt": -5093867580385932,
            "update_time": 23421323,
            "business_type": 1,
          },
          {
            "failed": 1,
            "log_id": 1,
            "operator": "laboris in",
            "succeeded": 1,
            "total_quantity": 1,
            "backlog_zero_attempt": -5093867580385932,
            "update_time": 23421323,
            "business_type": 1,
          },
        ]
      }
    });
  }

  logDetail(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": 0,
      "message": "elit nisi non exercitation",
      "data": {
        "list": [
          {
            "log_id": 0,
            "station_id": 0,
            "station_name": "amet cillu",
            "contract_type": "ut deserunt nisi",
            "vehicle_type": "in dolore in laboris",
            "product_target": 0,
            "cutoff_time": "enim commodo vel",
            "result": 1,
            "failed_reason": "Excepteur cupidatat velit"
          },
          {
            "log_id": 0,
            "station_id": 0,
            "station_name": "cupidatat exercitation laboris Ut",
            "contract_type": "ex tempor sint consequat",
            "vehicle_type": "enim ea",
            "product_target": 0,
            "cutoff_time": "proident ad nostrud",
            "result": 1,
            "failed_reason": "in consectetur reprehenderit"
          },
          {
            "log_id": 0,
            "station_id": 0,
            "station_name": "magna aute nulla reprehenderit",
            "contract_type": "nisi elit anim",
            "vehicle_type": "anim i",
            "product_target": 0,
            "cutoff_time": "magna",
            "result": 1,
            "failed_reason": "dolore reprehenderit non"
          },
          {
            "log_id": 0,
            "station_id": 0,
            "station_name": "Duis",
            "contract_type": "sed enim",
            "vehicle_type": "ex enim",
            "product_target": 0,
            "cutoff_time": "dolor Lorem in",
            "result": 1,
            "failed_reason": "minim sit qui"
          }
        ],
        "count": -4279264235815860,
        "total": 2427068174310216,
        "pageno": -5935566810376348,
        "update_time": 1276992989552960,
        "operator": "aute pariatur",
        "business_type": -6983068504618880
      }
    });
  }

  hubOverall(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": -6296805594811380,
      "message": "est laboris",
      "data": {
        "to_inbounded_orders": 100,
        "total_inbounded_orders": 100,
        "total_inbounded_forecast": 100,
        "total_delivered_orders": 100,
        "total_delivered_max_last_7_days": 100,
        "total_onhand_orders": 100,
        "total_onhand_ideal_days_to_clear": 100,
        "backlogs_orders": 100,
        "backlogs_aging_group_age_1": 100,
        "backlogs_aging_group_age_2": 100,
        "backlogs_aging_group_age_3": 100,
        "backlogs_aging_group_age_4": 100,
        "backlogs_aging_group_age_5": 100,
        "backlogs_aging_group_age_6": 100,
        "backlogs_aging_group_age_7": 100,
        "backlogs_delivery_attempts_1_times": 100,
        "backlogs_delivery_attempts_2_times": 100,
        "backlogs_delivery_attempts_3_times": 100,
        "dolore2": true
      }
    });
  }

  driverProductivity(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": -5575342864994076,
      "message": "aliqua Duis elit",
      "data": {
        "full_time_delivered_2_wheelers": 100,
        "full_time_assignment_2_wheelers": 100,
        "full_time_delivered_4_wheelers": 100,
        "full_time_assignment_4_wheelers": 100,
        "full_time_delivered_others_wheelers": 100,
        "full_time_assignment_others_wheelers": 100,
        "part_time_delivered_2_wheelers": 100,
        "part_time_assignment_2_wheelers": 100,
        "part_time_delivered_4_wheelers": 100,
        "part_time_assignment_4_wheelers": 100,
        "part_time_delivered_others_wheelers": 100,
        "part_time_assignment_others_wheelers": 100
      }
    });
  }

  stationList(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": -5575342864994076,
      "message": "aliqua Duis elit",
      "data": [
        {
          station_name: 'xx',
          station_id: 1,
        },
        {
          station_name: 'xxx',
          station_id: 2,
        }
      ]
    });
  }

  mapDriverList(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send(mapDriverlist);
  }

  mapDriverListDetail(req, res, next) {
    const { driver_id } = req.body;

    res.send({
      "retcode": 8375606534045092,
      "message": "nulla",
      "data": mapDriverlist.find(item => item.driver_id === driver_id),
    });
  }

  mapDriverDetail(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": 2187642451640748,
      "message": "consequat laboris et qui",
      "data": {
        "driver_id": -4238705848472588,
        "driver_name": "aliquip",
        "image": "http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        "phone": 13876540987,
        "contract_type": 796584700084384,
        "contract_type_name": "laborum",
        "vehicle_type": 4856138262648528,
        "vehicle_type_name": "aliquip",
        "delivering_num": 100,
        "on_hold_num": 3537863966637916,
        "delivered_num": 7083664864958676,
        "driver_lat": 1062370724979160.9,
        "driver_lng": -7793213286575056,
        "is_miss_location": false
      },
    });
  }

  mapDriverTodolist(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": 6631244828531168,
      "message": "id ad",
      "data": {
        "list": orderTodoList,
        "total": 5214894230572768
      }
    });
  }

  mapDriverOnHoldList(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": 8464589939162880,
      "message": "aute in nostrud ad",
      "data": {
        "list": orderOnHoldList,
        "total": 6452157490955364
      }
    });
  }

  mapDriverDeliveredList(req, res, next) {
    const { country_code, station_id, address_id_list } = req.body;

    res.send({
      "retcode": -2828835020186088,
      "message": "dolor deserunt",
      "data": {
        "list": orderDeliveredList,
        "total": -4476008214626540
      }
    });
  }

  mapOrderDetail(req, res, next) {
    const { order_id, driver_id } = req.body;

    res.send({
      "retcode": -2828835020186088,
      "message": "dolor deserunt",
      "data": {
        "order_info": orderDeliveredList.concat(orderTodoList, orderOnHoldList).find(item => item.order_id === order_id),
      }
    });
  }

  // wcs start
  login(req, res, next) {
    res.send({
      code: 200,
      message: 'success',
      data: {
        token: '12312312312',
      },
    });
  }

  getUserList(req, res, next) {
    res.send({
      code: 200,
      message: 'success',
      data: {
        list: new Array(8).fill().map((item, index) => {
          return {
            role_id: index + 1,
            role_name: 'de' + index,
            role_description: 'fasdfsadf',
            status: 1,
            ctime: 5454,
            utime: 64545,
          };
        })
      },
    });
  }

  getRoleList(req, res, next) {
    res.send({
      code: 200,
      message: 'success',
      data: {
        list: new Array(8).fill().map((item, index) => {
          return {
            role_id: index + 1,
            role_name: 'de' + index,
            role_description: 'sd',
            status: 1,
            ctime: 5454,
            utime: 64545,
          };
        })
      },
    });
  }
  // wcs end
}

module.exports = new Api();