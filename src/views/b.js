{
	"returnCode": "0000",
	"returnMsg": "成功",
	"timestamp": 1594022655736,
	"data": {
		"buttons": [{
			"code": "refresh",
			"has_required": 0,
			"check_action": null,
			"validate_flag": null,
			"rw_flag": 1,
			"icon": "android-refresh",
			"show_button": null,
			"audit_flag": null,
			"tranfer_winid": null,
			"returnback": null,
			"permission_flag": null,
			"position_left": 1,
			"param": null,
			"name": "刷新",
			"id": 453,
			"event": "refresh",
			"lookupcolumn": null
		}, {
			"code": "modify",
			"has_required": 0,
			"check_action": null,
			"validate_flag": null,
			"rw_flag": 1,
			"icon": "edit",
			"show_button": "{$.fs_hosp_deploy_order.pause_restart_flag} == 0 ?'1':'0'",
			"audit_flag": null,
			"tranfer_winid": null,
			"returnback": null,
			"permission_flag": null,
			"position_left": 1,
			"param": null,
			"name": "修改",
			"id": 341,
			"event": "modify",
			"lookupcolumn": null
		}, {
			"code": "updateparam",
			"has_required": 0,
			"check_action": null,
			"validate_flag": null,
			"rw_flag": 1,
			"icon": "edit",
			"show_button": "{$.fs_hosp_deploy_order.pause_restart_flag} == 0  && ({$.fs_hosp_deploy_order.status} == 55) && {$.fs_hosp_deploy_order.has_rs_flag} == 1 ? '1':'0'",
			"audit_flag": 0,
			"tranfer_winid": null,
			"returnback": null,
			"permission_flag": null,
			"position_left": 0,
			"param": "replace into fs_hosp_deploy_time(pause_time,deploy_id) \r\nselect now(),{0} from dual\r\nwhere 1= 1 and not EXISTS (select 1 from fs_hosp_deploy_time where restart_time is null and deploy_id = {0})",
			"name": "暂停",
			"id": 1234,
			"event": "updateparam",
			"lookupcolumn": null
		}, {
			"code": "updateparam",
			"has_required": 0,
			"check_action": null,
			"validate_flag": null,
			"rw_flag": 1,
			"icon": "edit",
			"show_button": "{$.fs_hosp_deploy_order.pause_restart_flag} != 0  &&  ({$.fs_hosp_deploy_order.status} == 55) && {$.fs_hosp_deploy_order.has_rs_flag} == 1 ? '1':'0'",
			"audit_flag": 0,
			"tranfer_winid": null,
			"returnback": null,
			"permission_flag": null,
			"position_left": 0,
			"param": "update fs_hosp_deploy_time\r\nset restart_time = now()\r\nwhere 1 = 1 and deploy_id = {0} and restart_time is NULL",
			"name": "开始",
			"id": 1235,
			"event": "updateparam",
			"lookupcolumn": null
		}, {
			"code": "save",
			"has_required": 0,
			"check_action": null,
			"validate_flag": null,
			"rw_flag": 2,
			"icon": "archive",
			"show_button": null,
			"audit_flag": null,
			"tranfer_winid": null,
			"returnback": null,
			"permission_flag": null,
			"position_left": 1,
			"param": null,
			"name": "保存",
			"id": 343,
			"event": "save",
			"lookupcolumn": null
		}, {
			"code": "cancel",
			"has_required": 0,
			"check_action": null,
			"validate_flag": null,
			"rw_flag": 2,
			"icon": "android-cancel",
			"show_button": null,
			"audit_flag": null,
			"tranfer_winid": null,
			"returnback": null,
			"permission_flag": null,
			"position_left": 1,
			"param": null,
			"name": "取消",
			"id": 348,
			"event": "cancel",
			"lookupcolumn": null
		}, {
			"code": "submit",
			"has_required": 0,
			"check_action": null,
			"validate_flag": null,
			"rw_flag": 1,
			"icon": "android-list",
			"show_button": "{$.fs_hosp_deploy_order.pause_restart_flag} == 0 ?'1':'0'",
			"audit_flag": null,
			"tranfer_winid": null,
			"returnback": null,
			"permission_flag": null,
			"position_left": 0,
			"param": null,
			"name": "提交",
			"id": 344,
			"event": "bpm_submit",
			"lookupcolumn": null
		}, {
			"code": "remark",
			"has_required": 0,
			"check_action": null,
			"validate_flag": null,
			"rw_flag": 1,
			"icon": "reply",
			"show_button": "{$.fs_hosp_deploy_order.pause_restart_flag} == 0 && {$.fs_hosp_deploy_order.status} > 2 ?'1':'0'",
			"audit_flag": null,
			"tranfer_winid": null,
			"returnback": null,
			"permission_flag": null,
			"position_left": 0,
			"param": null,
			"name": "回复",
			"id": 349,
			"event": "bpm_remark",
			"lookupcolumn": null
		}, {
			"code": "undo",
			"has_required": 0,
			"check_action": null,
			"validate_flag": null,
			"rw_flag": 1,
			"icon": "ios-undo",
			"show_button": "{$.fs_hosp_deploy_order.pause_restart_flag} == 0 ?'1':'0'",
			"audit_flag": null,
			"tranfer_winid": null,
			"returnback": null,
			"permission_flag": null,
			"position_left": 0,
			"param": null,
			"name": "撤销",
			"id": 345,
			"event": "bpm_cancel",
			"lookupcolumn": null
		}],
		"data_permission": {
			"perm_id2": "1281,645,1255,1417,1228,1517,910,1423,1458,1460,1238,1528,1369,1306,1276,1404,1532,637,1373,1437,1278,1534,1439",
			"perm_id1": "605"
		},
		"window": {
			"template": "bill",
			"data": {
				"id": 46,
				"meta": {
					"busitype": "1",
					"name": "医院部署工单详情",
					"uitype": "bill",
					"colpk": ["id"],
					"url": "sys/window/common_detail"
				},
				"main": {
					"meta": [{
						"computeColumns": {},
						"updateColumns": ["tmp1", "id", "hosp_id", "rel_manager_id", "rel_manager", "hosp_name", "manager_id", "type", "status", "department", "depart_name", "first_flag", "manager_id", "transfer_manager_id", "sightc_flag", "work_order_person", "work_order_tel", "business_side", "direct_contact_person", "tmp2", "tmp3", "has_hard_apply", "send_back_address", "hardware_manager", "hardware_postman", "send_back_tracking_num", "fs_aio_type", "aio_type_list", "aio_type_list_text", "aio_qty", "aio_list", "aio_text_list", "fs_server_type", "server_qty", "route_qty", "pad_qty", "pc_qty", "card4g_qty", "smart_phone_num", "receiver_name", "receiver_tel", "receiver_addr", "other_remark", "hard_apply_remark", "hard_apply_url", "confirm_time", "tracking_num", "tmp4", "depart_num", "expect_dev_time", "expect_dev_time2", "actual_deploy_time", "workload", "memo", "attachment_url", "interface_userlist", "execute_userlist", "transfer_engineers", "transfer_imp_engineers", "accept_report", "pre_attachment"],
						"multipleColumns": {
							"interface_userlist": ",",
							"execute_userlist": ","
						},
						"title": "基本信息",
						"type": "form",
						"disable2": "{status} == 50 ? '1':'0'",
						"writebackColumns": {
							"area": "area_list#region1,region2,region3"
						},
						"defaultColumns": {
							"role_name": "crm_hosp_deploy_engneer",
							"work_order_person": "$userid",
							"work_person_name": "$username",
							"send_back_address": "浙江省杭州市余杭区文一西路998号 未来科技城.海创园 12号楼5-6楼",
							"work_order_tel": "$telphone",
							"show_flag": "1",
							"department": "$deptId",
							"type": 2,
							"rel_manager_id": "$userid",
							"sightc_flag": 0,
							"depart_name": "$deptName",
							"status": 1,
							"rel_manager": "$username"
						},
						"remapColumns": {
							"expect_dev_time2": "expect_dev_time",
							"card4g_qty": "4gcard_qty"
						},
						"disable": "0",
						"id": "fs_hosp_deploy_order",
						"updateTypeColumns": {
							"hard_apply_remark": {
								"updatable": "1",
								"type": "strinsg"
							},
							"send_back_tracking_num": {
								"updatable": "1",
								"type": "string"
							},
							"memo": {
								"updatable": "1",
								"type": "string"
							},
							"aio_qty": {
								"updatable": null,
								"type": "number"
							},
							"type": {
								"updatable": "1",
								"type": "number"
							},
							"transfer_engineers": {
								"updatable": "1",
								"type": "string"
							},
							"depart_name": {
								"updatable": null,
								"type": "string"
							},
							"rel_manager": {
								"updatable": "1",
								"type": "string"
							},
							"interface_userlist": {
								"updatable": null,
								"type": "string"
							},
							"server_qty": {
								"updatable": null,
								"type": "number"
							},
							"execute_userlist": {
								"updatable": null,
								"type": "string"
							},
							"id": {
								"updatable": "1",
								"type": "string"
							},
							"direct_contact_person": {
								"updatable": "1",
								"type": "string"
							},
							"card4g_qty": {
								"updatable": null,
								"type": "number"
							},
							"aio_type_list_text": {
								"updatable": "1",
								"type": "string"
							},
							"fs_server_type": {
								"updatable": null,
								"type": "number"
							},
							"rel_manager_id": {
								"updatable": "1",
								"type": "number"
							},
							"sightc_flag": {
								"updatable": null,
								"type": "number"
							},
							"hosp_name": {
								"updatable": "1",
								"type": "string"
							},
							"work_order_person": {
								"updatable": "1",
								"type": "number"
							},
							"accept_report": {
								"updatable": null,
								"type": "string"
							},
							"depart_num": {
								"updatable": null,
								"type": "number"
							},
							"receiver_addr": {
								"updatable": null,
								"type": "string"
							},
							"status": {
								"updatable": "1",
								"type": "number"
							},
							"route_qty": {
								"updatable": null,
								"type": "number"
							},
							"tracking_num": {
								"updatable": null,
								"type": "string"
							},
							"send_back_address": {
								"updatable": "1",
								"type": "string"
							},
							"transfer_manager_id": {
								"updatable": "1",
								"type": "number"
							},
							"receiver_tel": {
								"updatable": null,
								"type": "string"
							},
							"has_hard_apply": {
								"updatable": null,
								"type": "number"
							},
							"pc_qty": {
								"updatable": null,
								"type": "number"
							},
							"manager_id": {
								"updatable": "1",
								"type": "number"
							},
							"receiver_name": {
								"updatable": null,
								"type": "string"
							},
							"department": {
								"updatable": null,
								"type": "number"
							},
							"transfer_imp_engineers": {
								"updatable": "1",
								"type": "string"
							},
							"expect_dev_time2": {
								"updatable": "1",
								"type": "date"
							},
							"pad_qty": {
								"updatable": null,
								"type": "number"
							},
							"actual_deploy_time": {
								"updatable": "1",
								"type": "date"
							},
							"hardware_postman": {
								"updatable": "1",
								"type": "string"
							},
							"workload": {
								"updatable": null,
								"type": "number"
							},
							"aio_text_list": {
								"updatable": "1",
								"type": "string"
							},
							"hosp_id": {
								"updatable": "1",
								"type": "string"
							},
							"smart_phone_num": {
								"updatable": null,
								"type": "number"
							},
							"attachment_url": {
								"updatable": "1",
								"type": "string"
							},
							"confirm_time": {
								"updatable": "1",
								"type": "date"
							},
							"other_remark": {
								"updatable": "1",
								"type": "strinsg"
							},
							"pre_attachment": {
								"updatable": null,
								"type": "string"
							},
							"hard_apply_url": {
								"updatable": "1",
								"type": "string"
							},
							"work_order_tel": {
								"updatable": "1",
								"type": "string"
							},
							"hardware_manager": {
								"updatable": "1",
								"type": "string"
							},
							"expect_dev_time": {
								"updatable": "1",
								"type": "date"
							},
							"fs_aio_type": {
								"updatable": null,
								"type": "number"
							},
							"business_side": {
								"updatable": "1",
								"type": "string"
							},
							"first_flag": {
								"updatable": null,
								"type": "number"
							}
						},
						"billcheck": "SELECT\nCASE\n\t\nWHEN EXISTS\n\t(\nSELECT\n\t1 \nFROM\n\tfs_hosp_deploy_order b where a.hosp_id = b.hosp_id \n\tAND a.type = b.type \n\tAND a.id != b.id \n\tand b.status = 1 and b.department = 1\n\t) THEN\n\tCONCAT_WS( '','', a.hosp_name, crm.fn_get_lookup_desc(''hosp_deploy_order_type'',a.type),  ''存在未提交的工单,请提交该工单后重试'' ) \n\telse ''''\n\tEND error_msg \nFROM\n\tfs_hosp_deploy_order a \nWHERE\n\ta.id = {0} and a.status = 1 and a.department = 1 "
					}],
					"items": [
						[{
							"size": "large",
							"id": "tmp1",
							"label": "基本信息",
							"uitype": "title"
						}, {
							"visible": "0",
							"disable": "0",
							"updatable": "1",
							"id": "id",
							"label": "id",
							"type": "string"
						}, {
							"visible": "0",
							"disable": "0",
							"updatable": "1",
							"id": "hosp_id",
							"label": "医院id",
							"type": "string"
						}, {
							"default": "$userid",
							"visible": "0",
							"disable": "0",
							"updatable": "1",
							"id": "rel_manager_id",
							"label": "rel_manager_id",
							"type": "number"
						}, {
							"default": "$username",
							"visible": "0",
							"disable": "0",
							"updatable": "1",
							"id": "rel_manager",
							"label": "rel_manager",
							"type": "string"
						}, {
							"size": "medium",
							"param": "{\"main\": [\"fs_hosp_deploy_order#show_flag\",\"main#show_flag\"]}",
							"disable": "{status} > 1 ? '1':'0'",
							"lookupwindow": "7",
							"updatable": "1",
							"id": "hosp_name",
							"label": "医院名称",
							"type": "string",
							"returnback": "hosp_id,hosp_name,area_list,manager_id,manager_name,onhand_workload,first_flag,hardware_manager,hardware_manager_name,hardware_postman,hardware_postman_name,hardware_manager_phone",
							"required": "1",
							"lookupcolumn": "id,name,region_list,manager_id,manager_name,onhand_workload,first_flag,hardware_manager,hardware_manager_name,hardware_postman,hardware_postman_name,hardware_manager_phone"
						}, {
							"default": "1",
							"visible": "0",
							"updatable": "0",
							"id": "show_flag",
							"label": "新增按钮显示",
							"type": "string"
						}, {
							"lookup": "/sys/lookup/baseinfo_sublist/region",
							"writeback": "region1,region2,region3",
							"disable": "1",
							"updatable": "0",
							"id": "area",
							"label": "区域",
							"uitype": "cascader",
							"type": "string",
							"returnback": "area_list",
							"separator": " "
						}, {
							"visible": "0",
							"disable": "1",
							"updatable": "1",
							"id": "manager_id",
							"label": "区域经理id",
							"type": "number",
							"required": "{status} >1 ? '1':'0'"
						}, {
							"visible": "0",
							"disable": "1",
							"updatable": "0",
							"id": "manager_iddj",
							"label": "区域经理id",
							"type": "number"
						}, {
							"visible": "0",
							"updatable": "0",
							"id": "region1",
							"label": "region1",
							"type": "number"
						}, {
							"visible": "0",
							"updatable": "0",
							"id": "region2",
							"label": "region2",
							"type": "number"
						}, {
							"visible": "0",
							"updatable": "0",
							"id": "region3",
							"label": "region3",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/hosp_deploy_order_type",
							"default": 2,
							"disable": "{status} >5 ? '1':'0'",
							"updatable": "1",
							"id": "type",
							"label": "工单类型",
							"uitype": "select",
							"type": "number",
							"required": "1"
						}, {
							"lookup": "/sys/lookup/codes/hosp_deploy_order_status",
							"default": 1,
							"visible": "{type} < 9? '1':'0'",
							"disable": "1",
							"updatable": "1",
							"id": "status",
							"label": "工单状态",
							"uitype": "select",
							"type": "number"
						}, {
							"default": "$deptId",
							"visible": "0",
							"id": "department",
							"label": "部门id",
							"type": "number"
						}, {
							"default": "$deptName",
							"disable": "1",
							"id": "depart_name",
							"label": "所在部门",
							"type": "string"
						}, {
							"lookup": "/sys/lookup/codes/yesno",
							"visible": "{type} >0 && {type} <= 6 ? '1':'0'",
							"disable": "{status} == 5 ? '0':'1'",
							"id": "first_flag",
							"label": "首家资质",
							"uitype": "select",
							"type": "number",
							"required": "{type} >0 && {type} <= 6 ? '1':'0'"
						}, {
							"visible": "0",
							"disable": "1",
							"updatable": "1",
							"id": "manager_id",
							"label": "区域经理id",
							"type": "number",
							"required": "{status} >1 ? '1':'0'"
						}, {
							"visible": "{type} >0 && {type} <= 6 ? '1':'0'",
							"disable": "1",
							"lookupwindow": "70",
							"updatable": "0",
							"id": "manager_name",
							"label": "区域经理",
							"type": "string",
							"returnback": "manager_id,manager_name",
							"lookupcolumn": "manager_id1,manager_name1"
						}, {
							"visible": "0",
							"disable": "1",
							"updatable": "1",
							"id": "transfer_manager_id",
							"label": "转移区域经理id",
							"type": "number",
							"required": "{status} >1 ? '1':'0'"
						}, {
							"visible": "{type} >0 && {type} <= 6 ? '1':'0'",
							"disable": "{status} == 10 ? '0':'1'",
							"lookupwindow": "70",
							"updatable": "0",
							"id": "transfer_manager_name",
							"label": "转移区域经理",
							"type": "string",
							"returnback": "transfer_manager_id,transfer_manager_name",
							"lookupcolumn": "manager_id1,manager_name1"
						}, {
							"lookup": "/sys/lookup/codes/yesno",
							"default": 0,
							"visible": "{type} >0 && {type} <= 6 ? '1':'0'",
							"disable": " {status} == 5 || {status} == 1 ? '0':'1'",
							"id": "sightc_flag",
							"label": "标杆医院",
							"uitype": "select",
							"type": "number",
							"required": "{status} > 1 ? '1':'0'"
						}, {
							"default": "$userid",
							"visible": "0",
							"updatable": "1",
							"id": "work_order_person",
							"label": "工单负责人",
							"type": "number"
						}, {
							"default": "$username",
							"visible": "1",
							"disable": "1",
							"updatable": "0",
							"id": "work_person_name",
							"label": "工单负责人",
							"type": "string",
							"required": "1"
						}, {
							"default": "$telphone",
							"regex": "/1\\d{10}/",
							"visible": "1",
							"disable": "1",
							"updatable": "1",
							"id": "work_order_tel",
							"label": "联系电话",
							"type": "string"
						}, {
							"visible": "{type} == 7? '1':'0'",
							"disable": "0",
							"updatable": "1",
							"id": "business_side",
							"label": "业务方",
							"type": "string"
						}, {
							"visible": "{type} == 7? '1':'0'",
							"disable": "0",
							"updatable": "1",
							"id": "direct_contact_person",
							"label": "直接对接人",
							"type": "string"
						}, {
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9? '1':'0'",
							"size": "large",
							"id": "tmp2",
							"label": "硬件申请",
							"uitype": "title"
						}, {
							"visible": "{type} == 10? '1':'0'",
							"size": "large",
							"id": "tmp3",
							"label": "硬件更换",
							"uitype": "title"
						}, {
							"lookup": "/sys/lookup/codes/yesno",
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"id": "has_hard_apply",
							"label": "是否需要硬件",
							"uitype": "select",
							"type": "number",
							"required": "1"
						}, {
							"default": "浙江省杭州市余杭区文一西路998号 未来科技城.海创园 12号楼5-6楼",
							"visible": "{type} == 10? '1':'0'",
							"size": "medium",
							"updatable": "1",
							"id": "send_back_address",
							"label": "寄回地址",
							"type": "string"
						}, {
							"visible": "0",
							"disable": "0",
							"updatable": "1",
							"id": "hardware_manager",
							"label": "hardware_manager",
							"type": "string"
						}, {
							"visible": "{type} == 10 ? '1':'0'",
							"disable": "1",
							"updatable": "0",
							"id": "hardware_manager_name",
							"label": "寄回收件人",
							"type": "string"
						}, {
							"visible": "{type} == 10 ? '1':'0'",
							"disable": "1",
							"updatable": "0",
							"id": "hardware_manager_phone",
							"label": "寄回人电话",
							"type": "string"
						}, {
							"visible": "0",
							"disable": "0",
							"updatable": "1",
							"id": "hardware_postman",
							"label": "hardware_postman",
							"type": "string"
						}, {
							"visible": "{type} == 10 ? '1':'0'",
							"disable": "1",
							"updatable": "0",
							"id": "hardware_postman_name",
							"label": "硬件发货人",
							"type": "string"
						}, {
							"visible": "{type} == 10? '1':'0'",
							"size": "large",
							"updatable": "1",
							"id": "send_back_tracking_num",
							"label": "寄回物流单号",
							"type": "string",
							"required": "{type} == 10 ? '1':'0'"
						}, {
							"lookup": "/sys/lookup/codes/fs_aio_type",
							"visible": "0",
							"id": "fs_aio_type",
							"label": "基座类型",
							"uitype": "select",
							"type": "number"
						}, {
							"start_length": 1,
							"chineseid": "aio_type_list_text",
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"size": "large",
							"limit": 5,
							"id": "aio_type_list",
							"label": "基座类型",
							"uitype": "inner_table",
							"uicontent": "[{\"id\":\"aio_type\",\"label\":\"基座类型\",\"savelabel\":\"label\", \"uitype\":\"select\",\"lookup\":\"/sys/lookup/codes/fs_aio_type\"}, {\"id\":\"aio_num\", \"type\":\"number\",\"label\":\"基座数量\"}]"
						}, {
							"visible": "0",
							"updatable": "1",
							"id": "aio_type_list_text",
							"label": "基座类型文本",
							"type": "string"
						}, {
							"visible": "0",
							"maxlength": 4,
							"id": "aio_qty",
							"label": "一体机数量",
							"type": "number"
						}, {
							"start_length": 1,
							"chineseid": "aio_text_list",
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"size": "large",
							"limit": 5,
							"id": "aio_list",
							"label": "一体",
							"uitype": "inner_table",
							"uicontent": "[{\"id\":\"aio_type\",\"label\":\"一体机类型\",\"savelabel\":\"label\", \"uitype\":\"select\",\"lookup\":\"/sys/lookup/codes/aio_type\"}, {\"id\":\"aio_num\", \"type\":\"number\",\"label\":\"一体机数量\"}]"
						}, {
							"visible": "0",
							"updatable": "1",
							"id": "aio_text_list",
							"label": "一体机类型文本",
							"type": "string"
						}, {
							"lookup": "/sys/lookup/codes/fs_server_type",
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"id": "fs_server_type",
							"label": "服务器类型",
							"uitype": "select",
							"type": "number"
						}, {
							"visible": "0",
							"updatable": "0",
							"id": "fs_server_type_name",
							"label": "服务器类型名称",
							"type": "string"
						}, {
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"maxlength": 4,
							"id": "server_qty",
							"label": "服务器数量",
							"type": "number"
						}, {
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"maxlength": 4,
							"id": "route_qty",
							"label": "路由器数量",
							"type": "number"
						}, {
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"maxlength": 4,
							"id": "pad_qty",
							"label": "PAD数量",
							"type": "number"
						}, {
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"maxlength": 4,
							"id": "pc_qty",
							"label": "电脑数量",
							"type": "number"
						}, {
							"colname": "4gcard_qty",
							"visible": "{type} >0 && {type} <= 5  ||{type} == 9||{type} == 10 ? '1':'0'",
							"maxlength": 4,
							"id": "card4g_qty",
							"label": "4G网卡数量",
							"type": "number"
						}, {
							"visible": "{type} >0 && {type} <= 5  ||{type} == 9||{type} == 10 ? '1':'0'",
							"maxlength": 4,
							"id": "smart_phone_num",
							"label": "智能手机数量",
							"type": "number"
						}, {
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"id": "receiver_name",
							"label": "收货人",
							"type": "string",
							"required": "{has_hard_apply} == 1 ? '1':'0'"
						}, {
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"id": "receiver_tel",
							"label": "收货人电话",
							"type": "string",
							"required": "{has_hard_apply} == 1 ? '1':'0'"
						}, {
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"size": "medium",
							"id": "receiver_addr",
							"label": "收货地址",
							"type": "string",
							"required": "{has_hard_apply} == 1 ? '1':'0'"
						}, {
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"size": "large",
							"updatable": "1",
							"id": "other_remark",
							"label": "其他",
							"uitype": "textarea",
							"type": "strinsg",
							"rows": 5
						}, {
							"visible": "{type} == 9||{type} == 10? '1':'0'",
							"size": "large",
							"updatable": "1",
							"id": "hard_apply_remark",
							"label": "备注",
							"uitype": "textarea",
							"type": "strinsg",
							"rows": 5
						}, {
							"visible": "{type} == 9||{type} == 10? '1':'0'",
							"disable": "0",
							"updatable": "1",
							"id": "hard_apply_url",
							"label": "附件",
							"uitype": "upload",
							"type": "string",
							"required": "0"
						}, {
							"visible": "{type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"disable": "{status} <15 ? '0':'1'",
							"updatable": "1",
							"id": "confirm_time",
							"label": "确认发货时间",
							"uitype": "datepicker",
							"type": "date",
							"required": "0"
						}, {
							"start_length": 1,
							"regex": "((\\s+)|\"\")",
							"visible": "{status} >= 43 && {type} >0 && {type} <= 5 ||{type} == 9||{type} == 10? '1':'0'",
							"size": "large",
							"limit": 5,
							"id": "tracking_num",
							"label": "物流单号",
							"uitype": "mulitem",
							"type": "string",
							"required": "{status} == 43 && {has_hard_apply} == 1 ? '1':'0'"
						}, {
							"visible": "{type} >0 && {type} <= 6 ? '1':'0'",
							"size": "large",
							"id": "tmp4",
							"label": "部署资料",
							"uitype": "title"
						}, {
							"visible": "{type} >0 && {type} <= 6  && {status}  >=10? '1':'0'",
							"disable": "0",
							"id": "depart_num",
							"label": "医院科室数量",
							"type": "number",
							"required": "{manager_id} != null && {status} >= 10 && {type} != 4 && {type} != 5 ? '1':'0'"
						}, {
							"visible": "{type} >0 && {type} <= 6 ? '1':'0'",
							"disable": "0",
							"updatable": "1",
							"id": "expect_dev_time",
							"label": "期望部署时间",
							"uitype": "datepicker",
							"type": "date",
							"required": "{type} !=4 && {type} !=5 ? '1':'0'"
						}, {
							"colname": "expect_dev_time",
							"visible": "{type} >6  && {type} !=9  && {type} !=10 ? '1':'0'",
							"disable": "0",
							"updatable": "1",
							"id": "expect_dev_time2",
							"label": "期望完成时间",
							"uitype": "datepicker",
							"type": "date",
							"required": "{type} != 4 && {type} != 5 ?'1':'0'"
						}, {
							"visible": "{type} >0 && {type} <= 6 && {status} >=10 ? '1':'0'",
							"updatable": "1",
							"id": "actual_deploy_time",
							"label": "实际入场部署时间",
							"uitype": "datepicker",
							"type": "date",
							"required": "{manager_id} != null && {status} >= 50 && {type} != 4 && {type} != 5 ? '1':'0'"
						}, {
							"regex": "/^[\\+\\-]{0,1}\\d+(\\.\\d+){0,1}$/",
							"visible": "{type} >6 &&{type} <9 && {status}>= 20 ? '1':'0'",
							"id": "workload",
							"label": "工作量",
							"type": "number",
							"required": "{type} >6  && {status}>= 20 && {type} != 4 && {type} != 5 ? '1':'0'"
						}, {
							"regex": "/^[\\+\\-]{0,1}\\d+(\\.\\d+){0,1}$/",
							"visible": "{type} >6 &&{type} <9 && {status}>=20 ? '1':'0'",
							"disable": "1",
							"updatable": "0",
							"id": "onhand_workload",
							"label": "剩余工作量",
							"type": "number",
							"required": "0"
						}, {
							"visible": "{type} <9 ? '1':'0'",
							"size": "large",
							"disable": "0",
							"updatable": "1",
							"id": "memo",
							"label": "备注",
							"uitype": "textarea",
							"type": "string",
							"rows": 5,
							"required": "0"
						}, {
							"visible": "{type} <9 ? '1':'0'",
							"disable": "0",
							"updatable": "1",
							"id": "attachment_url",
							"label": "附件",
							"uitype": "upload",
							"type": "string",
							"required": "0"
						}, {
							"lookup": "/sys/lookup/basesubinfo/users_by_idlist/{id}",
							"visible": "{type} >0 && {type} < 7 && {status} >= 10 && {transfer_manager_id} == null || {type} >0 && {type} < 7 && {transfer_manager_id} == {$userid} ||  {type} >0 && {type} < 7 &&  {status} >15? '1':'0'",
							"size": "medium",
							"param": "interface_engineers",
							"disable": "{status} == 10 || {status} == 15 ||  {status} == 53 ? '0':'1'",
							"multiple": "1",
							"id": "interface_userlist",
							"label": "指定对接工程师",
							"uitype": "select",
							"type": "string",
							"required": "{status} >=10 ? '1':'0'"
						}, {
							"lookup": "/sys/lookup/basesubinfo/users_by_idlist/{id}",
							"visible": "{type} >0 && {type} < 7 && {status} >= 10 && {transfer_manager_id} == null || {type} >0 && {type} < 7 && {transfer_manager_id} == {$userid} ||  {type} >0 && {type} < 7 &&  {status} >15? '1':'0'",
							"size": "medium",
							"param": "deploy_engineers",
							"disable": "{status} == 10 || {status} == 15 ||  {status} == 53 ? '0':'1'",
							"multiple": "1",
							"id": "execute_userlist",
							"label": "指定实施工程师",
							"uitype": "select",
							"type": "string",
							"required": "{status} >=10 ? '1':'0'"
						}, {
							"default": "crm_hosp_deploy_engneer",
							"visible": "0",
							"detailDefault": "1",
							"updatable": "0",
							"id": "role_name",
							"label": "角色名称",
							"type": "string"
						}, {
							"visible": "0",
							"disable": "0",
							"updatable": "1",
							"id": "transfer_engineers",
							"label": "transfer_engineers",
							"type": "string"
						}, {
							"visible": "{type} >0 && {type} <= 6 && {status} >=50 ? '1':'0'",
							"param": "{\"main\":[\"fs_hosp_malfuction#role_name\",\"main#role_name\"]}",
							"disable": "{status} == 50 ? '0':'1'",
							"lookupwindow": "152",
							"updatable": "0",
							"id": "transfer_engineers_name",
							"label": "转移对接工程师",
							"type": "string",
							"returnback": "transfer_engineers,transfer_engineers_name",
							"mutiple": "1",
							"lookupcolumn": "id,display_name"
						}, {
							"visible": "0",
							"disable": "0",
							"updatable": "1",
							"id": "transfer_imp_engineers",
							"label": "transfer_imp_engineers",
							"type": "string"
						}, {
							"visible": "{type} >0 && {type} <= 6 && {status} >=50 ? '1':'0'",
							"param": "{\"main\":[\"fs_hosp_malfuction#role_name\",\"main#role_name\"]}",
							"disable": "{status} == 50 ? '0':'1'",
							"lookupwindow": "152",
							"updatable": "0",
							"id": "transfer_imp_name",
							"label": "转移实施工程师",
							"type": "string",
							"returnback": "transfer_imp_engineers,transfer_imp_name",
							"mutiple": "1",
							"lookupcolumn": "id,display_name"
						}, {
							"visible": "{type} >0 && {type} <= 6 ? '1':'0'",
							"id": "accept_report",
							"label": "验收报告",
							"uitype": "upload",
							"type": "string",
							"required": "{type} >0 && {type} <= 6 ? '1':'0'"
						}, {
							"visible": "{type} >0 && {type} <= 6 ? '1':'0'",
							"disable": "0",
							"id": "pre_attachment",
							"label": "准备资料附件",
							"uitype": "upload",
							"type": "string",
							"required": "0"
						}, {
							"visible": "0",
							"size": "medium",
							"disable": "0",
							"updatable": "0",
							"id": "refuse_reason",
							"label": "驳回原因",
							"type": "string"
						}]
					]
				},
				"tabs": {
					"meta": [{
						"computeColumns": {},
						"updateColumns": ["id", "route_type", "action_name", "assign_type", "route_assign", "next_route1", "next_route2", "next_route3", "next_route4", "next_route5"],
						"async_flag": "1",
						"multipleColumns": {},
						"title": "流程图",
						"type": "bpm_diagram",
						"url": "sys/bpm/rptrouteinfo",
						"writebackColumns": {},
						"defaultColumns": {},
						"readonly": "1",
						"remapColumns": {},
						"id": "bpm_diagram",
						"updateTypeColumns": {
							"next_route3": {
								"updatable": null,
								"type": null
							},
							"next_route4": {
								"updatable": null,
								"type": null
							},
							"next_route1": {
								"updatable": null,
								"type": null
							},
							"next_route2": {
								"updatable": null,
								"type": null
							},
							"action_name": {
								"updatable": null,
								"type": null
							},
							"route_type": {
								"updatable": null,
								"type": null
							},
							"route_assign": {
								"updatable": null,
								"type": null
							},
							"id": {
								"updatable": null,
								"type": null
							},
							"assign_type": {
								"updatable": null,
								"type": null
							},
							"next_route5": {
								"updatable": null,
								"type": null
							}
						}
					}, {
						"computeColumns": {},
						"updateColumns": ["id", "route_name", "user_name", "modify_time", "process_flag", "process_note"],
						"async_flag": "1",
						"multipleColumns": {},
						"title": "审批记录",
						"type": "grid",
						"url": "sys/bpm/rptauditdetail",
						"writebackColumns": {},
						"defaultColumns": {},
						"readonly": "1",
						"remapColumns": {},
						"id": "bpm_audit_detail",
						"updateTypeColumns": {
							"route_name": {
								"updatable": null,
								"type": null
							},
							"process_flag": {
								"updatable": null,
								"type": null
							},
							"user_name": {
								"updatable": null,
								"type": null
							},
							"modify_time": {
								"updatable": null,
								"type": null
							},
							"id": {
								"updatable": null,
								"type": null
							},
							"process_note": {
								"updatable": null,
								"type": null
							}
						}
					}, {
						"computeColumns": {},
						"updateColumns": ["id", "create_user", "remark", "create_time"],
						"async_flag": "1",
						"multipleColumns": {},
						"title": "回复记录",
						"type": "grid",
						"url": "sys/bpm/remarkinfo",
						"writebackColumns": {},
						"defaultColumns": {},
						"readonly": "1",
						"remapColumns": {},
						"id": "bpm_remark_detail",
						"updateTypeColumns": {
							"create_time": {
								"updatable": null,
								"type": null
							},
							"remark": {
								"updatable": null,
								"type": null
							},
							"create_user": {
								"updatable": null,
								"type": null
							},
							"id": {
								"updatable": null,
								"type": null
							}
						}
					}, {
						"colfk": ["deploy_id"],
						"computeColumns": {},
						"visible": "1",
						"updateColumns": ["id", "hosp_id", "level", "address", "create_user", "create_time", "nurse_person", "nurse_telphone", "info_person", "info_telphone", "has_wechat", "has_interface", "service_provider", "service_type", "has_pad", "pad_num", "aio_list"],
						"multipleColumns": {},
						"title": "商务信息登记表",
						"type": "form",
						"writebackColumns": {},
						"defaultColumns": {
							"create_username": "$username",
							"create_time": "$now",
							"name": "{$.fs_hosp_deploy_order.hosp_name}",
							"create_user": "$userid",
							"hosp_id": "{$.fs_hosp_deploy_order.hosp_id}"
						},
						"remapColumns": {},
						"disable": "({$.fs_hosp_deploy_order.create_user} == {$userid}) || ({$.fs_hosp_deploy_order.manager_iddj} &&{$.fs_hosp_deploy_order.manager_iddj}.indexOf({$userid}.toString())>-1 ) || ({$.fs_hosp_deploy_order.deploy_engineers} &&{$.fs_hosp_deploy_order.deploy_engineers}.indexOf({$userid}.toString())>-1)||({$.fs_hosp_deploy_order.interface_engineers} && {$.fs_hosp_deploy_order.interface_engineers}.indexOf({$userid}.toString())>-1)? '0':'1'",
						"id": "hz_hosp_business_info",
						"updateTypeColumns": {
							"nurse_person": {
								"updatable": null,
								"type": "string"
							},
							"aio_list": {
								"updatable": null,
								"type": null
							},
							"has_pad": {
								"updatable": null,
								"type": "number"
							},
							"has_wechat": {
								"updatable": null,
								"type": "number"
							},
							"address": {
								"updatable": "1",
								"type": "string"
							},
							"create_time": {
								"updatable": null,
								"type": "string"
							},
							"level": {
								"updatable": "1",
								"type": "number"
							},
							"tmp5": {
								"updatable": "0",
								"type": null
							},
							"tmp6": {
								"updatable": "0",
								"type": null
							},
							"has_interface": {
								"updatable": null,
								"type": "number"
							},
							"service_provider": {
								"updatable": null,
								"type": "string"
							},
							"hosp_id": {
								"updatable": null,
								"type": "number"
							},
							"info_person": {
								"updatable": null,
								"type": "string"
							},
							"create_username": {
								"updatable": "0",
								"type": "string"
							},
							"service_type": {
								"updatable": null,
								"type": "number"
							},
							"pad_num": {
								"updatable": null,
								"type": "number"
							},
							"info_telphone": {
								"updatable": null,
								"type": "string"
							},
							"name": {
								"updatable": "0",
								"type": "string"
							},
							"create_user": {
								"updatable": null,
								"type": "number"
							},
							"id": {
								"updatable": null,
								"type": "number"
							},
							"nurse_telphone": {
								"updatable": null,
								"type": "string"
							}
						}
					}, {
						"colfk": ["deploy_id"],
						"computeColumns": {},
						"visible": "1",
						"updateColumns": ["id", "hosp_id", "deploy_version", "interface_url", "wrist_type", "code_type", "os_type", "wifi_type", "docking_system", "interface_demand", "has_modo_praescripto", "has_blood_sugar", "has_remote_desktop", "docking_way", "contact_person", "contact_telphone", "after_sale_person", "remark"],
						"multipleColumns": {
							"wifi_type": ","
						},
						"title": "技术信息登记表",
						"type": "form",
						"writebackColumns": {},
						"defaultColumns": {
							"hosp_id": "{$.fs_hosp_deploy_order.hosp_id}"
						},
						"remapColumns": {},
						"disable": "({$.fs_hosp_deploy_order.rel_manager_id} == {$userid}) || ({$.fs_hosp_deploy_order.manager_iddj} &&{$.fs_hosp_deploy_order.manager_iddj}.indexOf({$userid}.toString())>-1 ) || ({$.fs_hosp_deploy_order.deploy_engineers} &&{$.fs_hosp_deploy_order.deploy_engineers}.indexOf({$userid}.toString())>-1)||({$.fs_hosp_deploy_order.interface_engineers} && {$.fs_hosp_deploy_order.interface_engineers}.indexOf({$userid}.toString())>-1)? '0':'1'",
						"id": "hz_hosp_it_info",
						"updateTypeColumns": {
							"wifi_type": {
								"updatable": null,
								"type": "number"
							},
							"docking_way": {
								"updatable": null,
								"type": "number"
							},
							"wrist_type": {
								"updatable": null,
								"type": "number"
							},
							"contact_person": {
								"updatable": null,
								"type": "string"
							},
							"has_modo_praescripto": {
								"updatable": null,
								"type": "number"
							},
							"remark": {
								"updatable": null,
								"type": "string"
							},
							"after_sale_person": {
								"updatable": null,
								"type": "string"
							},
							"hosp_id": {
								"updatable": null,
								"type": "number"
							},
							"has_blood_sugar": {
								"updatable": null,
								"type": "number"
							},
							"interface_demand": {
								"updatable": null,
								"type": "number"
							},
							"interface_url": {
								"updatable": null,
								"type": "string"
							},
							"has_remote_desktop": {
								"updatable": null,
								"type": "number"
							},
							"tmp7": {
								"updatable": "0",
								"type": null
							},
							"docking_system": {
								"updatable": null,
								"type": "number"
							},
							"tmp8": {
								"updatable": "0",
								"type": null
							},
							"os_type": {
								"updatable": null,
								"type": "number"
							},
							"contact_telphone": {
								"updatable": null,
								"type": "string"
							},
							"id": {
								"updatable": null,
								"type": "number"
							},
							"deploy_version": {
								"updatable": null,
								"type": "number"
							},
							"code_type": {
								"updatable": null,
								"type": "number"
							}
						}
					}, {
						"colfk": ["order_id"],
						"computeColumns": {},
						"visible": "{$.fs_hosp_deploy_order.status} >=10 && {$.fs_hosp_deploy_order.type} >0 && {$.fs_hosp_deploy_order.type} <= 6 ? '1':'0'",
						"updateColumns": ["id", "title1", "order_id", "sup_name", "sys_type", "interface_type1", "db_info1", "db_ddl_filelist1", "interface_info1", "interface_doclist1", "interface_type2", "writeback_method", "db_info2", "db_ddl_filelist2", "interface_info2", "interface_doclist2", "interface_dept_info", "title2", "server_type", "server_info", "os_info", "server_ip", "server_user", "server_pwd", "db_config", "title3", "cloud_id", "private_id", "back_version", "front_version", "app_version", "other_info", "personalized_develop_filelist", "server_config", "title4", "browser_version", "dept_wifi_info", "dept_other_info", "title5", "hosp_remote_info", "hosp_other_info"],
						"multipleColumns": {},
						"title": "部署信息",
						"type": "form",
						"writebackColumns": {},
						"defaultColumns": {},
						"remapColumns": {},
						"disable": "({$.fs_hosp_deploy_order.final_interface_engineers} && {$.fs_hosp_deploy_order.final_interface_engineers}.indexOf({$userid}.toString())>-1) ||({$.fs_hosp_deploy_order.final_excute_engineers} && {$.fs_hosp_deploy_order.final_excute_engineers}.indexOf({$userid}.toString())>-1) ? '0':'1'",
						"id": "fs_hosp_deploy_info",
						"updateTypeColumns": {
							"app_version": {
								"updatable": null,
								"type": "string"
							},
							"interface_dept_info": {
								"updatable": null,
								"type": "string"
							},
							"sys_type": {
								"updatable": null,
								"type": "number"
							},
							"front_version": {
								"updatable": null,
								"type": "string"
							},
							"server_user": {
								"updatable": null,
								"type": "string"
							},
							"db_ddl_filelist2": {
								"updatable": null,
								"type": "string"
							},
							"interface_doclist1": {
								"updatable": null,
								"type": "string"
							},
							"interface_doclist2": {
								"updatable": null,
								"type": "string"
							},
							"os_info": {
								"updatable": null,
								"type": "string"
							},
							"db_ddl_filelist1": {
								"updatable": null,
								"type": "string"
							},
							"server_ip": {
								"updatable": null,
								"type": "string"
							},
							"interface_type2": {
								"updatable": null,
								"type": "string"
							},
							"hosp_remote_info": {
								"updatable": null,
								"type": "string"
							},
							"browser_version": {
								"updatable": null,
								"type": "string"
							},
							"cloud_id": {
								"updatable": null,
								"type": "number"
							},
							"interface_type1": {
								"updatable": null,
								"type": "number"
							},
							"id": {
								"updatable": null,
								"type": "number"
							},
							"writeback_method": {
								"updatable": null,
								"type": "number"
							},
							"other_info": {
								"updatable": null,
								"type": "string"
							},
							"hosp_other_info": {
								"updatable": null,
								"type": "string"
							},
							"server_config": {
								"updatable": null,
								"type": "string"
							},
							"title1": {
								"updatable": null,
								"type": "string"
							},
							"title2": {
								"updatable": null,
								"type": "string"
							},
							"personalized_develop_filelist": {
								"updatable": null,
								"type": "string"
							},
							"title3": {
								"updatable": null,
								"type": "string"
							},
							"title4": {
								"updatable": null,
								"type": "string"
							},
							"db_info2": {
								"updatable": null,
								"type": "string"
							},
							"title5": {
								"updatable": null,
								"type": "string"
							},
							"db_info1": {
								"updatable": null,
								"type": "string"
							},
							"back_version": {
								"updatable": null,
								"type": "string"
							},
							"server_pwd": {
								"updatable": null,
								"type": "string"
							},
							"server_info": {
								"updatable": null,
								"type": "string"
							},
							"dept_wifi_info": {
								"updatable": null,
								"type": "string"
							},
							"sup_name": {
								"updatable": null,
								"type": "string"
							},
							"dept_other_info": {
								"updatable": null,
								"type": "string"
							},
							"interface_info2": {
								"updatable": "1",
								"type": "string"
							},
							"interface_info1": {
								"updatable": "1",
								"type": "string"
							},
							"private_id": {
								"updatable": null,
								"type": "number"
							},
							"db_config": {
								"updatable": null,
								"type": "string"
							},
							"order_id": {
								"updatable": null,
								"type": "number"
							},
							"server_type": {
								"updatable": null,
								"type": "number"
							}
						}
					}, {
						"colfk": ["deploy_id"],
						"computeColumns": {},
						"visible": "{$.fs_hosp_deploy_order.type} >0 && {$.fs_hosp_deploy_order.type} <4   ? '1':'0'",
						"updateColumns": ["id", "deploy_id", "deploy_type", "delete_flag", "matters", "finish_person", "finish_time", "remark", "has_finish"],
						"multipleColumns": {},
						"title": "对接新部署事项",
						"type": "fuseTable",
						"writebackColumns": {},
						"defaultColumns": {
							"deploy_type": 1
						},
						"remapColumns": {},
						"disable": "{$.fs_hosp_deploy_order.status} >=55 &&{$.fs_hosp_deploy_order.final_interface_engineers} && {$.fs_hosp_deploy_order.final_interface_engineers}.indexOf({$userid}.toString())>-1 ? '0':'1'",
						"id": "hosp_deploy_check_list1",
						"table": "hosp_deploy_check_list",
						"updateTypeColumns": {
							"finish_person": {
								"updatable": null,
								"type": "string"
							},
							"matters": {
								"updatable": null,
								"type": "string"
							},
							"remark": {
								"updatable": null,
								"type": "string"
							},
							"id": {
								"updatable": null,
								"type": "number"
							},
							"has_finish": {
								"updatable": null,
								"type": "number"
							},
							"delete_flag": {
								"updatable": null,
								"type": "number"
							},
							"deploy_type": {
								"updatable": null,
								"type": "number"
							},
							"finish_time": {
								"updatable": null,
								"type": "string"
							},
							"deploy_id": {
								"updatable": null,
								"type": "number"
							}
						}
					}, {
						"colfk": ["deploy_id"],
						"computeColumns": {},
						"visible": "{$.fs_hosp_deploy_order.type} == 5 ? '1':'0'",
						"updateColumns": ["id", "deploy_id", "deploy_type", "delete_flag", "matters", "work_hour", "finish_person", "finish_time", "has_finish"],
						"multipleColumns": {},
						"title": "对接升级部署事项",
						"type": "fuseTable",
						"writebackColumns": {},
						"defaultColumns": {
							"deploy_type": 2
						},
						"remapColumns": {},
						"disable": "{$.fs_hosp_deploy_order.status} >=55 &&{$.fs_hosp_deploy_order.final_interface_engineers}&& {$.fs_hosp_deploy_order.final_interface_engineers}.indexOf({$userid}.toString())>-1 ? '0':'1'",
						"id": "hosp_deploy_check_list2",
						"table": "hosp_deploy_check_list",
						"updateTypeColumns": {
							"finish_person": {
								"updatable": null,
								"type": "string"
							},
							"matters": {
								"updatable": null,
								"type": "string"
							},
							"work_hour": {
								"updatable": null,
								"type": "string"
							},
							"id": {
								"updatable": null,
								"type": "number"
							},
							"has_finish": {
								"updatable": null,
								"type": "number"
							},
							"delete_flag": {
								"updatable": null,
								"type": "number"
							},
							"deploy_type": {
								"updatable": null,
								"type": "number"
							},
							"finish_time": {
								"updatable": null,
								"type": "string"
							},
							"deploy_id": {
								"updatable": null,
								"type": "number"
							}
						}
					}, {
						"colfk": ["deploy_id"],
						"computeColumns": {},
						"visible": "{$.fs_hosp_deploy_order.type} >0 && {$.fs_hosp_deploy_order.type} <4 ? '1':'0'",
						"updateColumns": ["id", "deploy_id", "deploy_type", "delete_flag", "phase", "matters", "project", "work_hour", "remark", "finish_person", "finish_time", "has_finish"],
						"multipleColumns": {},
						"title": "实施新部署事项",
						"type": "fuseTable",
						"writebackColumns": {},
						"defaultColumns": {
							"deploy_type": 3
						},
						"remapColumns": {},
						"disable": "{$.fs_hosp_deploy_order.status} >=55 &&{$.fs_hosp_deploy_order.final_excute_engineers} && {$.fs_hosp_deploy_order.final_excute_engineers}.indexOf({$userid}.toString())>-1 ? '0':'1'",
						"id": "hosp_deploy_check_list3",
						"table": "hosp_deploy_check_list",
						"updateTypeColumns": {
							"finish_person": {
								"updatable": null,
								"type": "string"
							},
							"phase": {
								"updatable": null,
								"type": "string"
							},
							"matters": {
								"updatable": null,
								"type": "string"
							},
							"work_hour": {
								"updatable": null,
								"type": "string"
							},
							"project": {
								"updatable": null,
								"type": "string"
							},
							"remark": {
								"updatable": null,
								"type": "string"
							},
							"id": {
								"updatable": null,
								"type": "number"
							},
							"has_finish": {
								"updatable": null,
								"type": "number"
							},
							"delete_flag": {
								"updatable": null,
								"type": "number"
							},
							"deploy_type": {
								"updatable": null,
								"type": "number"
							},
							"finish_time": {
								"updatable": null,
								"type": "string"
							},
							"deploy_id": {
								"updatable": null,
								"type": "number"
							}
						}
					}, {
						"colfk": ["deploy_id"],
						"computeColumns": {},
						"visible": "{$.fs_hosp_deploy_order.type} == 5 ? '1':'0'",
						"updateColumns": ["id", "deploy_id", "deploy_type", "delete_flag", "phase", "matters", "project", "work_hour", "remark", "finish_time", "finish_person", "has_finish"],
						"multipleColumns": {},
						"title": "实施升级部署事项",
						"type": "fuseTable",
						"writebackColumns": {},
						"defaultColumns": {
							"deploy_type": 4
						},
						"remapColumns": {},
						"disable": "{$.fs_hosp_deploy_order.status} >=55 &&{$.fs_hosp_deploy_order.final_excute_engineers} && {$.fs_hosp_deploy_order.final_excute_engineers}.indexOf({$userid}.toString())>-1 ? '0':'1'",
						"id": "hosp_deploy_check_list4",
						"table": "hosp_deploy_check_list",
						"updateTypeColumns": {
							"finish_person": {
								"updatable": null,
								"type": "string"
							},
							"phase": {
								"updatable": null,
								"type": "string"
							},
							"matters": {
								"updatable": null,
								"type": "string"
							},
							"work_hour": {
								"updatable": null,
								"type": "string"
							},
							"project": {
								"updatable": null,
								"type": "string"
							},
							"remark": {
								"updatable": null,
								"type": "string"
							},
							"id": {
								"updatable": null,
								"type": "number"
							},
							"has_finish": {
								"updatable": null,
								"type": "number"
							},
							"delete_flag": {
								"updatable": null,
								"type": "number"
							},
							"deploy_type": {
								"updatable": null,
								"type": "number"
							},
							"finish_time": {
								"updatable": null,
								"type": "string"
							},
							"deploy_id": {
								"updatable": null,
								"type": "number"
							}
						}
					}],
					"items": [
						[{
							"id": "id",
							"label": "id"
						}, {
							"id": "route_type",
							"label": "结节类型"
						}, {
							"id": "action_name",
							"label": "节点名称"
						}, {
							"id": "assign_type",
							"label": "授权类型"
						}, {
							"id": "route_assign",
							"label": "授权人"
						}, {
							"id": "next_route1",
							"label": "路由1"
						}, {
							"id": "next_route2",
							"label": "路由2"
						}, {
							"id": "next_route3",
							"label": "路由3"
						}, {
							"id": "next_route4",
							"label": "路由4"
						}, {
							"id": "next_route5",
							"label": "路由5"
						}],
						[{
							"id": "id",
							"label": "id"
						}, {
							"id": "route_name",
							"label": "节点名称"
						}, {
							"id": "user_name",
							"label": "处理人"
						}, {
							"id": "modify_time",
							"label": "处理时间"
						}, {
							"id": "process_flag",
							"label": "处理结果"
						}, {
							"id": "process_note",
							"label": "处理意见"
						}],
						[{
							"id": "id",
							"label": "id"
						}, {
							"id": "create_user",
							"label": "备注人"
						}, {
							"id": "remark",
							"label": "备注内容"
						}, {
							"id": "create_time",
							"label": "备注时间"
						}],
						[{
							"size": "large",
							"updatable": "0",
							"id": "tmp5",
							"label": "基本信息",
							"uitype": "title"
						}, {
							"visible": "0",
							"id": "id",
							"label": "id",
							"type": "number"
						}, {
							"default": "{$.fs_hosp_deploy_order.hosp_id}",
							"visible": "0",
							"detailDefault": "1",
							"id": "hosp_id",
							"label": "hosp_id",
							"type": "number"
						}, {
							"default": "{$.fs_hosp_deploy_order.hosp_name}",
							"disable": "1",
							"detailDefault": "1",
							"updatable": "0",
							"id": "name",
							"label": "医院名称",
							"type": "string"
						}, {
							"lookup": "/sys/lookup/codes/hosp_level",
							"updatable": "1",
							"id": "level",
							"label": "医院等级",
							"uitype": "select",
							"type": "number",
							"required": "0"
						}, {
							"disable": "0",
							"updatable": "1",
							"id": "address",
							"label": "医院地址",
							"type": "string"
						}, {
							"default": "$userid",
							"visible": "0",
							"id": "create_user",
							"label": "填报人",
							"type": "number"
						}, {
							"default": "$username",
							"disable": "1",
							"updatable": "0",
							"id": "create_username",
							"label": "填报人",
							"type": "string"
						}, {
							"default": "$now",
							"disable": "1",
							"id": "create_time",
							"label": "填报日期",
							"type": "string"
						}, {
							"id": "nurse_person",
							"label": "护理科联系人",
							"type": "string"
						}, {
							"id": "nurse_telphone",
							"label": "联系人电话",
							"type": "string"
						}, {
							"id": "info_person",
							"label": "信息科联系人",
							"type": "string"
						}, {
							"id": "info_telphone",
							"label": "联系人电话",
							"type": "string"
						}, {
							"lookup": "/sys/lookup/codes/yesno",
							"id": "has_wechat",
							"label": "微信群",
							"uitype": "select",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/has_interface",
							"id": "has_interface",
							"label": "对接方式",
							"uitype": "select",
							"type": "number"
						}, {
							"size": "large",
							"updatable": "0",
							"id": "tmp6",
							"label": "业务需求",
							"uitype": "title"
						}, {
							"id": "service_provider",
							"label": "服务器提供方",
							"type": "string"
						}, {
							"lookup": "/sys/lookup/codes/fs_server_type",
							"id": "service_type",
							"label": "服务器类型",
							"uitype": "select",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/yesno",
							"id": "has_pad",
							"label": "是否需要查房PAD",
							"uitype": "select",
							"type": "number"
						}, {
							"visible": "{has_pad} != 1 ? '0':'1'",
							"id": "pad_num",
							"label": "PAD数量",
							"type": "number"
						}, {
							"size": "large",
							"limit": 5,
							"id": "aio_list",
							"label": "部署科室:",
							"uitype": "inner_table",
							"uicontent": "[\n                              {\"id\":\"aio_depart\",\"label\":\"部署科室\",\"type\":\"string\"},\n                              {\"id\":\"aio_contact_person\", \"type\":\"string\",\"label\":\"科室联系人\"},\n                              {\"id\":\"aio_contact_telphone\", \"type\":\"string\",\"label\":\"联系电话\"},\n                              {\"id\":\"aio_demand_num\", \"type\":\"string\",\"label\":\"需求数量\"},\n                              {\"id\":\"device_type\",\"label\":\"设备类型\",\"savelabel\":\"label\", \"uitype\":\"select\",\"lookup\":\"/sys/lookup/codes/fs_aio_type\"}]"
						}],
						[{
							"size": "large",
							"updatable": "0",
							"id": "tmp7",
							"label": "基本信息",
							"uitype": "title"
						}, {
							"visible": "0",
							"id": "id",
							"label": "id",
							"type": "number"
						}, {
							"default": "{$.fs_hosp_deploy_order.hosp_id}",
							"visible": "0",
							"detailDefault": "1",
							"id": "hosp_id",
							"label": "hosp_id",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/deploy_version",
							"size": "large",
							"id": "deploy_version",
							"label": "部署版本",
							"uitype": "radio",
							"type": "number"
						}, {
							"id": "interface_url",
							"uitype": "upload",
							"label": "对接接口文档下载",
							"type": "string"
						}, {
							"lookup": "/sys/lookup/codes/wrist_type",
							"id": "wrist_type",
							"label": "患者腕带类型",
							"uitype": "select",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/code_type",
							"id": "code_type",
							"label": "条码类型",
							"uitype": "select",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/os_type",
							"id": "os_type",
							"label": "服务器操作系统",
							"uitype": "select",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/provider_wifi_type",
							"size": "large",
							"multiple": "1",
							"id": "wifi_type",
							"label": "提供的无线网络环境",
							"uitype": "checkbox",
							"type": "number"
						}, {
							"size": "large",
							"updatable": "0",
							"id": "tmp8",
							"label": "技术需求",
							"uitype": "title"
						}, {
							"lookup": "/sys/lookup/codes/docking_system",
							"size": "large",
							"id": "docking_system",
							"label": "对接系统",
							"uitype": "radio",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/yesno",
							"id": "interface_demand",
							"label": "是否按照标准接口对接",
							"uitype": "select",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/yesno",
							"id": "has_modo_praescripto",
							"label": "是否对接医嘱",
							"uitype": "select",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/yesno",
							"id": "has_blood_sugar",
							"label": "是否回传血糖检测值",
							"uitype": "select",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/remote_desktop",
							"id": "has_remote_desktop",
							"label": "维护远程桌面的方式",
							"uitype": "select",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/docking_way",
							"id": "docking_way",
							"label": "对接方式",
							"uitype": "select",
							"type": "number"
						}, {
							"id": "contact_person",
							"label": "厂家联系人",
							"type": "string"
						}, {
							"id": "contact_telphone",
							"label": "联系方式",
							"type": "string"
						}, {
							"id": "after_sale_person",
							"label": "售后联系人",
							"type": "string"
						}, {
							"size": "large",
							"id": "remark",
							"label": "备注",
							"type": "string"
						}],
						[{
							"visible": "0",
							"id": "id",
							"label": "id",
							"type": "number"
						}, {
							"size": "large",
							"id": "title1",
							"label": "HIS信息",
							"uitype": "title",
							"type": "string"
						}, {
							"visible": "0",
							"id": "order_id",
							"label": "部署工单id",
							"type": "number"
						}, {
							"id": "sup_name",
							"label": "对接系统厂家",
							"type": "string"
						}, {
							"lookup": "/sys/lookup/codes/system_type",
							"id": "sys_type",
							"label": "系统类型",
							"uitype": "select",
							"type": "number"
						}, {
							"lookup": "/sys/lookup/codes/interface_type1",
							"id": "interface_type1",
							"label": "对接方式",
							"uitype": "select",
							"type": "number"
						}, {
							"visible": "{interface_type1} == 3 ? '1':'0' ",
							"id": "db_info1",
							"label": "数据库信息",
							"uitype": "textarea",
							"placeholder": "数据库类型：orcal/mysql/sybase/sqlserver/db2/其他\n数据库连接IP及端口：\n用户名密码：",
							"type": "string",
							"rows": 3
						}, {
							"visible": "{interface_type1} == 3 ? '1':'0' ",
							"id": "db_ddl_filelist1",
							"label": "数据库视图DDL",
							"uitype": "upload",
							"type": "string"
						}, {
							"visible": "{interface_type1} == 3 || {interface_type1} ==null ? '0':'1' ",
							"updatable": "1",
							"id": "interface_info1",
							"label": "接口信息",
							"uitype": "textarea",
							"placeholder": "接口地址：http://xxxx/xxx\n接口身份秘钥：",
							"type": "string",
							"rows": 5
						}, {
							"visible": "{interface_type1} == 3 || {interface_type1} ==null ? '0':'1' ",
							"id": "interface_doclist1",
							"label": "接口文档",
							"uitype": "upload",
							"type": "string"
						}, {
							"id": "interface_type2",
							"label": "对接内容",
							"placeholder": "科室/医护/病人/医嘱",
							"type": "string"
						}, {
							"lookup": "/sys/lookup/codes/writeback_method",
							"id": "writeback_method",
							"label": "血糖回写方式",
							"uitype": "select",
							"type": "number"
						}, {
							"visible": "{writeback_method} == 1 ? '1':'0' ",
							"id": "db_info2",
							"label": "数据库信息",
							"uitype": "textarea",
							"placeholder": "数据库类型：orcal/mysql/sybase/sqlserver/db2/其他\n数据库连接IP及端口：\n用户名密码：",
							"type": "string",
							"rows": 3
						}, {
							"visible": "{writeback_method} == 1 ? '1':'0' ",
							"id": "db_ddl_filelist2",
							"label": "存储过程",
							"uitype": "upload",
							"type": "string"
						}, {
							"visible": "{writeback_method} == 1 || {writeback_method} ==null ? '0':'1' ",
							"updatable": "1",
							"id": "interface_info2",
							"label": "接口信息",
							"uitype": "textarea",
							"placeholder": "接口地址：http://xxxx/xxx\n接口身份秘钥：",
							"type": "string",
							"rows": 5
						}, {
							"visible": "{writeback_method} == 1 || {writeback_method} ==null ? '0':'1' ",
							"id": "interface_doclist2",
							"label": "接口文档",
							"uitype": "upload",
							"type": "string"
						}, {
							"id": "interface_dept_info",
							"label": "对接科室信息",
							"uitype": "textarea",
							"rows": 3,
							"type": "string"
						}, {
							"size": "large",
							"id": "title2",
							"label": "服务器信息",
							"uitype": "title",
							"type": "string"
						}, {
							"lookup": "/sys/lookup/codes/server_type",
							"id": "server_type",
							"label": "服务器类型",
							"uitype": "select",
							"type": "number"
						}, {
							"id": "server_info",
							"label": "服务器信息",
							"uitype": "textarea",
							"type": "string"
						}, {
							"id": "os_info",
							"label": "操作系统",
							"uitype": "textarea",
							"type": "string"
						}, {
							"id": "server_ip",
							"label": "服务器IP",
							"uitype": "textarea",
							"type": "string"
						}, {
							"id": "server_user",
							"label": "服务器用户名",
							"type": "string"
						}, {
							"id": "server_pwd",
							"label": "服务器密码",
							"type": "string"
						}, {
							"id": "db_config",
							"label": "数据库信息",
							"uitype": "textarea",
							"type": "string"
						}, {
							"size": "large",
							"id": "title3",
							"label": "软件信息",
							"uitype": "title",
							"type": "string"
						}, {
							"disabledpoint": "1",
							"visible": "1",
							"id": "cloud_id",
							"label": "云端ID",
							"type": "number"
						}, {
							"disabledpoint": "1",
							"regex": "/^-[1-9]\\d*$/",
							"visible": "1",
							"id": "private_id",
							"label": "私有化ID",
							"type": "number"
						}, {
							"id": "back_version",
							"label": "后端版本",
							"type": "string"
						}, {
							"id": "front_version",
							"label": "前端版本",
							"type": "string"
						}, {
							"id": "app_version",
							"label": "APP版本",
							"type": "string"
						}, {
							"id": "other_info",
							"label": "其他",
							"uitype": "textarea",
							"type": "string"
						}, {
							"id": "personalized_develop_filelist",
							"label": "个性化开发",
							"uitype": "textarea",
							"type": "string"
						}, {
							"id": "server_config",
							"label": "服务配置",
							"uitype": "upload",
							"type": "string"
						}, {
							"size": "large",
							"id": "title4",
							"label": "医院科室信息",
							"uitype": "title",
							"type": "string"
						}, {
							"id": "browser_version",
							"label": "浏览器版本",
							"type": "string"
						}, {
							"id": "dept_wifi_info",
							"label": "科室WIFI",
							"uitype": "text",
							"type": "string"
						}, {
							"id": "dept_other_info",
							"label": "科室其他信息",
							"uitype": "textarea",
							"type": "string"
						}, {
							"size": "large",
							"id": "title5",
							"label": "医院远程信息",
							"uitype": "title",
							"type": "string"
						}, {
							"id": "hosp_remote_info",
							"label": "医院远程信息",
							"uitype": "textarea",
							"type": "string"
						}, {
							"id": "hosp_other_info",
							"label": "其他",
							"uitype": "textarea",
							"type": "string"
						}],
						[{
							"visible": "0",
							"id": "id",
							"label": "id",
							"type": "number"
						}, {
							"visible": "0",
							"id": "deploy_id",
							"label": "deploy_id",
							"type": "number"
						}, {
							"default": 1,
							"visible": "0",
							"detailDefault": "1",
							"id": "deploy_type",
							"label": "deploy_type",
							"type": "number"
						}, {
							"visible": "0",
							"id": "delete_flag",
							"label": "delete_flag",
							"type": "number"
						}, {
							"id": "matters",
							"label": "事项",
							"uitype": "label",
							"type": "string"
						}, {
							"disable": "1",
							"id": "finish_person",
							"label": "完成人",
							"uitype": "label",
							"type": "string"
						}, {
							"disable": "1",
							"id": "finish_time",
							"label": "确认时间",
							"uitype": "label",
							"type": "string"
						}, {
							"id": "remark",
							"label": "备注",
							"uitype": "text",
							"type": "string"
						}, {
							"disable": "{finish_time}!=null ?'1':'0'",
							"id": "has_finish",
							"label": "确认完成",
							"uitype": "checkbox",
							"type": "number"
						}],
						[{
							"visible": "0",
							"id": "id",
							"label": "id",
							"type": "number"
						}, {
							"visible": "0",
							"id": "deploy_id",
							"label": "deploy_id",
							"type": "number"
						}, {
							"default": 2,
							"visible": "0",
							"detailDefault": "1",
							"id": "deploy_type",
							"label": "deploy_type",
							"type": "number"
						}, {
							"visible": "0",
							"id": "delete_flag",
							"label": "delete_flag",
							"type": "number"
						}, {
							"id": "matters",
							"label": "事项",
							"uitype": "label",
							"type": "string"
						}, {
							"id": "work_hour",
							"label": "工时",
							"uitype": "text",
							"type": "string"
						}, {
							"disable": "1",
							"id": "finish_person",
							"label": "完成人",
							"uitype": "label",
							"type": "string"
						}, {
							"disable": "1",
							"id": "finish_time",
							"label": "确认时间",
							"uitype": "label",
							"type": "string"
						}, {
							"disable": "{finish_time}!=null ?'1':'0'",
							"id": "has_finish",
							"label": "确认完成",
							"uitype": "checkbox",
							"type": "number"
						}],
						[{
							"visible": "0",
							"id": "id",
							"label": "id",
							"type": "number"
						}, {
							"visible": "0",
							"id": "deploy_id",
							"label": "deploy_id",
							"type": "number"
						}, {
							"default": 3,
							"visible": "0",
							"detailDefault": "1",
							"id": "deploy_type",
							"label": "deploy_type",
							"type": "number"
						}, {
							"visible": "0",
							"id": "delete_flag",
							"label": "delete_flag",
							"type": "number"
						}, {
							"id": "phase",
							"label": "阶段",
							"uitype": "label",
							"type": "string"
						}, {
							"id": "matters",
							"label": "阶段",
							"uitype": "label",
							"type": "string"
						}, {
							"id": "project",
							"label": "项目",
							"uitype": "label",
							"type": "string"
						}, {
							"id": "work_hour",
							"label": "标准工时",
							"uitype": "text",
							"type": "string"
						}, {
							"id": "remark",
							"label": "备注",
							"uitype": "text",
							"type": "string"
						}, {
							"disable": "1",
							"id": "finish_person",
							"label": "完成人",
							"uitype": "label",
							"type": "string"
						}, {
							"disable": "1",
							"id": "finish_time",
							"label": "确认时间",
							"uitype": "label",
							"type": "string"
						}, {
							"disable": "{finish_time}!=null ?'1':'0'",
							"id": "has_finish",
							"label": "确认完成",
							"uitype": "checkbox",
							"type": "number"
						}],
						[{
							"visible": "0",
							"id": "id",
							"label": "id",
							"type": "number"
						}, {
							"visible": "0",
							"id": "deploy_id",
							"label": "deploy_id",
							"type": "number"
						}, {
							"default": 4,
							"visible": "0",
							"detailDefault": "1",
							"id": "deploy_type",
							"label": "deploy_type",
							"type": "number"
						}, {
							"visible": "0",
							"id": "delete_flag",
							"label": "delete_flag",
							"type": "number"
						}, {
							"id": "phase",
							"label": "阶段",
							"uitype": "label",
							"type": "string"
						}, {
							"id": "matters",
							"label": "阶段",
							"uitype": "label",
							"type": "string"
						}, {
							"id": "project",
							"label": "项目",
							"uitype": "label",
							"type": "string"
						}, {
							"id": "work_hour",
							"label": "标准工时",
							"uitype": "text",
							"type": "string"
						}, {
							"id": "remark",
							"label": "备注",
							"uitype": "text",
							"type": "string"
						}, {
							"disable": "1",
							"id": "finish_time",
							"label": "确认时间",
							"uitype": "label",
							"type": "string"
						}, {
							"disable": "1",
							"id": "finish_person",
							"label": "完成人",
							"uitype": "label",
							"type": "string"
						}, {
							"disable": "{finish_time}!=null ?'1':'0'",
							"id": "has_finish",
							"label": "确认完成",
							"uitype": "checkbox",
							"type": "number"
						}]
					]
				},
				"hard_delete": 0,
				"model_id": 9,
				"data_source": null,
				"import_template": null
			},
			"table_bind": "fs_hosp_deploy_order",
			"busi_type": 5,
			"name": "医院部署工单详情",
			"id": 46,
			"model_id": 9,
			"write_permission": null,
			"ref_winid": null,
			"data_source": null,
			"hard_delete": 0
		}
	}
}