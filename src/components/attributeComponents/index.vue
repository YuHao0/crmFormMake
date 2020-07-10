<template>
    <div class="forms">
        <el-form ref="form" v-show="$store.state.showConfigurationProperties === 'forms'">
            <el-form-item label="字段名称">
                <el-input :disabled="true" v-model="$store.state.conProPertiesForm.id"></el-input>
            </el-form-item>
            <el-form-item label="标签名称">
                <el-input v-model="$store.state.conProPertiesForm.label"></el-input>
            </el-form-item>
            <el-form-item label="ui类型">
                <el-input :disabled="true" v-model="$store.state.conProPertiesForm.uitype"></el-input>
            </el-form-item>
            <el-form-item label="字段类型">
                <el-select v-model="$store.state.conProPertiesForm.type" placeholder="请选择">
                    <el-option label="number" value="number"> </el-option>
                    <el-option label="string" value="string"> </el-option>
                    <el-option label="date" value="date"> </el-option>
                    <el-option label="month" value="month"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否更新">
                <el-select v-model="$store.state.conProPertiesForm.updatable" placeholder="请选择（默认更新）">
                    <el-option label="不更新" value="0"> </el-option>
                    <el-option label="更新" value="1"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="提示输入内容">
                <el-input v-model="$store.state.conProPertiesForm.placeholder"></el-input>
            </el-form-item>
            <!-- <el-form-item label="是否可编辑">
                <el-select v-model="$store.state.conProPertiesForm.disable" placeholder="请选择（默认可编辑）">
                    <el-option label="可编辑" value="0"> </el-option>
                    <el-option label="不可编辑" value="1"> </el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item label="是否可编辑(可写表达式)(0可编辑 1不可编辑)">
                <el-input v-model="$store.state.conProPertiesForm.disable" placeholder="0可编辑 1不可编辑"></el-input>
            </el-form-item>
            <!-- <el-form-item label="是否可见">
                <el-select v-model="$store.state.conProPertiesForm.visible" placeholder="请选择(默认显示)">
                    <el-option label="不显示" value="0"> </el-option>
                    <el-option label="显示" value="1"> </el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item label="是否可见(可写表达式)(0不显示 1显示)">
                <el-input v-model="$store.state.conProPertiesForm.visible" placeholder="0不显示 1显示"></el-input>
            </el-form-item>
            <el-form-item label="校验输入内容(正则)">
                <el-input v-model="$store.state.conProPertiesForm.regex"></el-input>
            </el-form-item>
            <el-form-item label="URI链接">
                <el-input v-model="$store.state.conProPertiesForm.lookup"></el-input>
            </el-form-item>
            <el-form-item label="选项">
                <el-input
                    v-model="$store.state.conProPertiesForm.options"
                    placeholder="给label/value list值"
                ></el-input>
            </el-form-item>
            <el-form-item label="初始传参">
                <el-input v-model="$store.state.conProPertiesForm.startwith"></el-input>
            </el-form-item>
            <el-form-item label="限制行数">
                <el-input v-model="$store.state.conProPertiesForm.limit"></el-input>
            </el-form-item>
            <!-- <el-form-item label="是否必填">
                <el-select v-model="$store.state.conProPertiesForm.required" placeholder="请选择(默认不限制)">
                    <el-option label="不限制" value="0"> </el-option>
                    <el-option label="限制" value="1"> </el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item label="是否必填(可写表达式)(0不限制 1限制)">
                <el-input v-model="$store.state.conProPertiesForm.required" placeholder="0不限制 1限制"></el-input>
            </el-form-item>
            <el-form-item label="尺寸">
                <el-select v-model="$store.state.conProPertiesForm.size" placeholder="请选择(默认small)">
                    <el-option label="small" value="small"> </el-option>
                    <el-option label="medium" value="medium"> </el-option>
                    <el-option label="large" value="large"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="行">
                <el-input v-model="$store.state.conProPertiesForm.rows" placeholder="用于定义高度"></el-input>
            </el-form-item>
            <el-form-item label="字数限制">
                <el-input v-model="$store.state.conProPertiesForm.maxlength"></el-input>
            </el-form-item>
            <el-form-item label="层数">
                <el-input v-model="$store.state.conProPertiesForm.cascaderLength"></el-input>
            </el-form-item>
            <el-form-item label="显示格式">
                <el-input v-model="$store.state.conProPertiesForm.format" placeholder="例如时间 YYYY-mm-dd"></el-input>
            </el-form-item>
            <el-form-item label="默认值">
                <el-input v-model="$store.state.conProPertiesForm.default"></el-input>
            </el-form-item>
            <el-form-item label="强制默认值">
                <el-input v-model="$store.state.conProPertiesForm.detailDefault"></el-input>
            </el-form-item>
            <el-form-item label="自动计算">
                <el-input v-model="$store.state.conProPertiesForm.compute" placeholder="设置jsonpath表达式"></el-input>
            </el-form-item>
            <el-form-item label="查找带回窗口">
                <el-input v-model="$store.state.conProPertiesForm.lookupwindow" placeholder="窗口ID"></el-input>
            </el-form-item>
            <el-form-item label="查找窗口带参传递">
                <el-input v-model="$store.state.conProPertiesForm.param" placeholder="参数"></el-input>
            </el-form-item>
            <el-form-item label="找带回数据源列">
                <el-input
                    v-model="$store.state.conProPertiesForm.lookupcolumn"
                    placeholder="逗号分隔如 id,name,type"
                ></el-input>
            </el-form-item>
            <el-form-item label="查找带回目标列">
                <el-input
                    v-model="$store.state.conProPertiesForm.returnback"
                    placeholder="逗号分隔如seller_id,seller_name,seller_type"
                ></el-input>
            </el-form-item>
            <el-form-item label="writeback">
                <el-input
                    v-model="$store.state.conProPertiesForm.writeback"
                    placeholder="将返回的结果打散，分步到指定的属性里"
                ></el-input>
            </el-form-item>
            <el-form-item label="返回多层数据的分隔符">
                <el-input v-model="$store.state.conProPertiesForm.separator"></el-input>
            </el-form-item>
            <el-form-item label="是否折叠">
                <el-select v-model="$store.state.conProPertiesForm.foldFlag" placeholder="请选择)">
                    <el-option label="不折叠" value="0"> </el-option>
                    <el-option label="折叠" value="1"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="数字加减专用">
                <el-select v-model="$store.state.conProPertiesForm.foldFlag" placeholder="请选择">
                    <el-option label="自由输入" value="0"> </el-option>
                    <el-option label="数字选择" value="1"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="numberpicker步长">
                <el-input v-model="$store.state.conProPertiesForm.step" placeholder="专用于配合editable属性"></el-input>
            </el-form-item>
            <!-- <el-form-item label="是否只读">
                <el-select v-model="$store.state.conProPertiesForm.readonly" placeholder="请选择">
                    <el-option label="只读" value="0"> </el-option>
                    <el-option label="不限制" value="1"> </el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item label="是否只读(可写表达式)(0只读 1不限制)">
                <el-input v-model="$store.state.conProPertiesForm.readonly" placeholder="0只读 1不限制"></el-input>
            </el-form-item>
            <el-form-item label="修改后重置">
                <el-input v-model="$store.state.changereset"></el-input>
            </el-form-item>
            <el-form-item label="数据库列表">
                <el-input v-model="$store.state.colname" placeholder="用于覆盖id"></el-input>
            </el-form-item>
            <el-form-item label="嵌入子ui内容">
                <el-input v-model="$store.state.uicontent" placeholder="用于inner_table"></el-input>
            </el-form-item>
            <el-form-item label="下拉文本内容赋值">
                <el-input v-model="$store.state.chineseid" placeholder="用于inner_table转为string"></el-input>
            </el-form-item>
            <el-form-item label="前后端交互用label">
                <el-input v-model="$store.state.label2value" placeholder="决定数据库存value或label"></el-input>
            </el-form-item>
        </el-form>
        <el-form ref="tabs" v-show="$store.state.showConfigurationProperties === 'tabs'">
            <el-form-item label="对象类型/表名">
                <el-input
                    v-model="$store.state.conProPertiesTabs.id"
                    placeholder="使用表名，查询与更新会引用"
                ></el-input>
            </el-form-item>
            <el-form-item label="表名">
                <el-input
                    v-model="$store.state.conProPertiesTabs.table"
                    placeholder="查询与更新所引用的表名，该属性会优先覆盖id"
                ></el-input>
            </el-form-item>
            <el-form-item label="id字段名">
                <el-input
                    v-model="$store.state.conProPertiesTabs.idcolumn"
                    placeholder="用于更新查询依赖的主键字段，默认为id"
                ></el-input>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="$store.state.conProPertiesTabs.title" placeholder="显示到面板的顶端"></el-input>
            </el-form-item>
            <el-form-item label="布局类型">
                <el-select v-model="$store.state.conProPertiesTabs.type" placeholder="请选择">
                    <el-option label="表格" value="table"> </el-option>
                    <el-option label="只读表格" value="grid"> </el-option>
                    <el-option label="表单" value="form"> </el-option>
                    <el-option label="流程图" value="bpm_diagram"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="初始化sql">
                <el-input
                    v-model="$store.state.conProPertiesTabs.sqlinit"
                    placeholder="用于新增功能，初始化时使用的sql"
                ></el-input>
            </el-form-item>
            <el-form-item label="查询sql">
                <el-input
                    v-model="$store.state.conProPertiesTabs.sqlselect"
                    placeholder="根据参数id查询返回当前面板对象的sql"
                ></el-input>
            </el-form-item>
            <!-- <el-form-item label="是否可编辑">
                <el-select v-model="$store.state.conProPertiesTabs.disable" placeholder="请选择">
                    <el-option label="不限制" value="0"> </el-option>
                    <el-option label="禁止编辑" value="1"> </el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item label="是否可编辑(可写表达式)(0不限制 1禁止编辑)">
                <el-input v-model="$store.state.conProPertiesTabs.disable" placeholder="0不限制 1禁止编辑"></el-input>
            </el-form-item>
            <el-form-item label="表单更新触发器">
                <el-input
                    v-model="$store.state.conProPertiesTabs.billtrigger"
                    placeholder="保存数据后，渲染该属性的sql并执行"
                ></el-input>
            </el-form-item>
            <el-form-item label="表单校验">
                <el-input
                    v-model="$store.state.conProPertiesTabs.billcheck"
                    placeholder="内容保存未提交之前渲染该属性的sql执行并返回错误内容"
                ></el-input>
            </el-form-item>
            <!-- <el-form-item label="是否只读">
                <el-select v-model="$store.state.conProPertiesTabs.readonly" placeholder="请选择">
                    <el-option label="不限制" value="0"> </el-option>
                    <el-option label="只读" value="1"> </el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item label="是否只读(可写表达式)(0不限制 1只读)">
                <el-input v-model="$store.state.conProPertiesTabs.readonly" placeholder="0不限制 1只读"></el-input>
            </el-form-item>
            <el-form-item label="必填校验">
                <el-input
                    v-model="$store.state.conProPertiesTabs.allRequired"
                    placeholder="提交时当前tab是否全部做必填项校验"
                ></el-input>
            </el-form-item>
            <el-form-item label="唯一键列表">
                <el-input
                    v-model="$store.state.conProPertiesTabs.unique"
                    placeholder="保存时数据库返回唯一约束违反时报错列"
                ></el-input>
            </el-form-item>
            <el-form-item label="下推表单sql">
                <el-input
                    v-model="$store.state.conProPertiesTabs.sqldownpush"
                    placeholder="用于已知上游数据下推业务"
                ></el-input>
            </el-form-item>
            <el-form-item label="标量sql">
                <el-input
                    v-model="$store.state.conProPertiesTabs.sqlscalar"
                    placeholder="配合sqlselect拿单行标量数据"
                ></el-input>
            </el-form-item>
            <el-form-item label="发送MQ SQL">
                <el-input v-model="$store.state.conProPertiesTabs.sqlmq" placeholder="生成mq消息体用的SQL"></el-input>
            </el-form-item>
            <el-form-item label="标量服务提取">
                <el-input
                    v-model="$store.state.conProPertiesTabs.servicedata"
                    placeholder="用于解析service层的数据"
                ></el-input>
            </el-form-item>
        </el-form>
        <el-form ref="buttons" v-show="$store.state.showConfigurationProperties === 'buttons'">
            <el-form-item label="按钮id">
                <el-input
                    v-model="$store.state.conProPertiesButtons.id"
                    :disabled="true"
                    placeholder="按钮id"
                ></el-input>
            </el-form-item>
            <el-form-item label="按钮编码">
                <el-input v-model="$store.state.conProPertiesButtons.code" placeholder="前端根据code"></el-input>
            </el-form-item>
            <el-form-item label="按钮事件">
                <el-input
                    v-model="$store.state.conProPertiesButtons.event"
                    placeholder="按钮事件，用于传递接口"
                ></el-input>
            </el-form-item>
            <el-form-item label="按钮名字">
                <el-input v-model="$store.state.conProPertiesButtons.name" placeholder="做为按钮标签显示"></el-input>
            </el-form-item>
            <el-form-item label="模式">
                <el-select v-model="$store.state.conProPertiesButtons.rw_flag" placeholder="请选择">
                    <el-option label="读" value="1"> </el-option>
                    <el-option label="写" value="2"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="图标">
                <el-input v-model="$store.state.conProPertiesButtons.icon" placeholder="按钮图标"></el-input>
            </el-form-item>
            <el-form-item label="迁移窗口id">
                <el-input v-model="$store.state.conProPertiesButtons.tranfer_winid" placeholder="按钮图标"></el-input>
            </el-form-item>
            <el-form-item label="参数">
                <el-input v-model="$store.state.conProPertiesButtons.param" placeholder="参数"></el-input>
            </el-form-item>
            <el-form-item label="查找列约定">
                <el-input
                    v-model="$store.state.conProPertiesButtons.lookupcolumn"
                    placeholder="查找带回功能的指定数据源"
                ></el-input>
            </el-form-item>
            <el-form-item label="带回列约定">
                <el-input
                    v-model="$store.state.conProPertiesButtons.returnback"
                    placeholder="查找带回功能的指定目的列"
                ></el-input>
            </el-form-item>
            <el-form-item label="条件显示按钮">
                <el-input
                    v-model="$store.state.conProPertiesButtons.show_button"
                    placeholder="当不设置或者js表达式返回1，则显示按钮"
                ></el-input>
            </el-form-item>
            <el-form-item label="按钮的前置条件">
                <el-input
                    v-model="$store.state.conProPertiesButtons.valid_flag"
                    placeholder="返回有文字内容就弹出提示，否则会继续处理"
                ></el-input>
            </el-form-item>
            <el-form-item label="位置">
                <el-select v-model="$store.state.conProPertiesButtons.position_left" placeholder="请选择">
                    <el-option label="右" value="0"> </el-option>
                    <el-option label="左" value="1"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="新增前是否要做校验">
                <el-input v-model="$store.state.conProPertiesButtons.has_required" placeholder=""></el-input>
            </el-form-item>
        </el-form>
        <!-- <el-form ref="form" label-position="right" label-width="80px">
                        <el-form-item label="属性名">
                            <el-input v-model="$store.state.conProPertiesForm.id"></el-input>
                        </el-form-item>
                        <el-form-item label="属性标签">
                            <el-input v-model="$store.state.conProPertiesForm.label"></el-input>
                        </el-form-item>
                        <el-form-item label="属性类型">
                            <el-select v-model="$store.state.conProPertiesForm.type" placeholder="请选择">
                                <el-option label="number" value="number"> </el-option>
                                <el-option label="string" value="string"> </el-option>
                                <el-option label="date" value="date"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="默认值">
                            <el-input v-model="$store.state.conProPertiesForm.default"></el-input>
                        </el-form-item>
                        <el-form-item label="placeholder">
                            <el-input v-model="$store.state.conProPertiesForm.placeholder"></el-input>
                        </el-form-item>
                        <el-form-item label="字典url">
                            <el-input v-model="$store.state.conProPertiesForm.lookup"></el-input>
                        </el-form-item>
                        <el-form-item label="是否可见">
                            <el-select v-model="$store.state.conProPertiesForm.visible" placeholder="请选择">
                                <el-option label="0" value="0"> </el-option>
                                <el-option label="1" value="1"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="disable">
                            <el-input v-model="$store.state.conProPertiesForm.disable"></el-input>
                        </el-form-item>
                        <el-form-item label="updatable">
                            <el-select v-model="$store.state.conProPertiesForm.updatable" placeholder="请选择">
                                <el-option label="0" value="0"> </el-option>
                                <el-option label="1" value="1"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="disable">
                            <el-input v-model="$store.state.conProPertiesForm.disable"></el-input>
                        </el-form-item>
                        <el-form-item label="required">
                            <el-input v-model="$store.state.conProPertiesForm.required"></el-input>
                        </el-form-item>
                        <el-form-item label="查找窗口">
                            <el-input v-model="$store.state.conProPertiesForm.lookupwindow"></el-input>
                        </el-form-item>
                        <el-form-item label="带回属性">
                            <el-input v-model="$store.state.conProPertiesForm.lookupcolumn"></el-input>
                        </el-form-item>
                        <el-form-item label="returnback">
                            <el-input v-model="$store.state.conProPertiesForm.returnback"></el-input>
                        </el-form-item>
                        <el-form-item label="writeback">
                            <el-input v-model="$store.state.conProPertiesForm.writeback"></el-input>
                        </el-form-item>
                        <el-form-item label="分隔符">
                            <el-input v-model="$store.state.conProPertiesForm.separator"></el-input>
                        </el-form-item>
                        <el-form-item label="尺寸">
                            <el-select v-model="$store.state.conProPertiesForm.size" placeholder="请选择">
                                <el-option label="small" value="small"> </el-option>
                                <el-option label="medium" value="medium"> </el-option>
                                <el-option label="large" value="large"> </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="limit">
                            <el-input v-model="$store.state.conProPertiesForm.limit"></el-input>
                        </el-form-item>
                        <el-form-item label="chineseid">
                            <el-input v-model="$store.state.conProPertiesForm.chineseid"></el-input>
                        </el-form-item>
                        <el-form-item label="maxlength">
                            <el-input v-model="$store.state.conProPertiesForm.maxlength"></el-input>
                        </el-form-item>
                        <el-form-item label="colname">
                            <el-input v-model="$store.state.conProPertiesForm.colname"></el-input>
                        </el-form-item>
                        <el-form-item label="regex">
                            <el-input v-model="$store.state.conProPertiesForm.regex"></el-input>
                        </el-form-item>
                        <el-form-item label="param">
                            <el-input v-model="$store.state.param"></el-input>
                        </el-form-item>
                        <el-form-item label="multiple">
                            <el-input v-model="$store.state.multiple"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form> </el-form> -->
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.forms {
    height: calc(100% - 60px);
    overflow: auto;
}
</style>
