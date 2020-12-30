let res1 = {
    "sys_window": {
        "data": {
            "main": {
                "items": [
                    [
                        {
                            "label": "需求Id",
                            "uitype": "input",
                            "type": "number",
                            "id": "id",
                            "disable": "1"
                        },
                        {
                            "label": "提交人",
                            "uitype": "input",
                            "type": "string",
                            "default": "$username",
                            "disable": "1",
                            "id": "submit_user"
                        },
                        {
                            "label": "提交人Id",
                            "uitype": "input",
                            "id": "submit_userId",
                            "type": "string",
                            "visible": "0",
                            "default": "$userid"
                        },
                        {
                            "label": "优先级",
                            "uitype": "select",
                            "id": "priority",
                            "type": "string",
                            "lookup": "/sys/lookup/codes/priority_level"
                        },
                        {
                            "label": "提交时间",
                            "uitype": "datepicker",
                            "id": "submit_time",
                            "type": "date",
                            "disable": "1"
                        },
                        {
                            "label": "需求名称",
                            "uitype": "input",
                            "id": "demand_name",
                            "type": "string"
                        },
                        {
                            "label": "任务完成人",
                            "uitype": "input",
                            "regex": "task_complete_person",
                            "id": "task_complete_person",
                            "visible": "0",
                            "type": "number"
                        },
                        {
                            "label": "任务完成人",
                            "uitype": "input",
                            "id": "task_complete_person_name",
                            "type": "string",
                            "updatable": "0",
                            "lookupwindow": "152"
                        },
                        {
                            "label": "需求描述",
                            "uitype": "textarea",
                            "id": "demand_descript",
                            "required": "1",
                            "size": "large",
                            "rows": "6",
                            "type": "string"
                        },
                        {
                            "label": "附件",
                            "uitype": "upload",
                            "id": "photo_url",
                            "type": "string"
                        }
                    ]
                ],
                "meta": [
                    {
                        "title": "产品需求",
                        "type": "form",
                        "sqlselect": "SELECT\n\ta.*, fn_get_user_desc(a.task_complete_person) task_complete_person_name,fn_get_user_desc(a.submit_userId) user,\n        (select count(1) from story b where b.header_id = a.id)detail_count\nFROM\n\tfeature a\n where  a.id = {0}",
                        "id": "feature",
                        "sqlinit": ""
                    }
                ]
            },
            "meta": {
                "name": "需求详情",
                "uitype": "bill",
                "colpk": [
                    "id"
                ],
                "url": "sys/window/common_detail",
                "busitype": "1"
            },
            "tabs": {
                "meta": [
                    {
                        "title": "需求明细",
                        "id": "story",
                        "table": "",
                        "type": "table",
                        "sqlinit": "select * from story WHERE header_id = {0} AND delete_flag =0"
                    },
                    "{{$bpm_config_2item_items}}"
                ],
                "items": [
                    [
                        {
                            "label": "id",
                            "uitype": "input",
                            "id": "id",
                            "type": "string",
                            "visible": "0"
                        },
                        {
                            "label": "header_id",
                            "uitype": "input",
                            "id": "header_id",
                            "type": "number",
                            "visible": "0"
                        },
                        {
                            "label": "需求明细",
                            "uitype": "label",
                            "id": "story_name",
                            "visible": "",
                            "type": "string"
                        }
                    ],
                    "{{$bpm_config_2item_items}}"
                ]
            }
        },
        "code": "crm_feature_detail",
        "name": "培训详情",
        "template": "bill",
        "data_source": "crm",
        "audit_flag": "0",
        "busi_type": "9",
        "model_id": "12",
        "hard_delete": "0"
    },
    "tabs": {
        "sys_button": [
            {
                "name": "刷新",
                "code": "refresh",
                "event": "refresh",
                "position_left": "1",
                "rw_flag": "1"
            },
            {
                "name": "修改",
                "code": " modify",
                "event": "modify",
                "rw_flag": "1",
                "position_left": "1"
            }
        ]
    }
}

