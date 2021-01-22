<template>
    <el-form
        class="mate-form-cotent"
        ref="form"
        :model="them.sys_window"
        v-if="them.sys_window"
        label-position="right"
        label-width="40px"
    >
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
                <el-input v-model="them.sys_window.data.meta.url"></el-input>
            </el-form-item>
            <el-form-item label="BPM模版" prop="bmpModel">
                <el-input v-model="them.sys_window.bmpModel" placeholder="{ { 模版名 } }"></el-input>
            </el-form-item>
            <el-form-item label="导入配置" prop="import_config">
                <el-input type="textarea" :autosize="true" v-model="them.sys_window.import_config"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="noop-el"></div>
            </el-form-item>
            <el-form-item>
                <div class="noop-el"></div>
            </el-form-item>
        </div>
        <div class="form-title">属性配置(data/main/meta[0])</div>
        <div class="meta-wrap">
            <el-form-item label="id" prop="id">
                <el-input v-model="them.sys_window.data.main.meta[0].id" placeholder="对象类型/表名"></el-input>
            </el-form-item>
            <el-form-item label="标题" prop="title">
                <el-input v-model="them.sys_window.data.main.meta[0].title"></el-input>
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
            <el-form-item>
                <div class="noop-el"></div>
            </el-form-item>
            <el-form-item>
                <div class="noop-el"></div>
            </el-form-item>
        </div>
        <div class="form-title">sql配置(data/main/meta[0])</div>
        <div class="large-item meta-wrap">
            <el-form-item label="初始化sql" prop="sqlinit">
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 4 }"
                    :rows="5"
                    placeholder="sqlinit"
                    v-model="them.sys_window.data.main.meta[0].sqlinit"
                ></el-input>
            </el-form-item>
            <el-form-item label="查询sql" prop="sqlselect">
                <el-input
                    type="textarea"
                    placeholder="sqlselect"
                    :autosize="{ minRows: 4 }"
                    v-model="them.sys_window.data.main.meta[0].sqlselect"
                ></el-input>
            </el-form-item>
            <el-form-item label="标量sql" prop="sqlscalar">
                <el-input
                    type="textarea"
                    placeholder="sqlscalar"
                    :autosize="{ minRows: 4 }"
                    v-model="them.sys_window.data.main.meta[0].sqlscalar"
                ></el-input>
            </el-form-item>
            <el-form-item label="下推表单sql" prop="sqldownpush">
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 4 }"
                    :rows="5"
                    placeholder="sqldownpush"
                    v-model="them.sys_window.data.main.meta[0].sqldownpush"
                ></el-input>
            </el-form-item>
            <el-form-item label="表单校验" prop="billcheck">
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 4 }"
                    :rows="5"
                    placeholder="billcheck"
                    v-model="them.sys_window.data.main.meta[0].billcheck"
                ></el-input>
            </el-form-item>
            <el-form-item label="表单更新触发器" prop="billtrigger">
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 4 }"
                    :rows="5"
                    placeholder="billtrigger"
                    v-model="them.sys_window.data.main.meta[0].billtrigger"
                ></el-input>
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
        margin-bottom: 12px;
        color: $blue;
    }
    ::v-deep .meta-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-bottom: 12px;
        padding: 12px 12px 0;
        border: 1px solid #eee;
        .el-input,
        .el-select,
        .el-textarea,
        .noop-el {
            width: 100px;
        }
        .el-form-item__label {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            min-height: 40px;
            line-height: 1;
        }
        &.large-item {
            .el-form-item {
                width: 100%;
            }
            .el-textarea {
                width: 100%;
            }
        }
    }
}
</style>
