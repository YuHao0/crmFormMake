<template>
    <div class="form-make">
        <el-row class="main-content">
            <el-col :span="3">
                <div class="content-item components-wrap">
                    <div class="components-title">选择组件</div>
                    <draggable
                        class="components-content"
                        tag="ul"
                        v-bind="{
                            group: { name: 'people', pull: 'clone', put: false },
                            sort: false,
                            ghostClass: 'ghost'
                        }"
                        :list="basicComponents"
                        @end="handleMoveEnd($event, 'source')"
                        @start="handleMoveStart"
                        :move="handleMove"
                    >
                        <li class="components-item" v-for="(item, index) in basicComponents" :key="index">
                            {{ item.name }}
                        </li>
                    </draggable>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="content-item edit-content">
                    <el-tabs v-model="activeType" @tab-click="editTabChange">
                        <el-tab-pane label="基本属性" name="meta">
                            <div class="form-title">窗口基本属性</div>
                            <el-form ref="form" :model="metaForm" label-position="right" label-width="120px">
                                <el-form-item label="窗口名称" prop="name">
                                    <el-input v-model="metaForm.name"></el-input>
                                </el-form-item>
                                <el-form-item label="渲染模板" prop="uitype">
                                    <el-select v-model="metaForm.uitype" placeholder="请选择">
                                        <el-option label="query_list" value="query_list"> </el-option>
                                        <el-option label="bill" value="bill"> </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="服务url" prop="url">
                                    <el-input v-model="metaForm.url"></el-input>
                                </el-form-item>
                                <div v-if="metaForm.uitype == 'bill'">
                                    <el-form-item label="busitype">
                                        <el-select v-model="billForm.meta.busitype" placeholder="请选择">
                                            <el-option label="0" value="0"> </el-option>
                                            <el-option label="1" value="1"> </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="colpk">
                                        <el-input
                                            v-model="billForm.meta.colpk"
                                            placeholder="多个请用英文逗号隔开"
                                        ></el-input>
                                    </el-form-item>
                                </div>
                            </el-form>
                            <div class="form-title">主体区域属性</div>
                            <el-form ref="form" :model="metaMain" label-position="right" label-width="120px">
                                <el-form-item label="对象名" prop="id">
                                    <el-input v-model="metaMain.id"></el-input>
                                </el-form-item>
                                <el-form-item label="标题" prop="title">
                                    <el-input v-model="metaMain.title"></el-input>
                                </el-form-item>
                                <el-form-item label="类型" prop="type">
                                    <el-input v-model="metaMain.type"></el-input>
                                </el-form-item>
                                <div v-if="metaForm.uitype == 'bill'">
                                    <el-form-item label="禁用状态">
                                        <el-select v-model="billForm.metaMain.disable" placeholder="请选择">
                                            <el-option label="0" value="0"> </el-option>
                                            <el-option label="1" value="1"> </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="禁用表达式">
                                        <el-input
                                            v-model="billForm.metaMain.disable2"
                                            placeholder="例：{status} == 50 ? '1':'0'"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="初始化SQL">
                                        <el-input
                                            type="textarea"
                                            autosize
                                            v-model="billForm.metaMain.sqlinit"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="查询SQL">
                                        <el-input
                                            type="textarea"
                                            autosize
                                            v-model="billForm.metaMain.sqlselect"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="触发器SQL">
                                        <el-input
                                            type="textarea"
                                            autosize
                                            v-model="billForm.metaMain.billtrigger"
                                        ></el-input>
                                    </el-form-item>
                                </div>
                            </el-form>
                            <div class="form-title">TAB页基础属性</div>
                            <el-form ref="form" :model="metaTab" label-position="right" label-width="120px">
                                <el-form-item label="id" prop="id">
                                    <el-input v-model="metaTab.id"></el-input>
                                </el-form-item>
                                <el-form-item label="标签" prop="title">
                                    <el-input v-model="metaTab.title"></el-input>
                                </el-form-item>
                                <el-form-item label="类型" prop="type">
                                    <el-select v-model="metaTab.type" placeholder="请选择">
                                        <el-option label="form" value="form"> </el-option>
                                        <el-option label="table" value="table"> </el-option>
                                        <el-option label="grid" value="grid"> </el-option>
                                    </el-select>
                                </el-form-item>
                                <div v-if="metaForm.uitype == 'bill'">
                                    <el-form-item label="查询SQL">
                                        <el-input
                                            type="textarea"
                                            autosize
                                            v-model="billForm.metaTab.sqlselect"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="colfk">
                                        <el-input
                                            v-model="billForm.metaTab.colfk"
                                            placeholder="多个请用英文逗号隔开"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="显示条件">
                                        <el-input
                                            v-model="billForm.metaTab.visible"
                                            placeholder="例：{$.fs_hosp_deploy_order.status} == 50 ? '1':'0'"
                                        ></el-input>
                                    </el-form-item>
                                </div>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="窗口主体区域" name="mainForm">
                            <widget-form
                                ref="widgetFormMain"
                                :list="itemsMain"
                                :select="selectWidget"
                                @onSelect="drugSelect"
                            ></widget-form>
                        </el-tab-pane>
                        <el-tab-pane label="Tabs区域" name="tabsForm">
                            <widget-form
                                ref="widgetFormTabs"
                                :list="itemsTabs"
                                :select="selectWidget"
                                @onSelect="drugSelect"
                            ></widget-form>
                        </el-tab-pane>

                        <el-tab-pane label="JSON区域" name="jsonContent" class="json-content">
                            <div class="control-content">
                                <el-button @click="getJson(true)">获取JSON</el-button>
                            </div>
                            <json-editor ref="jsonEditor" :jsonData="formData"></json-editor>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="content-item attribute-content">
                    <div class="attribute-title">属性配置</div>
                    <el-form ref="form" label-position="right" v-if="selectWidget.comType" label-width="80px">
                        <el-form-item label="属性名">
                            <el-input v-model="selectWidget.form.id"></el-input>
                        </el-form-item>
                        <el-form-item label="属性标签">
                            <el-input v-model="selectWidget.form.label"></el-input>
                        </el-form-item>
                        <el-form-item label="属性类型">
                            <el-select v-model="selectWidget.form.type" placeholder="请选择">
                                <el-option label="number" value="number"> </el-option>
                                <el-option label="string" value="string"> </el-option>
                                <el-option label="date" value="date"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="默认值">
                            <el-input v-model="selectWidget.form.default"></el-input>
                        </el-form-item>
                        <el-form-item label="placeholder">
                            <el-input v-model="selectWidget.form.placeholder"></el-input>
                        </el-form-item>
                        <el-form-item label="字典url">
                            <el-input v-model="selectWidget.form.lookup"></el-input>
                        </el-form-item>
                        <el-form-item label="是否可见">
                            <el-select v-model="selectWidget.form.visible" placeholder="请选择">
                                <el-option label="0" value="0"> </el-option>
                                <el-option label="1" value="1"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="disable">
                            <el-input v-model="selectWidget.form.disable"></el-input>
                        </el-form-item>
                        <el-form-item label="updatable">
                            <el-select v-model="selectWidget.form.updatable" placeholder="请选择">
                                <el-option label="0" value="0"> </el-option>
                                <el-option label="1" value="1"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="disable">
                            <el-input v-model="selectWidget.form.disable"></el-input>
                        </el-form-item>
                        <el-form-item label="required">
                            <el-input v-model="selectWidget.form.required"></el-input>
                        </el-form-item>
                        <el-form-item label="查找窗口">
                            <el-input v-model="selectWidget.form.lookupwindow"></el-input>
                        </el-form-item>
                        <el-form-item label="带回属性">
                            <el-input v-model="selectWidget.form.lookupcolumn"></el-input>
                        </el-form-item>
                        <el-form-item label="returnback">
                            <el-input v-model="selectWidget.form.returnback"></el-input>
                        </el-form-item>
                        <el-form-item label="writeback">
                            <el-input v-model="selectWidget.form.writeback"></el-input>
                        </el-form-item>
                        <el-form-item label="分隔符">
                            <el-input v-model="selectWidget.form.separator"></el-input>
                        </el-form-item>
                        <el-form-item label="尺寸">
                            <el-select v-model="selectWidget.form.size" placeholder="请选择">
                                <el-option label="small" value="small"> </el-option>
                                <el-option label="medium" value="medium"> </el-option>
                                <el-option label="large" value="large"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="limit">
                            <el-input v-model="selectWidget.form.limit"></el-input>
                        </el-form-item>
                        <el-form-item label="chineseid">
                            <el-input v-model="selectWidget.form.chineseid"></el-input>
                        </el-form-item>
                        <el-form-item label="maxlength">
                            <el-input v-model="selectWidget.form.maxlength"></el-input>
                        </el-form-item>
                        <el-form-item label="colname">
                            <el-input v-model="selectWidget.form.colname"></el-input>
                        </el-form-item>
                        <el-form-item label="regex">
                            <el-input v-model="selectWidget.form.regex"></el-input>
                        </el-form-item>
                        <el-form-item label="param">
                            <el-input v-model="selectWidget.form.param"></el-input>
                        </el-form-item>
                        <el-form-item label="multiple">
                            <el-input v-model="selectWidget.form.multiple"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
