export default {
    apiUrlList: {
        user: {
            get: "/api/sys/current_user",
            goLogin: {
                url: "/saml2/auth?sso",
                option: { method: "get" }
            },
            business: "/api/hrEmployee/getBusinessSeries",
            // logout: "/saml2/auth/?slo",
            logout: {
                url: "/api/sys/logout",
                option: { method: "post" }
            },
            department: "/api/app/user/businessLine/info",
            setDefaultDepartment: {
                url: "/api/app/user/save/defBusinessLine",
                option: { method: "post" }
            },
            role: {
                url: "/api/app/user/getDingDingRole",
                option: { method: "post" }
            },
            custLine: "/api/crmdrugstore/authorityBussinessList"
        },
        company: {
            add: {
                url: "/api/crmdrugstore/hzParties/OBDetail/add",
                option: { method: "post" }
            },
            addBusiness: {
                url: "/api/crmdrugstore/hzPartiesExts/BSDetail/add",
                option: { method: "post" }
            },
            update: {
                url: "/api/crmdrugstore/hzParties/OBDetail/update",
                option: { method: "post" }
            },
            updateBusiness: {
                url: "/api/crmdrugstore/hzPartiesExts/BSDetail/update",
                option: { method: "post" }
            },
            detail: "/api/crmdrugstore/hzPartiesAndExtsAll",
            detailBusiness: {
                url: "/api/crmdrugstore/hzPartiesExts/BSDetail/info",
                option: { method: "post" }
            },
            enableStatus: "/api/sys/lookup/codes/crm_drugstore_enable_status",
            coopStatus: "/api/sys/lookup/codes/crm_drugstore_coop_status",
            seaType: "/api/sys/lookup/codes/crm_drugstore_sea_type",
            orgType: "/api/sys/lookup/codes/crm_drugstore_org_typed",
            type: "/api/sys/lookup/codes/crm_drugstore_cust_type", // 客户类型
            release: {
                url: "/api/crmdrugstore/batchupdate_form/3",
                option: { method: "post" }
            },
            pickUp: {
                url: "/api/crmdrugstore/batchupdate_form/1",
                option: { method: "post" }
            }
        },
        drugstore: {
            add: {
                url: "/api/crmdrugstore/hzPartySites/main/save",
                option: { method: "post" }
            },
            employeecenter: "/api/hrEmployee/subFlag",
            addBusiness: {
                url: "/api/crmdrugstore/hzPartySites/business/save",
                option: { method: "post" }
            },
            detail: "/api/crmdrugstore/hzPartySites/main/query",
            detailBusiness: "/api/crmdrugstore/hzPartySites/business/query",
            release: {
                url: "/api/crmdrugstore/batchupdate_form/4",
                option: { method: "post" }
            },
            pickUp: {
                url: "/api/crmdrugstore/batchupdate_form/2",
                option: { method: "post" }
            },
            kpCode: "/api/sys/lookup/codes/crm_drugstore_kp_type",
            type: "/api/sys/lookup/codes/crm_drugstore_store_type",
            channelList: "/api/sys/lookup/codes/crm_drugstore_channels?prescripte_channels"
        },
        contract: {
            detail: "/api/sys/window/common_detail/113",
            detailSale: "/api/sys/window/common_detail/255",
            detailCoasaas: "/api/sys/window/common_detail/266",
            serviceTypeSale: "/api/sys/lookup/codes/open_status?service1_flag",
            packageType: "/api/sys/lookup/codes/crm_drugstore_package_types",
            serviceStatus: "/api/sys/lookup/codes/crm_drugstore_service_status",
            serviceType: "/api/sys/lookup/codes/crm_drugstore_server_type",
            // 特批类型
            specialType: "/api/sys/lookup/codes/crm_drugstore_special_type",
            specialTypeCoasaas: "/api/sys/lookup/codes/crm_drugstore_special_ctype",
            // 分佣比例
            consortium: "/api/sys/lookup/codes/crm_drugstore_consortium",
            // 结算方式
            clearWay: "/api/sys/lookup/codes/crm_drugstore_clear_way",
            // 智云合作方式 商盟saas
            coopWay: "/api/sys/lookup/codes/crm_durgstore_coop_way",
            companyServerType: "/api/sys/lookup/codes/crm_drugstore_server_typed",
            type: "/api/sys/lookup/codes/crm_drugstore_contract_type?contract_type",
            payWay: "/api/sys/lookup/codes/crm_drugstore_pay_way?pay_way",
            connectWay: "/api/sys/lookup/codes/crm_drugstore_consulte_way",
            tradeInfo: "/api/crmdrugstore//payment/info",
            sign: "/api/electronicSignature/enterprise/fistStepSign",
            downFile: "/api/electronicSignature/loadContract",
            openFile: "/api/electronicSignature/lookUpContract",
            getCode: {
                url: "/api/sys/sequence/get",
                option: { method: "post" }
            },
            addPay: {
                url: "/api/crmdrugstore/create/trade",
                option: { method: "post" }
            },
            confirmPay: {
                url: "/api/crmdrugstore/payment/confirm",
                option: { method: "post" }
            },
            updatePay: {
                url: "/api/crmdrugstore/update/trade",
                option: { method: "post" }
            },
            cancelPay: "/api/crmdrugstore/payment/cancel"
        },
        agreement: {
            detail: "/api/sys/window/common_detail/209"
        },
        visit: {
            contact: "/api/sys/lookup/basetypesubinfo/hz_party_contact_info",
            way: "/api/sys/lookup/codes/crm_drugstore_visit_way",
            wayd: "/api/sys/lookup/codes/crm_drugstore_visit_wayd",
            detail: "/api/sys/window/common_detail/112",
            content: "/api/sys/lookup/codes/crm_drugstore_visit_content",
            plan: "/api/sys/lookup/codes/crm_drugstore_follow_plan?follow_pland",
            will: "/api/sys/lookup/codes/crm_drugstore_client_will?client_will",
            erp: "/sys/lookup/codes/crm_drugstore_erp_platform"
        },
        home: {
            count: {
                url: "/api/olap/getAggregateData",
                option: { method: "post" }
            },
            warn: "/api/app/index/warn",
            week: {
                url: "/api/olap/getCurrentWeek",
                option: { method: "get" }
            },
            workOrder: {
                url: "/api/sys/bpm/crm/indexForNum",
                option: { method: "get" }
            },
            all: {
                url: "/api/app/index",
                option: { method: "get" }
            }
        },
        statistics: {
            personLevel: {
                url: "/api/sys/currentPersonLevel",
                option: { method: "post" }
            }
        },
        common: {
            datahub: {
                url: "/report/get_report_data",
                option: { method: "post" }
            },
            queryAmount: {
                url: "/api/crmdrugstore/queryRefundAvailableAmount",
                option: { method: "post" }
            },
            regionMatch: {
                url: "/report/open/crm_region_match",
                option: { method: "post" }
            },
            menu: "/api/sys/menu",
            sys: "/api/sys/window/common_init",
            add: "/api/sys/window/common_detail",
            code: "/api/sys/lookup/codes/yesno",
            config: "/api/sys/window/window_config",
            upload: "/api/sys/common/upload/",
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
