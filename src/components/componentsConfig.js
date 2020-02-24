/*
        icon: "icon-input",
        name: "input",
        comType: "input",
        这三个为系统使用字段
*/

let form = {
    id: "属性名",
    label: "",
    type: "string",
    uitype: "",
    lookup: "",
    default: "",
    visible: "",
    updatable: "",
    required: "",
    lookupwindow: "",
    lookupcolumn: "",
    returnback: "",
    disable: "",
    writeback: "",
    separator: "",
    size: "",
    limit: "",
    uicontent: "",
    chineseid: "",
    maxlength: "",
    colname: "",
    regex: "",
    param: "",
    multiple: "",
    placeholder: ""
};

let cascaderExOps = [
    {
        value: "zhinan",
        label: "指南",
        children: [
            {
                value: "shejiyuanze",
                label: "设计原则",
                children: [
                    {
                        value: "yizhi",
                        label: "一致"
                    },
                    {
                        value: "fankui",
                        label: "反馈"
                    },
                    {
                        value: "xiaolv",
                        label: "效率"
                    },
                    {
                        value: "kekong",
                        label: "可控"
                    }
                ]
            },
            {
                value: "daohang",
                label: "导航",
                children: [
                    {
                        value: "cexiangdaohang",
                        label: "侧向导航"
                    },
                    {
                        value: "dingbudaohang",
                        label: "顶部导航"
                    }
                ]
            }
        ]
    },
    {
        value: "zujian",
        label: "组件",
        children: [
            {
                value: "basic",
                label: "Basic",
                children: [
                    {
                        value: "layout",
                        label: "Layout 布局"
                    },
                    {
                        value: "color",
                        label: "Color 色彩"
                    },
                    {
                        value: "typography",
                        label: "Typography 字体"
                    },
                    {
                        value: "icon",
                        label: "Icon 图标"
                    },
                    {
                        value: "button",
                        label: "Button 按钮"
                    }
                ]
            },
            {
                value: "form",
                label: "Form",
                children: [
                    {
                        value: "radio",
                        label: "Radio 单选框"
                    },
                    {
                        value: "checkbox",
                        label: "Checkbox 多选框"
                    },
                    {
                        value: "input",
                        label: "Input 输入框"
                    },
                    {
                        value: "input-number",
                        label: "InputNumber 计数器"
                    },
                    {
                        value: "select",
                        label: "Select 选择器"
                    },
                    {
                        value: "cascader",
                        label: "Cascader 级联选择器"
                    },
                    {
                        value: "switch",
                        label: "Switch 开关"
                    },
                    {
                        value: "slider",
                        label: "Slider 滑块"
                    },
                    {
                        value: "time-picker",
                        label: "TimePicker 时间选择器"
                    },
                    {
                        value: "date-picker",
                        label: "DatePicker 日期选择器"
                    },
                    {
                        value: "datetime-picker",
                        label: "DateTimePicker 日期时间选择器"
                    },
                    {
                        value: "upload",
                        label: "Upload 上传"
                    },
                    {
                        value: "rate",
                        label: "Rate 评分"
                    },
                    {
                        value: "form",
                        label: "Form 表单"
                    }
                ]
            },
            {
                value: "data",
                label: "Data",
                children: [
                    {
                        value: "table",
                        label: "Table 表格"
                    },
                    {
                        value: "tag",
                        label: "Tag 标签"
                    },
                    {
                        value: "progress",
                        label: "Progress 进度条"
                    },
                    {
                        value: "tree",
                        label: "Tree 树形控件"
                    },
                    {
                        value: "pagination",
                        label: "Pagination 分页"
                    },
                    {
                        value: "badge",
                        label: "Badge 标记"
                    }
                ]
            },
            {
                value: "notice",
                label: "Notice",
                children: [
                    {
                        value: "alert",
                        label: "Alert 警告"
                    },
                    {
                        value: "loading",
                        label: "Loading 加载"
                    },
                    {
                        value: "message",
                        label: "Message 消息提示"
                    },
                    {
                        value: "message-box",
                        label: "MessageBox 弹框"
                    },
                    {
                        value: "notification",
                        label: "Notification 通知"
                    }
                ]
            },
            {
                value: "navigation",
                label: "Navigation",
                children: [
                    {
                        value: "menu",
                        label: "NavMenu 导航菜单"
                    },
                    {
                        value: "tabs",
                        label: "Tabs 标签页"
                    },
                    {
                        value: "breadcrumb",
                        label: "Breadcrumb 面包屑"
                    },
                    {
                        value: "dropdown",
                        label: "Dropdown 下拉菜单"
                    },
                    {
                        value: "steps",
                        label: "Steps 步骤条"
                    }
                ]
            },
            {
                value: "others",
                label: "Others",
                children: [
                    {
                        value: "dialog",
                        label: "Dialog 对话框"
                    },
                    {
                        value: "tooltip",
                        label: "Tooltip 文字提示"
                    },
                    {
                        value: "popover",
                        label: "Popover 弹出框"
                    },
                    {
                        value: "card",
                        label: "Card 卡片"
                    },
                    {
                        value: "carousel",
                        label: "Carousel 走马灯"
                    },
                    {
                        value: "collapse",
                        label: "Collapse 折叠面板"
                    }
                ]
            }
        ]
    },
    {
        value: "ziyuan",
        label: "资源",
        children: [
            {
                value: "axure",
                label: "Axure Components"
            },
            {
                value: "sketch",
                label: "Sketch Templates"
            },
            {
                value: "jiaohu",
                label: "组件交互文档"
            }
        ]
    }
];

const basicComponents = [
    {
        icon: "icon-title",
        name: "标题",
        comType: "title",
        form: {
            label: "标题",
            uitype: "title"
        }
    },
    {
        icon: "icon-input",
        name: "单行文本",
        comType: "input",
        form: {
            label: "单行文本",
            uitype: "input"
        }
    },
    {
        icon: "icon-textarea",
        name: "多行文本",
        comType: "textarea",
        form: {
            label: "多行文本",
            uitype: "textarea"
        }
    },
    {
        icon: "icon-select",
        name: "下拉选择",
        comType: "select",
        form: {
            label: "下拉选择",
            uitype: "select"
        }
    },
    {
        icon: "icon-radio",
        name: "单选",
        comType: "radio",
        form: {
            label: "单选",
            uitype: "radio"
        }
    },
    {
        icon: "icon-checkbox",
        name: "多选",
        comType: "checkbox",
        form: {
            label: "多选",
            uitype: "checkbox",
            select: []
        }
    },
    {
        icon: "icon-cascader",
        name: "级联选择",
        comType: "cascader",
        form: {
            label: "级联选择",
            uitype: "cascader"
        },
        ex: {
            value: [],
            options: cascaderExOps
        }
    },
    {
        icon: "icon-upload",
        name: "上传文件",
        comType: "upload",
        form: {
            label: "上传文件",
            uitype: "cascader"
        },
        ex: {
            imageUrl: ""
        }
    },
    {
        icon: "icon-date",
        name: "日期选择",
        comType: "datepicker",
        form: {
            type: "date",
            label: "时间选择",
            uitype: "datepicker"
        }
    }
];

basicComponents.forEach(item => {
    item.form = { ...form, ...item.form };
});

export { basicComponents, form as basicform };
