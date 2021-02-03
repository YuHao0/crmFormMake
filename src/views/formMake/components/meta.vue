<template>
    <el-form class="mate-form-cotent" ref="form" :model="them.sys_window" v-if="them.sys_window">
        <div class="form-title">window窗口对象</div>
        <div class="meta-wrap">
            <el-form-item label="编码" prop="code">
                <el-input v-model="them.sys_window.code"></el-input>
            </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input
                    v-model="them.sys_window.name"
                    @change="them.sys_window.data.meta.name = them.sys_window.name"
                ></el-input>
            </el-form-item>
            <el-form-item label="图标" prop="icon">
                <el-input v-model="them.sys_window.icon"></el-input>
            </el-form-item>
            <el-form-item label="渲染模板" prop="template">
                <el-select
                    v-model="them.sys_window.template"
                    @change="them.sys_window.data.meta.uitype = them.sys_window.template"
                    placeholder="请选择"
                >
                    <el-option label="query_list" value="query_list"> </el-option>
                    <el-option label="bill" value="bill"> </el-option>
                    <el-option label="tree_query_list" value="tree_query_list"> </el-option>
                    <el-option label="query_detail" value="query_detail"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="数据源" prop="data_source">
                <el-input v-model="them.sys_window.data_source"></el-input>
            </el-form-item>
            <el-form-item label="描述" prop="description">
                <el-input v-model="them.sys_window.description"></el-input>
            </el-form-item>
            <el-form-item label="关联窗口" prop="ref_winid">
                <el-input v-model="them.sys_window.ref_winid"></el-input>
            </el-form-item>
            <el-form-item label="审计标识" prop="audit_flag">
                <el-input v-model="them.sys_window.audit_flag"></el-input>
            </el-form-item>
            <el-form-item label="绑定业务类型" prop="busi_type">
                <el-input v-model="them.sys_window.busi_type"></el-input>
            </el-form-item>
            <el-form-item label="bpm模型绑定" prop="model_id">
                <el-input v-model="them.sys_window.model_id"></el-input>
            </el-form-item>
            <el-form-item label="是否物理删除" prop="hard_delete">
                <el-select v-model="them.sys_window.hard_delete" placeholder="请选择">
                    <el-option label="是" value="1"> </el-option>
                    <el-option label="否" value="0"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="创建人绑定" prop="creator_bind">
                <el-input v-model="them.sys_window.creator_bind"></el-input>
            </el-form-item>
            <el-form-item label="写权限" prop="write_permission">
                <el-input v-model="them.sys_window.write_permission"></el-input>
            </el-form-item>
            <el-form-item label="页面参数请求接口" prop="url">
                <el-input v-model="them.sys_window.data.meta.url" placeholder="url"></el-input>
            </el-form-item>
            <el-form-item label="外键列colpk" prop="colpk">
                <el-input v-model="them.sys_window.data.meta.colpk" placeholder="多个用,隔开"></el-input>
            </el-form-item>
            <el-form-item label="BPM模版" prop="bmpModel">
                <el-input v-model="them.sys_window.bmpModel" placeholder="{ { 模版名 } }"></el-input>
            </el-form-item>
            <el-form-item label="导入配置" prop="import_config">
                <el-popover placement="left-start" width="600" trigger="click">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 10 }"
                        v-model="them.sys_window.import_config"
                    ></el-input>
                    <el-input type="textarea" slot="reference" v-model="them.sys_window.import_config"></el-input>
                </el-popover>
            </el-form-item>
        </div>
        <div class="form-title">属性配置(data/main/meta[0])</div>
        <div class="meta-wrap">
            <el-form-item label="id" prop="id">
                <el-input v-model="them.sys_window.data.main.meta[0].id" placeholder="对象类型/表名"></el-input>
            </el-form-item>
            <el-form-item label="标题" prop="title">
                <el-input v-model="them.sys_window.data.main.meta[0].title" placeholder="显示到面板的顶端"></el-input>
            </el-form-item>
            <el-form-item label="表名" prop="table">
                <el-input
                    v-model="them.sys_window.data.main.meta[0].table"
                    placeholder="查询与更新所引用的表名，该属性会优先覆盖id"
                ></el-input>
            </el-form-item>
            <el-form-item label="类型" prop="type">
                <el-input v-model="them.sys_window.data.main.meta[0].type"></el-input>
            </el-form-item>
            <el-form-item label="禁止编辑" prop="disable">
                <el-input v-model="them.sys_window.data.main.meta[0].disable"></el-input>
            </el-form-item>
        </div>
        <div class="form-title">sql配置(data/main/meta[0])</div>
        <div class="large-item meta-wrap">
            <el-form-item label="初始化sql" prop="sqlinit">
                <el-popover placement="left-start" width="600" trigger="click">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 10 }"
                        placeholder="sqlinit"
                        v-model="them.sys_window.data.main.meta[0].sqlinit"
                    ></el-input>
                    <el-input
                        type="textarea"
                        placeholder="sqlinit"
                        slot="reference"
                        v-model="them.sys_window.data.main.meta[0].sqlinit"
                    ></el-input>
                </el-popover>
            </el-form-item>
            <el-form-item label="查询sql" prop="sqlselect">
                <el-popover placement="left-start" width="600" trigger="click">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 10 }"
                        placeholder="sqlselect"
                        v-model="them.sys_window.data.main.meta[0].sqlselect"
                    ></el-input>
                    <el-input
                        type="textarea"
                        placeholder="sqlselect"
                        slot="reference"
                        v-model="them.sys_window.data.main.meta[0].sqlselect"
                    ></el-input>
                </el-popover>
            </el-form-item>
            <el-form-item label="标量sql" prop="sqlscalar">
                <el-popover placement="left-start" width="600" trigger="click">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 10 }"
                        placeholder="sqlscalar"
                        v-model="them.sys_window.data.main.meta[0].sqlscalar"
                    ></el-input>
                    <el-input
                        type="textarea"
                        placeholder="sqlscalar"
                        slot="reference"
                        v-model="them.sys_window.data.main.meta[0].sqlscalar"
                    ></el-input>
                </el-popover>
            </el-form-item>
            <el-form-item label="下推表单sql" prop="sqldownpush">
                <el-popover placement="left-start" width="600" trigger="click">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 10 }"
                        placeholder="sqldownpush"
                        v-model="them.sys_window.data.main.meta[0].sqldownpush"
                    ></el-input>
                    <el-input
                        type="textarea"
                        placeholder="sqldownpush"
                        slot="reference"
                        v-model="them.sys_window.data.main.meta[0].sqldownpush"
                    ></el-input>
                </el-popover>
            </el-form-item>
            <el-form-item label="表单校验" prop="billcheck">
                <el-popover placement="left-start" width="600" trigger="click">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 10 }"
                        placeholder="billcheck"
                        v-model="them.sys_window.data.main.meta[0].billcheck"
                    ></el-input>
                    <el-input
                        type="textarea"
                        placeholder="billcheck"
                        slot="reference"
                        v-model="them.sys_window.data.main.meta[0].billcheck"
                    ></el-input>
                </el-popover>
            </el-form-item>
            <el-form-item label="表单更新触发器" prop="billtrigger">
                <el-popover placement="left-start" width="600" trigger="click">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 10 }"
                        placeholder="billtrigger"
                        v-model="them.sys_window.data.main.meta[0].billtrigger"
                    ></el-input>
                    <el-input
                        type="textarea"
                        placeholder="billtrigger"
                        slot="reference"
                        v-model="them.sys_window.data.main.meta[0].billtrigger"
                    ></el-input>
                </el-popover>
            </el-form-item>
        </div>
    </el-form>
</template>

<script>
export default {
    inject: {
        them: {
            default: () => ({})
        }
    }
};
</script>
<style lang="scss" scoped>
.mate-form-cotent {
    height: calc(100% - 40px);
    overflow: auto;
    .form-title {
        margin-bottom: 10px;
        padding: 4px 8px;
        color: #fff;
        font-weight: bold;
        border-radius: 2px;
        background: #096dd9;
    }
    ::v-deep .meta-wrap {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 12px;
        .el-form-item {
            width: 100%;
            .el-form-item__label {
                margin-bottom: 4px;
                line-height: 1.4;
            }
        }
    }
}
</style>
