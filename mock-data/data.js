const wcs_user_list = new Array(8).fill().map((item, index) => {
  return {
    userid: index + 1,
    email: 'sd',
    name: 'wer',
    create_time: 1728788039112,
    last_login_time: 1728788039112,
  };
});

const wcs_user_log = new Array(8).fill().map((item, index) => {
  return {
    operation_time: 123123,
    operator_email: 'string',
    operation: 1,
    affected_userid: 123123,
  };
});

const wcs_user_log_detail = {
  before_change: {
    email: '123123',
    name: 'string',
    password: 'string',
    role_id: '123123',
  },
  after_change: {
    email: '1231231',
    name: 'string1',
    password: 'string1',
    role_id: '1231231',
  }
};

const wcs_role_list = new Array(8).fill().map((item, index) => {
  return {
    role_id: index + 1,
    role_name: 'de' + index,
    role_description: 'sd',
    status: 1,
    create_time: 5454,
    update_time: 64545,
  };
});

const wcs_role_log = new Array(8).fill().map((item, index) => {
  return {
    log_id: index + 1,
    operation_time: 123123,
    operator_email: 'string',
    operation: index % 2 === 0 ? 1 : 2,
    affected_role_id: 123123,
  };
});

const wcs_role_log_detail = {
  before_change: {
    role_name: '123123',
    role_description: 'string',
    permission_list: 'string',
    status: true,
  },
  after_change: {
    role_name: '1231231',
    role_description: 'string1',
    permission_list: 'string1',
    status: false,
  }
};

const wcs_role_permission_list = [
  {
    permission_code: 'User_Management', // title
    permission_description: 'User Management', // name
    permission_id: 330000, // key 
    children: [
      {
        permission_code: 'User_List',
        permission_description: 'User List',
        permission_id: 330100,
        children: [
          {
            permission_code: 'View',
            permission_description: 'View',
            permission_id: 330106,
          },
          {
            permission_code: 'Edit',
            permission_description: 'Edit',
            permission_id: 330108,
          },
        ],
      },
      {
        permission_code: 'Role_List',
        permission_description: 'Role List',
        permission_id: 330200,
        children: [
          {
            permission_code: 'View',
            permission_description: 'View',
            permission_id: 330206,
          },
          {
            permission_code: 'Edit',
            permission_description: 'Edit',
            permission_id: 330208,
          },
        ],
      },
    ],
  },
];

module.exports = {
  wcs_user_list,
  wcs_role_list,
  wcs_user_log_detail,
  wcs_user_log,
  wcs_role_log,
  wcs_role_log_detail,
  wcs_role_permission_list,
};