const basicComponents = [
    {
        icon: "icon-title",
        name: "标题",
        uitype: "title",
        default: {
            size: "normal"
        }
    },
    {
        icon: "icon-label",
        name: "描述文本",
        uitype: "label"
    },
    {
        icon: "icon-input",
        name: "单行文本",
        uitype: "input"
    },
    {
        icon: "icon-textarea",
        name: "多行文本",
        uitype: "textarea"
    },
    {
        icon: "icon-select",
        name: "下拉选择器",
        uitype: "select"
    },
    {
        icon: "icon-radio",
        name: "单选框",
        uitype: "radio"
    },
    {
        icon: "icon-checkbox",
        name: "多选框",
        uitype: "checkbox"
    },
    {
        icon: "icon-cascader",
        name: "级联选择器",
        uitype: "cascader"
    },
    {
        icon: "icon-upload",
        name: "上传文件",
        uitype: "upload"
    },
    {
        icon: "icon-date",
        name: "日期选择器",
        uitype: "datepicker"
    },
    {
        icon: "icon-time-select",
        name: "时间选择器",
        uitype: "timepicker"
    },
    {
        icon: "icon-mulitem",
        name: "多个行内输入框",
        uitype: "mulitem"
    },
    {
        icon: "icon-inner_table",
        name: "行内多输入",
        uitype: "inner_table"
    },
    {
        icon: "icon-progress",
        name: "进度条",
        uitype: "progress"
    }
];

const buttons = [
    {
        name: "按钮"
    }
];

/*
    默认数据结构
*/
const formDataInit = {
    sys_window: {
        data: {
            main: {
                items: [[]],
                meta: [{}]
            },
            meta: {},
            tabs: {
                meta: [],
                items: []
            }
        }
    },
    tabs: {
        sys_button: []
    }
};
export { basicComponents, formDataInit, buttons };
