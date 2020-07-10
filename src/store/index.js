import Vue from "vue";
import Vuex from "vuex";
import { assign } from "../assets/js/common";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        typeComponts: "",
        tabstypeComponts: "",
        location: { type: "", value: "" }, //forms  buttons tabs  tabsForms
        showConfigurationProperties: "", //显示配置属性 buttons 显示按钮配置属性 tabs 显示tabs配置属性 form 显示表单配置属性 空 隐藏配置属性
        conProPertiesForm: {
            id: "", //|字段名称|，uitype=cascader的取returnback为id
            label: "", //|标签名称|
            type: "", //|字段类型|string<br>date<br>number<br>month
            uitype: "", //|ui类型|input（默认）<br>select-下拉选择框<br>datepicker-日期选择<br>datetimepicker-日期时间选择<br>radio-单选框<br>checkbox-复选框<br>upload-上传附件<br>title-标题<br>inner_table-内嵌表
            updatable: "", //|是否更新|后台专用，可写js表达式<br>0-不更新<br>1-更新（默认）
            placeholder: "", //|占位提示|提示输入内容
            disable: "", //|是否可编辑|可写js表达式<br>0-可编辑（默认）<br>1-不可编辑
            visible: "", //|是否显示| 可写表达式如：{type} >0 && {type} <= 6 ? '1':'0'<br>0-不显示 <br>1-显示（默认）
            regex: "", //|正则式|校验输入内容
            lookup: "", //|lookup|URI链接
            options: "", //|选项|给label/value list值 ??
            startwith: "", //|初始传参|用于cascader ??
            limit: "", //|限制行数|用于inner_table
            required: "", //|必填|可定义表达式 {manager_id} != null && {old_managerid} == {manager_id} && {status} == 10 ? '1':'0'<br>0-不限制（默认）<br>1-限制
            multiple: "", //|多选|下拉可多选标识 ???
            size: "", //|宽度|normal-25% （默认）<br> medium 50%<br>large 100%
            rows: "", //|行|用来定义高度，标准行数
            maxlength: "", //|字数限制|输入类的文本框
            cascaderLength: "", //|层数|用于cascader
            format: "", //|显示格式|如时间 YYYY-mm-dd
            default: "", //|默认值| 常量<br>$username -用户名<br>$userid -用户id<br>$rownum -行号<br>$date -当前日期<br>$now -当前时间<br>$month -当前年月
            detailDefault: "", //|强制默认值|更新场景依然赋值的特殊情况
            compute: "", //|自动计算|设置jsonpath表达式如：<br>同行计算:${object}.unit_price * ${object}.amount<br> 统计合计:sum(tabs#oe_order_ims_lines#$expr(${object}.unit_price * ${object}.amount))
            lookupwindow: "", //查找带回窗口|窗口id
            param: "", //|查找窗口带参传递|如"{\"main\":[\"oe_order_duty_headers#select_flag,has_contract\",\"main#select_flag,has_contract\"]}"
            lookupcolumn: "", //|查找带回数据源列| 逗号分隔如id,name,type
            returnback: "", //查找带回目标列|逗号分隔如 seller_id,seller_name,seller_type
            writeback: "", //|用于cascader|将返回的结果打散，分步到指定的属性里
            separator: "", //|返回多层数据的分隔符|用于cascader
            foldFlag: "", //|折叠标识|列表页搜索部分表单展开折叠属性<br>0-不折叠<br>1-折叠
            editable: "", //|数字加减专用|inputnumber禁止手动输入，只允许加减<br>0-自由输入<br>1-数字选择
            step: "", //|numberpicker步长|专用于配合editable属性
            readonly: "", //|只读标识|可写js表达式，当返回1时只读，0则不限制
            changereset: "", //|修改后重置|用于重置某个面板区域
            colname: "", //|数据库列表|用于覆盖id
            uicontent: "", //|嵌入子ui内容|用于inner_table
            chineseid: "", //|下拉文本内容赋值|用于inner_table转为string
            label2value: "" //|前后端交互用label|决定数据库存value或label
        },
        conProPertiesButtons: {
            id: "", //|按钮id|唯一
            code: "", //|按钮编码|前端根据code
            event: "", //|按钮事件，用于传递接口
            name: "", //|按钮名字|做为按钮标签显示
            rw_flag: "", //|模式|系统分为读写两种模式：<br>1读<br>2写
            icon: "", //|图标|按钮图标
            tranfer_winid: "", //|迁移窗口id|用于指定打开新窗口的id，如添加
            param: "", //|参数|用途较多，详情如下：<br>1-添加(select)窗口传参<br>2-附件(upload)按钮约束文件名<br>3-批量更新(updateparam)按钮传sql<br>4-表单批量操作(batchOperation)按钮指定列<br>5-下推表单(downpush)传参
            lookupcolumn: "", //|查找列约定|查找带回功能的指定数据源
            returnback: "", //|带回列约定|查找带回功能的指定目的列
            show_button: "", //|条件显示按钮|当不设置或者js表达式返回1，则显示按钮
            valid_flag: "", //|按钮的前置条件|返回有文字内容就弹出提示，否则会继续处理
            position_left: "", //|位置|0-右<br>1-左
            has_required: "" //|新增前是否要做校验|todo具体不太懂
        },
        conProPertiesTabs: {
            id: "", //|对象类型/表名|使用表名，查询与更新会引用
            table: "", //|表名|查询与更新所引用的表名，该属性会优先覆盖id
            idcolumn: "", //|id字段名|用于更新查询依赖的主键字段，默认为id
            title: "", //|标题|显示到面板的顶端
            type: "", //|布局类型|详情如下：<br>1-table 列表对于bill模板来说是可编辑的<br> 2-grid 只读表格<br> 3-form 单行表单样式<br> 4-bpm_diagram 流程图
            sqlinit: "", //|初始化sql|用于新增功能，初始化时使用的sql
            sqlselect: "", //|查询sql|根据参数id查询返回当前面板对象的sql
            disable: "", //|禁止编辑|可写js表达式，当返回1时禁用当前面板编辑，0则不限制
            billtrigger: "", //|表单更新触发器|保存数据后，渲染该属性的sql并执行
            billcheck: "", //|表单校验|内容保存未提交之前渲染该属性的sql执行并返回错误内容
            readonly: "", //|只读标识|可写js表达式，当返回1时只读，0则不限制
            allRequired: "", //|必填校验|提交时当前tab是否全部做必填项校验
            unique: "", //|唯一键列表|保存时数据库返回唯一约束违反时报错列
            sqldownpush: "", //|下推表单sql|用于已知上游数据下推业务
            sqlscalar: "", //|标量sql|配合sqlselect拿单行标量数据
            sqlmq: "", //|发送MQ SQL|生成mq消息体用的SQL
            servicedata: "", //|标量服务提取|用于解析service层的数据（目前用于rpc）<br>形如"available_coin@com.jkys.crm.service.imp.crmdrugstore.DrugStoreServiceImpl.querySingleRefundAvailableAmount(#{id})",<br>意思给available_coin这个属性赋值。 com.jkys.crm.service.imp.crmdrugstore.DrugStoreServiceImpl 为类名。querySingleRefundAvailableAmount为方法名，#{id}为参数。目前支持id
            colpk: "" //|外键列
        }
    },
    mutations: {
        setConProPertiesForm(state, obj = {}) {
            this.state.conProPertiesForm = assign(this.state.conProPertiesForm, obj);
        },
        setConProPertiesButtons(state, obj = {}) {
            this.state.conProPertiesButtons = assign(this.state.conProPertiesButtons, obj);
        },
        setConProPertiesTabs(state, obj = {}) {
            this.state.conProPertiesTabs = assign(this.state.conProPertiesTabs, obj);
        },
        setShowConfigurationProperties(state, str = "") {
            this.state.showConfigurationProperties = str;
        },
        setLocation(state, obj = {}) {
            this.state.location = obj;
        },
        setTypeComponts(state, str) {
            this.state.typeComponts = str ? str : "";
        },
        events() {
            console.log(new Vue());
        }
    },
    actions: {},
    modules: {}
});
