<template>
    <div class="forms">
        <el-form ref="form" v-show="them.showConfigurationProperties === 'forms'">
            <div class="arrt-type-title">基础属性</div>
            <el-form-item label="字段名称">
                <el-input v-model="them.conProPertiesForm.id" placeholder="如：id"></el-input>
            </el-form-item>
            <el-form-item label="标签名称">
                <el-input v-model="them.conProPertiesForm.label" placeholder="label"></el-input>
            </el-form-item>
            <el-form-item label="ui类型">
                <el-select v-model="them.conProPertiesForm.uitype" placeholder="请选择uitype">
                    <el-option v-for="item in getUiType" :label="item.label" :value="item.value" :key="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="字段类型">
                <el-select v-model="them.conProPertiesForm.type" placeholder="请选择">
                    <el-option label="number" value="number"> </el-option>
                    <el-option label="string" value="string"> </el-option>
                    <el-option label="date" value="date"> </el-option>
                    <el-option label="month" value="month"> </el-option>
                </el-select>
            </el-form-item>
            <div class="arrt-type-title">校验</div>
            <el-form-item label="是否可编辑">
                <el-input v-model="them.conProPertiesForm.disable" placeholder="0可编辑 1不可编辑"></el-input>
            </el-form-item>
            <el-form-item label="字数限制">
                <el-input v-model="them.conProPertiesForm.maxlength" placeholder="maxlength"></el-input>
            </el-form-item>
            <el-form-item label="是否必填(可写表达式)">
                <el-input v-model="them.conProPertiesForm.required" placeholder="0不限制 1限制"></el-input>
            </el-form-item>
            <el-form-item label="是否可见(可写表达式)">
                <el-input v-model="them.conProPertiesForm.visible" placeholder="0不显示 1显示"></el-input>
            </el-form-item>
            <el-form-item label="校验输入内容(正则)">
                <el-input v-model="them.conProPertiesForm.regex" placeholder="regex"></el-input>
            </el-form-item>
            <el-form-item v-show="showModule('limit', them.conProPertiesForm.uitype)" label="限制行数">
                <el-input v-model="them.conProPertiesForm.limit"></el-input>
            </el-form-item>
            <el-form-item v-show="showModule('placeholder', them.conProPertiesForm.uitype)" label="提示输入内容">
                <el-input v-model="them.conProPertiesForm.placeholder" placeholder="placeholder"></el-input>
            </el-form-item>
            <el-form-item label="显示格式">
                <el-input v-model="them.conProPertiesForm.format" placeholder="例如时间 YYYY-mm-dd"></el-input>
            </el-form-item>
            <el-form-item label="数字加减专用">
                <el-select v-model="them.conProPertiesForm.editable" placeholder="请选择">
                    <el-option label="自由输入" value="0"> </el-option>
                    <el-option label="数字选择" value="1"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item v-show="showModule('step', them.conProPertiesForm.uitype)" label="numberpicker步长">
                <el-input v-model="them.conProPertiesForm.step" placeholder="专用于配合editable属性"></el-input>
            </el-form-item>
            <el-form-item label="是否只读(可写表达式)">
                <el-input v-model="them.conProPertiesForm.readonly" placeholder="0只读 1不限制"></el-input>
            </el-form-item>
            <div class="arrt-type-title">交互样式</div>
            <el-form-item label="尺寸">
                <el-select v-model="them.conProPertiesForm.size" placeholder="请选择(默认small)">
                    <el-option label="small" value="small"> </el-option>
                    <el-option label="medium" value="medium"> </el-option>
                    <el-option label="large" value="large"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="行">
                <el-input v-model="them.conProPertiesForm.rows" placeholder="用于定义高度"></el-input>
            </el-form-item>
            <el-form-item v-show="showModule('separater', them.conProPertiesForm.uitype)" label="显示间隔标识符">
                <el-input v-model="them.conProPertiesForm.separater" placeholder="默认逗号,"></el-input>
            </el-form-item>
            <el-form-item v-show="showModule('cascaderLength', them.conProPertiesForm.uitype)" label="层数">
                <el-input v-model="them.conProPertiesForm.cascaderLength"></el-input>
            </el-form-item>
            <el-form-item label="是否折叠">
                <el-select v-model="them.conProPertiesForm.foldFlag" placeholder="请选择">
                    <el-option label="不折叠" value="0"> </el-option>
                    <el-option label="折叠" value="1"> </el-option>
                </el-select>
            </el-form-item>
            <div class="arrt-type-title">交互逻辑</div>
            <el-form-item v-show="showModule('lookup', them.conProPertiesForm.uitype)" label="URI链接">
                <el-input v-model="them.conProPertiesForm.lookup"></el-input>
            </el-form-item>
            <el-form-item label="选项">
                <el-input v-model="them.conProPertiesForm.options" placeholder="给label/value list值"></el-input>
            </el-form-item>
            <el-form-item label="是否更新">
                <el-select v-model="them.conProPertiesForm.updatable" placeholder="（默认更新）">
                    <el-option label="不更新" value="0"> </el-option>
                    <el-option label="更新" value="1"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="初始传参">
                <el-input v-model="them.conProPertiesForm.startwith" placeholder="startwith"></el-input>
            </el-form-item>
            <el-form-item label="默认值">
                <el-input v-model="them.conProPertiesForm.default" placeholder="default"></el-input>
            </el-form-item>
            <el-form-item label="强制默认值">
                <el-input v-model="them.conProPertiesForm.detailDefault" placeholder="detailDefault"></el-input>
            </el-form-item>
            <el-form-item label="自动计算">
                <el-input v-model="them.conProPertiesForm.compute" placeholder="设置jsonpath表达式"></el-input>
            </el-form-item>
            <el-form-item label="查找带回窗口">
                <el-input v-model="them.conProPertiesForm.lookupwindow" placeholder="窗口ID"></el-input>
            </el-form-item>
            <el-form-item v-show="them.conProPertiesForm.lookupwindow" label="查找窗口带参传递">
                <el-input v-model="them.conProPertiesForm.param" placeholder="参数"></el-input>
            </el-form-item>
            <el-form-item v-show="them.conProPertiesForm.lookupwindow" label="找带回数据源列">
                <el-input
                    v-model="them.conProPertiesForm.lookupcolumn"
                    placeholder="逗号分隔如 id,name,type"
                ></el-input>
            </el-form-item>
            <el-form-item v-show="them.conProPertiesForm.lookupwindow" label="查找带回目标列">
                <el-input
                    v-model="them.conProPertiesForm.returnback"
                    placeholder="逗号分隔如seller_id,seller_name,seller_type"
                ></el-input>
            </el-form-item>
            <el-form-item v-show="showModule('writeback', them.conProPertiesForm.uitype)" label="写入返回(writeback)">
                <el-input
                    v-model="them.conProPertiesForm.writeback"
                    placeholder="将返回的结果打散，分步到指定的属性里"
                ></el-input>
            </el-form-item>
            <el-form-item label="返回多层数据的分隔符">
                <el-input v-model="them.conProPertiesForm.separator"></el-input>
            </el-form-item>
            <el-form-item label="修改后重置">
                <el-input v-model="them.conProPertiesForm.changereset"></el-input>
            </el-form-item>
            <el-form-item label="数据库列表">
                <el-input v-model="them.colname" placeholder="用于覆盖id"></el-input>
            </el-form-item>
            <el-form-item v-show="showModule('uicontent', them.conProPertiesForm.uitype)" label="嵌入子ui内容">
                <el-input type="textarea" v-model="them.uicontent" placeholder="用于inner_table"></el-input>
            </el-form-item>
            <el-form-item label="下拉文本内容赋值">
                <el-input v-model="them.chineseid" placeholder="用于inner_table转为string"></el-input>
            </el-form-item>
            <el-form-item v-show="showModule('label2value', them.conProPertiesForm.uitype)" label="前后端交互用label">
                <el-input v-model="them.label2value" placeholder="决定数据库存value或label"></el-input>
            </el-form-item>
        </el-form>
        <el-form ref="tabs" v-show="them.showConfigurationProperties === 'tabs'">
            <el-form-item label="对象类型/表名">
                <el-input v-model="them.conProPertiesTabs.id" placeholder="使用表名，查询与更新会引用"></el-input>
            </el-form-item>
            <el-form-item label="表名">
                <el-input
                    v-model="them.conProPertiesTabs.table"
                    placeholder="查询与更新所引用的表名，该属性会优先覆盖id"
                ></el-input>
            </el-form-item>
            <el-form-item label="id字段名">
                <el-input
                    v-model="them.conProPertiesTabs.idcolumn"
                    placeholder="用于更新查询依赖的主键字段，默认为id"
                ></el-input>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="them.conProPertiesTabs.title" placeholder="显示到面板的顶端"></el-input>
            </el-form-item>
            <el-form-item label="布局类型">
                <el-select v-model="them.conProPertiesTabs.type" placeholder="请选择">
                    <el-option label="表格" value="table"> </el-option>
                    <el-option label="只读表格" value="grid"> </el-option>
                    <el-option label="表单" value="form"> </el-option>
                    <el-option label="流程图" value="bpm_diagram"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="初始化sql">
                <el-input
                    v-model="them.conProPertiesTabs.sqlinit"
                    placeholder="用于新增功能，初始化时使用的sql"
                ></el-input>
            </el-form-item>
            <el-form-item label="查询sql">
                <el-input
                    v-model="them.conProPertiesTabs.sqlselect"
                    placeholder="根据参数id查询返回当前面板对象的sql"
                ></el-input>
            </el-form-item>
            <el-form-item label="是否可编辑(可写表达式)(0不限制 1禁止编辑)">
                <el-input v-model="them.conProPertiesTabs.disable" placeholder="0不限制 1禁止编辑"></el-input>
            </el-form-item>
            <el-form-item label="表单更新触发器">
                <el-input
                    v-model="them.conProPertiesTabs.billtrigger"
                    placeholder="保存数据后，渲染该属性的sql并执行"
                ></el-input>
            </el-form-item>
            <el-form-item label="表单校验">
                <el-input
                    v-model="them.conProPertiesTabs.billcheck"
                    placeholder="内容保存未提交之前渲染该属性的sql执行并返回错误内容"
                ></el-input>
            </el-form-item>
            <el-form-item label="是否只读(可写表达式)(0不限制 1只读)">
                <el-input v-model="them.conProPertiesTabs.readonly" placeholder="0不限制 1只读"></el-input>
            </el-form-item>
            <el-form-item label="必填校验">
                <el-input
                    v-model="them.conProPertiesTabs.allRequired"
                    placeholder="提交时当前tab是否全部做必填项校验"
                ></el-input>
            </el-form-item>
            <el-form-item label="colfk">
                <el-input v-model="them.conProPertiesTabs.colfk" placeholder="多个使用逗号隔开"></el-input>
            </el-form-item>
            <el-form-item label="autodeleteby">
                <el-input v-model="them.conProPertiesTabs.autodeleteby" placeholder="autodeleteby"></el-input>
            </el-form-item>
            <el-form-item label="唯一键列表">
                <el-input
                    v-model="them.conProPertiesTabs.unique"
                    placeholder="保存时数据库返回唯一约束违反时报错列"
                ></el-input>
            </el-form-item>
            <el-form-item label="下推表单sql">
                <el-input
                    v-model="them.conProPertiesTabs.sqldownpush"
                    placeholder="用于已知上游数据下推业务"
                ></el-input>
            </el-form-item>
            <el-form-item label="标量sql">
                <el-input
                    v-model="them.conProPertiesTabs.sqlscalar"
                    placeholder="配合sqlselect拿单行标量数据"
                ></el-input>
            </el-form-item>
            <el-form-item label="发送MQ SQL">
                <el-input v-model="them.conProPertiesTabs.sqlmq" placeholder="生成mq消息体用的SQL"></el-input>
            </el-form-item>
            <el-form-item label="标量服务提取">
                <el-input v-model="them.conProPertiesTabs.servicedata" placeholder="用于解析service层的数据"></el-input>
            </el-form-item>
        </el-form>
        <el-form ref="buttons" v-show="them.showConfigurationProperties === 'buttons'">
            <el-form-item label="按钮id">
                <el-input v-model="them.conProPertiesButtons.id" readonly placeholder="只读"></el-input>
            </el-form-item>
            <el-form-item label="按钮名字">
                <el-input v-model="them.conProPertiesButtons.name" placeholder="做为按钮标签显示"></el-input>
            </el-form-item>
            <el-form-item label="按钮编码">
                <el-input v-model="them.conProPertiesButtons.code" placeholder="前端根据code"></el-input>
            </el-form-item>
            <el-form-item label="按钮事件">
                <el-input v-model="them.conProPertiesButtons.event" placeholder="按钮事件，用于传递接口"></el-input>
            </el-form-item>
            <el-form-item label="读写模式">
                <el-select v-model="them.conProPertiesButtons.rw_flag" placeholder="请选择">
                    <el-option label="读" value="1"> </el-option>
                    <el-option label="写" value="2"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="图标">
                <el-input v-model="them.conProPertiesButtons.icon" placeholder="按钮图标"></el-input>
            </el-form-item>
            <el-form-item label="迁移窗口id">
                <el-input v-model="them.conProPertiesButtons.tranfer_winid" placeholder="按钮图标"></el-input>
            </el-form-item>
            <el-form-item label="参数">
                <el-input v-model="them.conProPertiesButtons.param" placeholder="参数"></el-input>
            </el-form-item>
            <el-form-item label="查找列约定">
                <el-input
                    v-model="them.conProPertiesButtons.lookupcolumn"
                    placeholder="查找带回功能的指定数据源"
                ></el-input>
            </el-form-item>
            <el-form-item label="带回列约定">
                <el-input
                    v-model="them.conProPertiesButtons.returnback"
                    placeholder="查找带回功能的指定目的列"
                ></el-input>
            </el-form-item>
            <el-form-item label="条件显示按钮">
                <el-input
                    v-model="them.conProPertiesButtons.show_button"
                    placeholder="当不设置或者js表达式返回1，则显示按钮"
                ></el-input>
            </el-form-item>
            <el-form-item label="按钮的前置条件">
                <el-input
                    v-model="them.conProPertiesButtons.valid_flag"
                    placeholder="返回有文字内容就弹出提示，否则会继续处理"
                ></el-input>
            </el-form-item>
            <el-form-item label="位置">
                <el-select v-model="them.conProPertiesButtons.position_left" placeholder="请选择">
                    <el-option label="右" value="0"> </el-option>
                    <el-option label="左" value="1"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="新增前是否要做校验">
                <el-input v-model="them.conProPertiesButtons.has_required" placeholder=""></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { basicComponents } from "./config";
