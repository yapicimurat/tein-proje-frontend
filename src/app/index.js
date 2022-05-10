/*
BURADA REQUEST YAPILACAK BASE_URL VB. YAPILAR BULUNACAKTIR....
*/

//COMPONENTS

import Login from "../components/login/Login";
import {default as AdminIndex} from "../components/admin/";
import {default as AdminAnnualLeaveRequests} from "../components/admin/annualLeaveRequest/AnnualLeaveRequests";
import {default as AdminAnnualLeaveRequestDetail} from "../components/admin/annualLeaveRequest/AnnualLeaveRequests";

import {default as EmployeeIndex} from "../components/employee/";
import {default as EmployeeAnnualLeaveRequest} from "../components/employee/annualLeaveRequest/AnnualLeaveRequest";
import {default as EmployeeAnnualLeaveRequests} from "../components/employee/annualLeaveRequest/AnnualLeaveRequests";
import {default as EmployeeAnnualLeaveRequestDetail} from "../components/employee/annualLeaveRequest/AnnualLeaveRequests";
//END COMPONENTS

const USER_TYPE = {
    ADMIN: 0,
    EMPLOYEE: 1
};


const CONFIG = {
    BASE_URL: "https://localhost:8081/",
    API_PATHS: null,
    ROUTES: [
        {
            path: "/", // hem adminin hemde personelin giris yapabilecegi login sayfasi (eger giris yapildiysa gerekli index'e yonlendirme yapar)
            component: <Login/>,
            needAuth: true,
            exact: true
        },
        {
            path: "/login", // -> hem adminin hemde personelin giris yapabilecegi login sayfasi (eger giris yapildiysa gerekli index'e yonlendirme yapar)
            component: <Login/>,
            needAuth: true,
            exact: true
        },
        {
            path: "/admin", // -> admin homepage goturur
            component: <AdminIndex/>,
            needAuth: true,
            negativeComponent: <Login/>,
            exact: true
        },
        {
            path: "/admin/annualLeaveRequests", // -> adminin personeller tarafindan yapilan izin isteklerinin listesini gordugu sayfa
            component: <AdminAnnualLeaveRequests/>,
            needAuth: true,
            negativeComponent: <Login/>, // giris yapili degilse yonlendirilecek component,
            exact: true
        },
        {
            path: "/admin/annualLeaveRequestDetail", // -> adminin personeller tarafindan yapilan izin isteklerinin listesini gordugu sayfa
            component: <AdminAnnualLeaveRequestDetail/>,
            needAuth: true,
            negativeComponent: <Login/>, // giris yapili degilse yonlendirilecek component,
            exact: true
        },
        {
            path: "/employee", 
            component: <EmployeeIndex/>,
            needAuth: true,
            negativeComponent: <Login/>, // giris yapili degilse yonlendirilecek component,
            exact: true
        },
        {
            path: "/employee/annualLeaveRequest", // -> personel'in izin talep yaptigi yer
            component: <EmployeeAnnualLeaveRequest/>,
            needAuth: true,
            negativeComponent: <Login/>, // giris yapili degilse yonlendirilecek component,
            exact: true
        },
        {
            path: "/employee/annualLeaveRequests", // -> personel'in izin talep yaptigi yer
            component: <EmployeeAnnualLeaveRequests/>,
            needAuth: true,
            negativeComponent: <Login/>, // giris yapili degilse yonlendirilecek component
        },
        {
            path: "/employee/annualLeaveRequestDetail",
            component: <EmployeeAnnualLeaveRequestDetail/>,
            needAuth: true,
            negativeComponent: <Login/>, // giris yapili degilse yonlendirilecek component,
            exact: true
        }

    ]
}


export default CONFIG;

export {
    USER_TYPE
};