export default {
    meta: {
        name: "药店管理详情",
        uitype: "bill",
        busitype: "1",
        colpk: ["id"],
        url: "sys/window/common_detail"
    },
    main: {
        meta: [
            {
                id: "hz_party_sites",
                title: "药店管理详情",
                type: "form",
                unique: "name",
                sqlinit:
                    " SELECT fn_get_area_id(region2) province,region2 area,IF(fn_get_area_id(region2) IS NULL,NULL,fn_toliststr (fn_get_area_id(region2), NULL, NULL )) area_list, 	( crm.fn_get_has_role ( #{userid}, 'crm_drugstore_agent' ) ) trench FROM crm.ft_hz_emp_org_path_mv  WHERE id = #{userid}",
                sqlselect:
                    "SELECT 	a.id, 	a.name, 	a.create_user, 	crm.fn_get_user_desc ( a.create_user ) create_username, 	a.create_time, 	a.enable_status, 	crm.fn_get_lookup_desc (''crm_drugstore_enable_status'', a.enable_status ) enable_status_name, 	a.address, a.location, 	a.delete_flag, 	a.saler_id,crm.fn_get_user_desc ( a.saler_id)saler_name, 	a.saler_telphone, 	a.contact_person, 	a.contact_telphone, 	a.limit_for_free, 	a.coop_haosen, 	hpse.has_deploy, 	hpse.has_dispense,         a.auit_way, 	fn_toliststr ( a.province, a.city, a.district ) area_list, 	fn_get_area_desc ( a.province, a.city, a.district, NULL ) area, 	crm.fn_get_lookup_desc(''crm_drugstore_server_typed'',if (hpse.server_type = 4 and b.org_type = 1 and EXISTS (select 1 from sync_store_coin_detail stcd where stcd.store_id = hpse.id ),2,hpse.server_type)) server_type_name,        crm.fn_get_lookup_desc_list (''crm_drugstore_consulte_way'', hpse.consulte_way ) consulte_way_name,        	hpse.opening_start_time,         hpse.opening_end_time,         a.party_id,           b.name as cust_name,         b.license_no, 	b.contract_url as license_url,        IF( b.contract_url  IS NULL, ''未认证'', ''已认证'' ) authentication_flag,         hpse.coop_status,         fn_get_has_role(#{userid}, 1) admin_flag,fn_get_subordinate(#{userid}) manager_id,         (select if((FIND_IN_SET(a.saler_id,fn_get_subordinate(#{userid}))>0),1,0) leader_flag from dual) leader_flag,         (select if(count(1)>0,1,0) from oe_order_store_lines ooh where ooh.store_id = a.id) ooh_flag,         (select if(count(1)>0,1,0) from crm.hr_org_emp_assignments where emp_id = #{userid} and position_id = 2) operation_flag,          crm.fn_get_user_desc(a.create_user) create_username,a.create_telphone, 	a.store_type,crm.fn_get_lookup_desc(''crm_drugstore_store_type'',a.store_type) store_type_name,a.has_top, 	a.trench,crm.fn_get_lookup_desc(''crm_drugstore_trench'',a.trench)trench_name,crm.fn_get_user_id(''蒋延延'') jyyid,        a.province,a.city,a.district,if(EXISTS(select 1 from oe_order_store_lines oosl  join oe_order_headers ooh on oosl.header_id = ooh.id where oosl.store_id = a.id and ooh.status < 30),0,1)rw_flag, hpse.release_down_days as count_down_day, fn_get_reduce_flag_pro(a.id,null)reduce_flag,(select sc.total_amount as available_coin from sync_store_coin sc where sc.store_id = a.id order by id desc limit 1) available_coin  FROM 	hz_party_sites a    left join hz_parties b on a.party_id = b.id   left join hz_party_sites_exts hpse on a.id = hpse.id WHERE 	a.id= {0} 	AND a.delete_flag = 0",
                sqlscalar:
                    "drugstore@select is_free limit_for_free  from store_contract sc where store_id = #{id} order by id desc limit 1###drugstore@select dispense_status as has_deploy, dispense_status as has_dispense from store s where id = #{id} order by id desc limit 1###drugstore@SELECT u.user_name from user_organization uo join user u on uo.user_id = u.user_id and uo.about_type=10 and uo.about_id = #{party_id}",
                billcheck:
                    "SELECT CASE 	 WHEN 	a.city IS NULL THEN 	''检测到药店没有选择省市''   when EXISTS (SELECT 1 FROM crm_drugstore.hz_party_contact_info b WHERE b.party_id = a.id and b.party_type = 1  GROUP BY b.contact_person HAVING count( 1 ) > 1 ) then ''联系人已存在''  when EXISTS (select 1 from crm_drugstore.hz_party_sites b where a.id != b.id and a.name =b.name) then ''药店已存在'' ELSE ''''  	END error_msg  FROM 	hz_party_sites a  WHERE 	a.id = {0}",
                billtrigger:
                    "update hz_party_sites set count_down_time = if(trench = 1,null,CURRENT_DATE()) where id = {0}; select LAST_INSERT_ID(0); replace INTO hz_parties ( id, name, province, city, district, address, has_top, org_type, trench, license_no, contract_url, enable_status, create_user, create_telphone, saler_id, saler_telphone,location, count_down_time,store_type  ) SELECT  party_id, name, province, city, district, address, has_top, 1, trench, license_no, license_url, enable_status, create_user, create_telphone, saler_id, saler_telphone, location, count_down_time,store_type  FROM   hz_party_sites  t WHERE   id = {0}    AND (party_id is not null and exists (select 1 from hz_parties p where p.id = t.party_id and p.org_type = 1)         or NOT EXISTS ( SELECT 1 FROM hz_parties a WHERE a.NAME = t.NAME)); update hz_party_sites set party_id = NULLIF(last_insert_id(),0) where id = {0} and party_id is null; insert into hz_party_sites_exts (id,last_ower_saler_id,release_down_days) select id,saler_id as last_ower_saler_id,if(trench = 1,null,15) as release_down_time from hz_party_sites p where p.id = {0} and not EXISTS (select 1 from hz_party_sites_exts pe where p.id = pe.id ); insert into hz_parties_exts (id,last_ower_saler_id,release_down_days) select party_id,saler_id as last_ower_saler_id,if(trench = 1,null,15) as release_down_days from hz_party_sites p where p.id = {0} and party_id is not null and not EXISTS (select 1 from hz_parties_exts pe where p.party_id = pe.id ) ; update hz_party_sites a join hz_party_sites_exts b on a.id = b.id set a.count_down_time = if(a.trench = 1,null,CURRENT_DATE()), b.release_down_days = if(a.trench = 1,null,15), b.last_ower_saler_id = a.saler_id where a.saler_id != b.last_ower_saler_id and a.id = {0}; update hz_parties a join hz_party_sites b on a.name = b.name join hz_parties_exts c on a.id = b.id set a.count_down_time = if(a.trench = 1,null,CURRENT_DATE()), c.release_down_days = if(a.trench = 1,null,15), c.last_ower_saler_id = b.saler_id where a.saler_id != c.last_ower_saler_id and b.id = {0};"
            }
        ],
        items: [
            [
                {
                    id: "tmp1",
                    label: "基本信息",
                    uitype: "title",
                    size: "large"
                },
                {
                    id: "id",
                    label: "药店ID",
                    type: "number",
                    updatable: "1",
                    visible: "1",
                    disable: "1"
                },
                {
                    id: "party_id",
                    label: "公司id",
                    type: "string",
                    disable: "0",
                    updatable: "1",
                    visible: "0"
                },
                {
                    id: "name",
                    label: "药店名称",
                    type: "string",
                    disable: "{id} != null && {admin_flag} == 0 && {$userid} !={jyyid} ? '1':'0'",
                    required: "1",
                    size: "medium"
                },
                {
                    id: "admin_flag",
                    label: "admin_flag",
                    type: "number",
                    visible: "0",
                    updatable: "0"
                },
                {
                    id: "ooh_flag",
                    label: "ooh_flag",
                    type: "number",
                    visible: "0",
                    updatable: "0"
                },
                {
                    id: "area",
                    label: "所在区域",
                    type: "string",
                    uitype: "cascader",
                    lookup: "/sys/lookup/baseinfo_sublist/drugstore_region",
                    startwith: "5000",
                    returnback: "area_list",
                    writeback: "province,city,district",
                    separator: " ",
                    cascaderLength: 2,
                    required: "1",
                    updatable: "0",
                    size: "medium"
                },
                {
                    id: "province",
                    label: "province",
                    type: "number",
                    updatable: "1",
                    visible: "0"
                },
                {
                    id: "city",
                    label: "city",
                    type: "number",
                    updatable: "1",
                    visible: "0"
                },
                {
                    id: "district",
                    label: "district",
                    type: "number",
                    updatable: "1",
                    visible: "0"
                },
                {
                    id: "address",
                    label: "详细地址",
                    type: "string",
                    size: "medium",
                    required: "1"
                },
                {
                    id: "location",
                    label: "坐标定位",
                    type: "string",
                    updatable: "1",
                    visible: "0"
                },
                {
                    id: "has_top",
                    label: "是否百强",
                    type: "number",
                    uitype: "select",
                    default: 0,
                    lookup: "/sys/lookup/codes/yesno",
                    updatable: "1"
                },
                {
                    id: "store_type",
                    label: "药店属性",
                    type: "number",
                    uitype: "select",
                    default: 0,
                    required: "1",
                    lookup: "/sys/lookup/codes/crm_drugstore_store_type",
                    updatable: "1"
                },
                {
                    id: "trench",
                    label: "渠道",
                    type: "number",
                    uitype: "select",
                    disable: "1",
                    lookup: "/sys/lookup/codes/crm_drugstore_trench",
                    updatable: "1"
                },
                {
                    id: "current_user",
                    label: "current_user",
                    type: "number",
                    detailDefault: "1",
                    updatable: "0",
                    visible: "0",
                    default: "$userid"
                },
                {
                    id: "create_user",
                    label: "create_user",
                    type: "number",
                    disable: "0",
                    updatable: "1",
                    visible: "0",
                    default: "$userid"
                },
                {
                    id: "create_username",
                    label: "创建人",
                    type: "string",
                    disable: "1",
                    updatable: "0",
                    default: "$username",
                    visible: "1"
                },
                {
                    id: "create_telphone",
                    label: "创建人电话",
                    type: "string",
                    disable: "1",
                    default: "$telphone",
                    regex: "/1\\d{10}/",
                    updatable: "1",
                    required: "0"
                },
                {
                    id: "saler_id",
                    label: "saler_id",
                    type: "number",
                    disable: "0",
                    updatable: "1",
                    default: "$userid",
                    visible: "0"
                },
                {
                    id: "org_filter",
                    label: "org_filter",
                    type: "string",
                    default: "药店服务部",
                    visible: "0",
                    updatable: "0"
                },
                {
                    id: "saler_name",
                    label: "负责销售",
                    type: "string",
                    updatable: "1",
                    lookupwindow: "35",
                    required: "0",
                    disable:
                        "{id} !=null && (({admin_flag} == 0) && ({operation_flag} == 0) && ({leader_flag} == 0)) ? '1':'0'",
                    default: "$username",
                    lookupcolumn: "id,display_name,mobile",
                    param00: '{"main": ["hz_parties#org_filter","main#org_name"]}',
                    returnback: "saler_id,saler_name,saler_telphone"
                },
                {
                    id: "saler_telphone",
                    label: "销售电话",
                    type: "string",
                    disable: "1",
                    default: "$telphone",
                    regex: "/1\\d{10}/",
                    updatable: "1",
                    required: "0"
                },
                {
                    id: "create_time",
                    label: "创建时间",
                    visible: "{id} != null ? '1':'0'",
                    type: "string",
                    disable: "1"
                },
                {
                    id: "user_name",
                    label: "登录名",
                    disable: "1",
                    type: "string",
                    updatable: "0",
                    visible: "{id} != null ? '1':'0'"
                },
                {
                    id: "authentication_flag",
                    label: "资质认证",
                    type: "string",
                    disable: "1",
                    visible: "{id} != null ? '1':'0'",
                    updatable: "0"
                },
                {
                    id: "tmp2",
                    label: "服务信息",
                    uitype: "title",
                    visible: "{id} != null ? '1':'0'",
                    size: "large"
                },
                {
                    id: "has_deploy",
                    label: "是否调配",
                    type: "number",
                    default: 0,
                    disable: "1",
                    uitype: "select",
                    visible: "{id} != null ? '1':'0'",
                    lookup: "/sys/lookup/codes/yesno",
                    updatable: "1"
                },
                {
                    id: "has_dispense",
                    label: "是否发药",
                    type: "number",
                    uitype: "select",
                    default: 0,
                    disable: "1",
                    visible: "{id} != null ? '1':'0'",
                    lookup: "/sys/lookup/codes/yesno",
                    updatable: "1"
                },
                {
                    id: "auit_way",
                    label: "是否药师审核",
                    type: "number",
                    uitype: "select",
                    default: 0,
                    disable: "1",
                    visible00: "{id} != null ? '1':'0'",
                    visible: "0",
                    lookup: "/sys/lookup/codes/yesno",
                    updatable: "1"
                },
                {
                    id: "server_type_name",
                    label: "服务类型",
                    type: "string",
                    visible: "{id} != null ? '1':'0'",
                    disable: "1",
                    updatable: "0"
                },
                {
                    id: "coop_haosen",
                    label: "豪森合作",
                    type: "number",
                    uitype: "select",
                    default: 0,
                    disable: "{admin_flag} == 0 && {$userid} !={jyyid} ? '1':'0'",
                    visible: "{id} != null ? '1':'0'",
                    lookup: "/sys/lookup/codes/yesno",
                    updatable: "1"
                },
                {
                    id: "limit_for_free",
                    label: "是否限免",
                    type: "number",
                    uitype: "select",
                    disable: "1",
                    visible: "{id} != null ? '1':'0'",
                    lookup: "/sys/lookup/codes/yesno",
                    updatable: "1"
                },
                {
                    id: "consulte_way_name",
                    label: "咨询方式",
                    type: "string",
                    updatable: "0",
                    visible: "{id} != null ? '1':'0'",
                    disable: "1"
                },
                {
                    id: "enable_status",
                    label: "启用状态",
                    type: "number",
                    uitype: "select",
                    default: 2,
                    disable: "1",
                    visible: "{id} != null ? '1':'0'",
                    lookup: "/sys/lookup/codes/crm_drugstore_enable_status",
                    required: "0"
                },
                {
                    id: "opening_start_time",
                    label: "服务开始时间",
                    type: "date",
                    uitype: "datepicker",
                    updatable: "1",
                    visible: "{id} != null ? '1':'0'",
                    disable: "1",
                    placeholder: "  "
                },
                {
                    id: "opening_end_time",
                    label: "服务结束时间",
                    type: "date",
                    uitype: "datepicker",
                    updatable: "1",
                    visible: "{id} != null ? '1':'0'",
                    disable: "1",
                    placeholder: "  "
                },
                {
                    id: "available_coin",
                    label: "剩余点数",
                    type: "number",
                    disable: "1",
                    visible: "{id} != null ? '1':'0'",
                    updatable: "0"
                },
                {
                    id: "license_no",
                    label: "营业执照号",
                    disable: "1",
                    type: "string",
                    visible: "{id} != null ? '1':'0'",
                    required: "0"
                },
                {
                    id: "license_url",
                    label: "药房营业执照",
                    disable: "1",
                    type: "string",
                    visible: "{id} != null ? '1':'0'",
                    uitype: "upload",
                    required: "0",
                    updatable: "1"
                }
            ]
        ]
    },
    tabs: {
        meta: [
            {
                id: "hz_party_contact_info",
                title: "商务联系人",
                type: "table",
                sqlselect:
                    "SELECT * FROM hz_party_contact_info a  WHERE a.party_id = {0} and party_type = 1 AND a.delete_flag = 0",
                colfk: ["party_id"],
                visible:
                    "{$.hz_party_sites.leader_flag} || {$.hz_party_sites.saler_id} == {$userid} || {$.hz_party_sites.admin_flag} || {$.hz_party_sites.operation_flag}  ?'1':'0'",
                autodeleteby: "contact_person"
            },
            {
                id: "oe_order_headers",
                title: "签约合同",
                type: "grid",
                readonly: "1",
                visible:
                    "{$.hz_party_sites.leader_flag} || {$.hz_party_sites.saler_id} == {$userid} || {$.hz_party_sites.admin_flag} || {$.hz_party_sites.operation_flag} ?'1':'0'",
                sqlselect:
                    "SELECT 	a.id order_id, 	a.create_time, 	a.create_user, 	a.saler_id, 	crm.fn_get_user_desc ( a.saler_id ) saler_name, 	crm.fn_get_lookup_desc (''crm_drugstore_coop_status'', a.status) status_name, 	a.status, 	a.auit_time signing_time,a.code,a.contract_start_time,a.contract_end_time, 	crm.fn_get_lookup_desc ( ''crm_drugstore_server_typed'', a.server_type ) server_type_name, 	a.server_type FROM 	oe_order_headers a  	JOIN oe_order_store_lines b on a.id = b.header_id WHERE 	b.store_id ={0} 	AND a.delete_flag = 0",
                colfk: ["store_id"]
            },
            {
                id: "fs_visiting_records",
                title: "拜访记录",
                type: "grid",
                sqlselect:
                    "SELECT 	id, 	cust_id, 	cust_name, 	saler_id,create_time, 	crm.fn_get_user_desc ( saler_id ) saler_name, 	visit_way, 	crm.fn_get_lookup_desc (''crm_drugstore_visit_way'', visit_way ) visit_way_name, 	visites_flag, 	crm.fn_get_lookup_desc (''crm_drugstore_validate'', visites_flag ) visites_flag_name 	 FROM 	crm_drugstore.fs_visiting_records  WHERE 	cust_id = {0}  	AND cust_type = 1         and delete_flag = 0",
                colfk: ["store_id"],
                visible:
                    "{$.hz_party_sites.leader_flag} || {$.hz_party_sites.saler_id} == {$userid} || {$.hz_party_sites.admin_flag} || {$.hz_party_sites.operation_flag} ?'1':'0'",
                readonly: "1"
            }
        ],
        items: [
            [
                {
                    id: "id",
                    label: "商务联系信息ID",
                    type: "number",
                    updatable: "1",
                    visible: "0",
                    disable: "1"
                },
                {
                    id: "party_type",
                    label: "类型",
                    type: "number",
                    updatable: "1",
                    visible: "0",
                    default: 1
                },
                {
                    id: "contact_person",
                    label: "联系人",
                    type: "string",
                    updatable: "1"
                },
                {
                    id: "contact_telphone",
                    label: "联系人电话",
                    type: "string",
                    updatable: "1"
                },
                {
                    id: "kp_type",
                    label: "职位",
                    type: "number",
                    visible: "1",
                    uitype: "select",
                    lookup: "/sys/lookup/codes/crm_drugstore_kp_type"
                }
            ],
            [
                {
                    id: "order_id",
                    label: "合同ID",
                    type: "number"
                },
                {
                    id: "signing_time",
                    label: "签约时间",
                    type: "string"
                },
                {
                    id: "saler_id",
                    label: "saler_id",
                    type: "number",
                    visible: "0"
                },
                {
                    id: "saler_name",
                    label: "负责销售",
                    type: "string"
                },
                {
                    id: "status_name",
                    label: "合同状态",
                    type: "string"
                },
                {
                    id: "server_type_name",
                    label: "服务类型",
                    type: "string"
                }
            ],
            [
                {
                    id: "id",
                    label: "拜访ID",
                    type: "number",
                    visible: "0"
                },
                {
                    id: "cust_id",
                    label: "客户id",
                    type: "number",
                    visible: "0"
                },
                {
                    id: "cust_name",
                    label: "客户名称",
                    type: "string"
                },
                {
                    id: "saler_id",
                    label: "saler_id",
                    type: "number",
                    visible: "0"
                },
                {
                    id: "saler_name",
                    label: "负责销售",
                    type: "string"
                },
                {
                    id: "visit_way_name",
                    label: "拜访方式",
                    type: "string"
                },
                {
                    id: "create_time",
                    label: "拜访时间",
                    type: "string"
                },
                {
                    id: "visites_flag_name",
                    label: "拜访状态",
                    type: "string"
                }
            ]
        ]
    }
};
