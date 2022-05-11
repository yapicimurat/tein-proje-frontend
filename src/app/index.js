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


const CONFIG = {
    BASE_URL: "https://localhost:8081/",
    API_PATHS: null,
    ROUTES: [
        {
            path: "/", // hem adminin hemde personelin giris yapabilecegi login sayfasi (eger giris yapildiysa gerekli index'e yonlendirme yapar)
            component: <Login />,
            needAuth: true,
            exact: true
        },
        {
            path: "/login", // -> hem adminin hemde personelin giris yapabilecegi login sayfasi (eger giris yapildiysa gerekli index'e yonlendirme yapar)
            component: <Login />,
            needAuth: true,
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
    USER_TYPE
};