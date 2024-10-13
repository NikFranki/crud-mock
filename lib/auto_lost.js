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

class AutoLost {
  constructor(data) {
    this.data = data;
    this.pager = {
      pageno: 1,
      count: 10,
      total: 20,
    };
  }

  getList(req, res, next) {
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

  downloadReport(req, res, next) {
    res.download(path.resolve(__dirname, '../public/images/a.png'), 'xxx.png')
  }
}

module.exports = new AutoLost();