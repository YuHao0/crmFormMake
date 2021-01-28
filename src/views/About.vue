<template>
    <div>
        <crmFormMake ref="crmFormMake" :options="xJson" @getJson="formMakeData"></crmFormMake>
    </div>
</template>
<script>
import "../../dist/crm-form-make.css";
import crmFormMake from "../../dist/crm-form-make.umd.js";
export default {
    components: {
        crmFormMake
    },
    computed: {
        getInitData() {
            return this.data;
        }
    },
    data() {
        return {
            xJson: {
                tabs: {
                    sys_button: [
                        {
                            code: "refresh",
                            check_action: null,
                            modify_user: 947,
                            validate_flag: null,
                            modify_time: "2021-01-28 17:53:33",
                            icon: null,
                            show_button: null,
                            audit_flag: 0,
                            seq_num: null,
                            permission_flag: null,
                            position_left: 1,
                            param: null,
                            win_id: 272,
                            tip: null,
                            id: 1773,
                            event: "refresh",
                            delete_flag: 0,
                            has_required: 0,
                            create_time: "2020-12-31 19:03:15",
                            rw_flag: 1,
                            tranfer_winid: null,
                            returnback: null,
                            name: "刷新",
                            create_user: 3350,
                            lookupcolumn: null
                        },
                        {
                            code: " modify",
                            check_action: null,
                            modify_user: 947,
                            validate_flag: null,
                            modify_time: "2021-01-28 17:53:33",
                            icon: null,
                            show_button: null,
                            audit_flag: 0,
                            seq_num: null,
                            permission_flag: null,
                            position_left: 1,
                            param: null,
                            win_id: 272,
                            tip: null,
                            id: 1774,
                            event: "modify",
                            delete_flag: 0,
                            has_required: 0,
                            create_time: "2020-12-31 19:03:15",
                            rw_flag: 1,
                            tranfer_winid: null,
                            returnback: null,
                            name: "修改",
                            create_user: 3350,
                            lookupcolumn: null
                        }
                    ]
                },
                sys_window: {
                    template: "bill",
                    code: "crm_feature_detail",
                    data:
                        '{"main":{"items":[[{"label":"需求Idddd","uitype":"input","type":"number","id":"id","disable":"1"},{"label":"提交人","uitype":"input","type":"string","default":"$username","disable":"1","id":"submit_user"},{"label":"提交人Id","uitype":"input","id":"submit_userId","type":"string","visible":"0","default":"$userid","disable":"1"},{"label":"优先级","uitype":"select","id":"priority","type":"string","lookup":"/sys/lookup/codes/priority_level"},{"label":"提交时间","uitype":"datepicker","id":"submit_time","type":"date","disable":"1"},{"label":"需求名称","uitype":"input","id":"demand_name","type":"string"},{"label":"任务完成人","uitype":"input","regex":"task_complete_person","id":"task_complete_person","visible":"0","type":"number"},{"label":"任务完成人","uitype":"input","id":"task_complete_person_name","type":"string","updatable":"0","lookupwindow":"152"},{"label":"需求描述","uitype":"textarea","id":"demand_descript","required":"1","size":"large","rows":"6","type":"string"},{"label":"附件","uitype":"upload","id":"photo_url","type":"string"}]],"meta":[{"title":"产品需求修改","type":"form","sqlselect":"SELECT\\n\\ta.*, fn_get_user_desc(a.task_complete_person) task_complete_person_name,fn_get_user_desc(a.submit_userId) user,\\n        (select count(1) from story b where b.header_id = a.id)detail_count\\nFROM\\n\\tfeature a\\n where  a.id = {0}","id":"feature","sqlinit":""}]},"meta":{"name":"需求详情","uitype":"bill","colpk":["id"],"url":"sys/window/common_detail","busitype":"1"},"tabs":{"meta":[{"title":"需求明细","id":"story","table":"","type":"table","sqlinit":"select * from story WHERE header_id = {0} AND delete_flag =0","colfk":["header_id"],"autodeleteby":"story_name"},{{$bpm_config_2item_metas}}],"items":[[{"label":"id","uitype":"input","id":"id","type":"number","visible":"0"},{"label":"header_id","uitype":"input","id":"header_id","type":"number","visible":"0"},{"label":"需求明细","uitype":"label","id":"story_name","visible":"","type":"string"}],{{$bpm_config_2item_items}}]}}',
                    table_bind: null,
                    modify_user: 947,
                    modify_time: "2021-01-28 17:53:33",
                    icon: null,
                    description: null,
                    audit_flag: 0,
                    creator_bind: null,
                    id: 272,
                    write_permission: null,
                    delete_flag: 0,
                    import_config: null,
                    create_time: "2020-12-31 19:03:15",
                    model_id: 11,
                    ref_winid: null,
                    data_source: "crm",
                    select_bind: null,
                    busi_type: 9,
                    name: "培训详情",
                    pk_bind: null,
                    cascade_bind: null,
                    create_user: 3350,
                    hard_delete: 0
                }
            }
        };
    },
    mounted() {},
    methods: {
        formMakeData(data) {
            this.$emit("formMakeData", data);
        }
    }
};
</script>