export default {
    inject: {
        them: {
            default: () => ({})
        }
    },
    computed: {
        getUiType() {
            return basicComponents.map(item => {
                return {
                    value: item.uitype,
                    label: item.name
                };
            });
        }
    },
    data() {
        return {
            showInfo: {
                placeholder: "input,textarea",
                lookup: "select,cascader",
                label2value: "select",
                writeback: "cascader",
                separater: "cascader",
                cascaderLength: "cascader",
                limit: "inner_table",
                uicontent: "inner_table",
                step: "editable"
            }
        };
    },
    // watch:{
    //     "them.conProPertiesForm"
    // }
    methods: {
        showModule(moduleType, uiType = "input") {
            return this.showInfo[moduleType].indexOf(uiType) > -1;
        }
    }
};
</script>

<style lang="scss" scoped>
.forms {
    height: 100%;
    overflow: auto;
    ::v-deep .el-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .el-form-item {
            width: 48%;
            .el-form-item__label {
                margin-bottom: 4px;
                line-height: 1.4;
            }
        }
        .arrt-type-title {
            width: 100%;
            margin-bottom: 10px;
            padding: 4px 8px;
            color: #fff;
            font-weight: bold;
            border-radius: 2px;
            background: #096dd9;
        }
    }
}
</style>