// import "@/element";
import "@/assets/reset.css";
import JsonEditor from "components/jsonEditor";
import Draggable from "vuedraggable";
import WidgetForm from "components/WidgetForm";
import { basicComponents, basicform } from "components/componentsConfig.js";
export default {
    props: {
        options: {
            type: Object,
            default() {
                return {
                    filterEmpty: false
                };
            }
        }
    },
    name: "crm-form-make",
    components: {
        JsonEditor,
        Draggable,
        WidgetForm
    },
    data() {
        return {
            basicComponents,
            activeType: "meta",
            // querylist模版
            metaForm: {
                name: "",
                uitype: "",
                url: ""
            },
            metaMain: {
                id: "",
                type: "",
                title: ""
            },
            metaTab: {
                id: "",
                title: "",
                type: ""
            },
            selectWidget: {},
            itemsMain: [],
            itemsTabs: [],
            // bill模版补充
            billForm: {
                meta: {
                    busitype: "",
                    colpk: ""
                },
                metaMain: {
                    disable: "",
                    disable2: "",
                    sqlinit: "",
                    sqlselect: "",
                    billtrigger: ""
                },
                metaTab: {
                    sqlselect: "",
                    colfk: "",
                    visible: ""
                }
            },
            formData: {
                main: {
                    meta: [],
                    items: [[]]
                },
                tabs: {
                    meta: [],
                    items: [[]]
                }
            },
            formJSON: ""
        };
    },
    methods: {
        // 切换主区域tab
        editTabChange(tab) {
            if (tab.name == "jsonContent") {
                this.makeJson();
                this.$nextTick(() => {
                    this.$refs.jsonEditor.api("refresh");
                    this.$refs.jsonEditor.api("focus");
                });
                return;
            }
            this.selectWidget = {};
            // 如果不是切换到jsoncontnet
            let value = this.$refs.jsonEditor.getValue();
            this.parseJson(value);
        },
        /*
            json数据处理
        */
        makeJson() {
            // 渲染模版选择bill时将bill中的补充字段合并
            let meta = {
                ...this.metaForm,
                ...(this.metaForm.uitype == "bill" ? this.billForm.meta : {})
            };
            let metaMain = {
                ...this.metaMain,
                ...(this.metaForm.uitype == "bill" ? this.billForm.metaMain : {})
            };

            let metaTab = {
                ...this.metaTab,
                ...(this.metaForm.uitype == "bill" ? this.billForm.metaTab : {})
            };
            if (this.metaForm.uitype == "bill") {
                meta.colpk = meta.colpk.split(",");
                metaTab.colfk = metaTab.colfk.split(",");
            }
            // meta 处理
            this.$set(this.formData, "meta", meta);
            if (!this.formData.main.meta.length) {
                this.formData.main.meta.push(metaMain);
            } else {
                this.formData.main.meta[0] = metaMain;
            }
            if (!this.formData.tabs.meta.length) {
                this.formData.tabs.meta.push(metaTab);
            } else {
                this.formData.tabs.meta[0] = metaTab;
            }
            // items 处理
            let itemsMain = this.$refs.widgetFormMain.getList();
            let itemsTabs = this.$refs.widgetFormTabs.getList();
            this.formData.main.items[0] = this.getList(itemsMain);
            this.formData.tabs.items[0] = this.getList(itemsTabs);
        },
        getList(list) {
            return [
                ...list.map(item => {
                    let form = {};
                    Object.keys(item.form).forEach(key => {
                        if (item.form[key] || !this.options.filterEmpty) {
                            form[key] = item.form[key];
                            form.key = item.key;
                        }
                    });
                    return form;
                })
            ];
        },
        copy(source) {
            return JSON.parse(JSON.stringify(source));
        },
        setList(formList) {
            let list = [];
            basicComponents.forEach(com => {
                formList.forEach(form => {
                    if (!form.uitype) {
                        form.uitype = "input";
                    }
                    if (!form.label) {
                        form.label = form.id;
                    }
                    if (form.uitype == com.comType) {
                        let obj = this.copy(com);
                        obj.form = { ...basicform, ...form };
                        if (!obj.key) {
                            obj.key = Date.parse(new Date()) + "_" + Math.ceil(Math.random() * 99999);
                        }
                        list.push(obj);
                        if (form.key == this.selectWidget.key) {
                            this.drugSelect(obj);
                        }
                    }
                });
            });
            return list;
        },
        parseJson(value) {
            if (typeof value.meta == "object") {
                if (value.meta.uitype == "bill") {
                    value.meta.colpk = value.meta.colpk.toString();
                }
                this.metaForm = this.drawInfo(this.metaForm, value.meta);
                this.billForm.meta = this.drawInfo(this.billForm.meta, value.meta);
            }
            if (value.main && value.main.meta.length) {
                this.metaMain = this.drawInfo(this.metaMain, value.main.meta[0]);
                this.billForm.metaMain = this.drawInfo(this.billForm.metaMain, value.main.meta[0]);
            }
            if (value.tabs && value.tabs.meta.length) {
                if (value.meta.uitype == "bill") {
                    value.tabs.meta[0].colfk = value.tabs.meta[0].colfk.toString();
                }
                this.metaTab = this.drawInfo(this.metaTab, value.tabs.meta[0]);
                this.billForm.metaTab = this.drawInfo(this.billForm.metaTab, value.tabs.meta[0]);
            }
            if (value.tabs.items[0].length) {
                this.itemsTabs = this.setList(value.tabs.items[0]);
            }
            if (value.main.items[0].length) {
                this.itemsMain = this.setList(value.main.items[0]);
            }
        },
        getJson(emit) {
            this.makeJson();
            let json = JSON.parse(JSON.stringify(this.formData));
            emit && this.$emit("getJson", json);
            return json;
        },
        drawInfo(target, source) {
            let res = {};
            Object.keys(target).forEach(item => {
                res[item] = source[item] || target[item];
            });
            return res;
        },
        /*
            拖拽处理
        */
        handleMoveEnd(evt, from) {
            console.warn({
                end: evt,
                from: from
            });
        },
        handleMoveStart({ oldIndex }) {
            console.warn("start", oldIndex);
        },
        handleMove() {
            return true;
        },
        drugSelect(item) {
            this.selectWidget = item;
        }
    },
    created() {
        this.parseJson({
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
        });
    }
};
</script>
<style lang="scss">
.form-make {
    min-width: 1200px;
    .main-content {
        .el-col {
            .content-item {
                padding: 10px;
                min-height: calc(100vh - 61px);
            }
            .components-wrap {
                .components-title {
                    margin-bottom: 10px;
                    color: $blue;
                }
                .components-content {
                    display: flex;
                    flex-wrap: wrap;
                    .components-item {
                        margin: 1%;
                        width: 48%;
                        cursor: move;
                        user-select: none;
                        line-height: 30px;
                        text-align: center;
                        background: #f4f6fc;
                        border: 1px solid #f4f6fc;
                        &:hover {
                            color: #409eff;
                            border: 1px dashed #409eff;
                        }
                    }
                }
            }
            .edit-content {
                .form-title {
                    margin: 20px 0;
                    color: $blue;
                }
                .ghost {
                    overflow: hidden;
                    height: 0;
                    padding: 0;
                    background: #f56c6c;
                    border: 2px solid #f56c6c;
                    outline-width: 0;
                    font-size: 0;
                }
                .json-content {
                    .control-content {
                        margin-bottom: 10px;
                    }
                }
            }
            .attribute-content {
                position: sticky;
                top: 0;
                .attribute-title {
                    margin-bottom: 20px;
                    color: $blue;
                }
                .el-select {
                    width: 100%;
                }
            }
        }
    }
}
</style>
