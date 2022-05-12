/*
BURADA REQUEST YAPILACAK BASE_URL VB. YAPILAR BULUNACAKTIR....
*/

//COMPONENTS
import Menu from "../components/include/Menu";
import Login from "../components/login/Login";
import { default as AdminIndex } from "../components/admin/";
import { default as AdminAnnualLeaveRequests } from "../components/admin/annualLeaveRequest/AnnualLeaveRequests";
import { default as AdminAnnualLeaveRequestDetail } from "../components/admin/annualLeaveRequest/AnnualLeaveRequests";

import { default as EmployeeIndex } from "../components/employee/";
import { default as EmployeeAnnualLeaveRequest } from "../components/employee/annualLeaveRequest/AnnualLeaveRequest";
import { default as EmployeeAnnualLeaveRequests } from "../components/employee/annualLeaveRequest/AnnualLeaveRequests";
import { default as EmployeeAnnualLeaveRequestDetail } from "../components/employee/annualLeaveRequest/AnnualLeaveRequestDetail";
//END COMPONENTS

const USER_TYPE = {
    ADMIN: 0,
    EMPLOYEE: 1
};

// private enum State{
//     WAITING,
//     ACCEPTED,
//     DENIED
// }

const ANNUAL_LEAVE_REQUEST_STATE_STYLES = {
    "WAITING": "state-waiting",
    "ACCEPTED": "state-accepted",
    "DENIED": "state-denied"
}

const ANNUAL_LEAVE_REQUEST_STATE_TR = {
    "WAITING": "ONAY BEKLİYOR",
    "ACCEPTED": "ONAYLANDI",
    "DENIED": "REDDEDİLDİ"
}


const ROUTE_PATHS = {
    LOGIN: "/",
    EMPLOYEE: {
        INDEX: "/employee",
        GET_ANNUAL_LEAVE_REQUEST: "/employee/annualLeaveRequest",
        GET_ANNUAL_LEAVE_REQUESTS: "/employee/annualLeaveRequests",
        GET_ANNUAL_LEAVE_REQUEST_DETAIL: "/employee/annualLeaveRequestDetail",
        CREATE_ANNUAL_LEAVE_REQUEST: "employee/annualLeaveRequest"
    },
    ADMIN:{
        INDEX: "/admin",
        //DEVAMINI YAZICAM
    }
};

const BASE_URL = "http://localhost:8081/";

const CONFIG = {
    API_PATHS: {
        EMPLOYEE: {
            LOGIN: (username, password) => {
                return `${BASE_URL}employee/login/${username}/${password}`;
            },
            GET_ANNUAL_REQUEST_BY_EMPLOYEE_ID: (employeeId) => {
                return `${BASE_URL}annual_request/getAllByEmployeeId/${employeeId}/`;
            },
            GET_ANNUAL_REQUESTS: () => {
                return `${BASE_URL}annual_request/`;
            }
        }
    },
    ROUTES: [
        {
            path: "/", // hem adminin hemde personelin giris yapabilecegi login sayfasi (eger giris yapildiysa gerekli index'e yonlendirme yapar)
            component: <Login />,
            needAuth: false,
            exact: true
        },
        {
            path: "/login", // -> hem adminin hemde personelin giris yapabilecegi login sayfasi (eger giris yapildiysa gerekli index'e yonlendirme yapar)
            component: <Login />,
            needAuth: false,
            exact: true
        },
        {
            path: "/admin", // -> admin homepage goturur
            component: <>
                <Menu /><AdminIndex />
            </>,
            needAuth: true,
            negativeComponent: <Login />,
            exact: true
        },
        {
            path: "/admin/annualLeaveRequests", // -> adminin personeller tarafindan yapilan izin isteklerinin listesini gordugu sayfa
            component: <>
                <Menu /><AdminAnnualLeaveRequests />
            </>,
            needAuth: true,
            negativeComponent: <Login />, // giris yapili degilse yonlendirilecek component,
            exact: true
        },
        {
            path: "/admin/annualLeaveRequestDetail", // -> adminin personeller tarafindan yapilan izin isteklerinin listesini gordugu sayfa
            component: <>
                <Menu /><AdminAnnualLeaveRequestDetail />
            </>,
            needAuth: true,
            negativeComponent: <Login />, // giris yapili degilse yonlendirilecek component,
            exact: true
        },
        {
            path: "/employee",
            component: <>
                <Menu /><EmployeeIndex />
            </>,
            needAuth: true,
            negativeComponent: <Login />, // giris yapili degilse yonlendirilecek component,
            exact: true
        },
        {
            path: "/employee/annualLeaveRequest", // -> personel'in izin talep yaptigi yer
            component: <>
                <Menu /><EmployeeAnnualLeaveRequest />
            </>,
            needAuth: true,
            negativeComponent: <Login />, // giris yapili degilse yonlendirilecek component,
            exact: true
        },
        {
            path: "/employee/annualLeaveRequests", // -> personel'in izin talep yaptigi yer
            component: <>
                <Menu /><EmployeeAnnualLeaveRequests />
            </>,
            needAuth: true,
            negativeComponent: <Login />, // giris yapili degilse yonlendirilecek component
        },
        {
            path: "/employee/annualLeaveRequestDetail",
            component: <>
                <Menu /><EmployeeAnnualLeaveRequestDetail />
            </>,
            needAuth: true,
            negativeComponent: <Login />, // giris yapili degilse yonlendirilecek component,
            exact: true
        }//SONRA NOT FOUND İÇİN BİR SAYFA VE YAPILANDIRMA EKLE....

    ]
}


export default CONFIG;

export {
    USER_TYPE,
    ROUTE_PATHS,
    BASE_URL,
    ANNUAL_LEAVE_REQUEST_STATE_STYLES,
    ANNUAL_LEAVE_REQUEST_STATE_TR
};