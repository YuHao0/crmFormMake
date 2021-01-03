export default {
    apiUrlList: {
        user: {
            get: {
                url: "/api/salesman/currentUser",
                option: { method: "get", host: "crm-health-api" }
            },
            buiness: {
                url: "/api/app/user/businessLine/info",
                option: { method: "get" }
            },
            logout: {
                url: "/api/sys/logout",
                option: { method: "post" }
            },
            role: {
                url: "/api/medicsale-crm/1.0/role_type",
                option: { method: "get", host: "apigw" }
            },
            personLevel: "/api/olap/currentPersonLevel",
            datahub: "/datahub/report/get_report_data",
            option: { method: "post", host: "crm-new" }
        },
        common: {
            init: "/api/sys/window/common_init",
            detail: {
                url: "/api/sys/window/common_detail",
                option: { method: "post" }
            },
            upload: "/api/sys/common/upload/",
            datahub: {
                url: "/datahub/report/get_report_data",
                option: { method: "post" }
            },
            queryAmount: {
                url: "/api/crmdrugstore/queryRefundAvailableAmount",
                option: { method: "post" }
            },
            regionMatch: {
                url: "/datahub/report/open/crm_region_match",
                option: { method: "post" }
            },
            menu: "/api/sys/menu",
            code: "/api/sys/lookup/codes/yesno",
            config: "/api/sys/window/window_config",
            submit: "/api/sys/bpm/submit",
            token: "/api/sys/get_token",
            region: "/api/sys/lookup/baseinfo_sublist/drugstore_region",
            structure: "/api/sys/lookup/baseinfo_sublist/hr_organization",
            delete: {
                url: "/api/sys/window/querylist_delete",
                option: { method: "delete" }
            }
        }
    },
    static: {
        upload: "/upload/upload_file.do"
    }
};
