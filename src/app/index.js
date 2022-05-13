
//COMPONENTS
import Menu from "../components/include/Menu";
import Login from "../components/login/Login";
import { default as AdminAnnualLeaveRequests } from "../components/admin/annualLeaveRequest/AnnualLeaveRequests";
import { default as AdminAnnualLeaveRequestDetail } from "../components/admin/annualLeaveRequest/AnnualLeaveRequestDetail";

import { default as EmployeeAnnualLeaveRequest } from "../components/employee/annualLeaveRequest/AnnualLeaveRequest";
import { default as EmployeeAnnualLeaveRequests } from "../components/employee/annualLeaveRequest/AnnualLeaveRequests";
//END COMPONENTS

const USER_TYPE = {
    ADMIN: 0,
    EMPLOYEE: 1
};

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
    LOGIN: "/login",
    INDEX: "/",
    EMPLOYEE: {
        ANNUAL_LEAVE_REQUEST: "/annualLeaveRequest",
        ANNUAL_LEAVE_REQUESTS: "/annualLeaveRequests"
    },
    ADMIN: {
        ANNUAL_LEAVE_REQUESTS: "/annualLeaveRequest",
        ANNUAL_LEAVE_REQUEST_DETAIL: "/annualLeaveRequestDetail"
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
            POST_REQUEST: (type, username, password) => {
                return `${BASE_URL}annual_request/create/${type}/${username}/${password}`;
            }
        },
        ADMIN: {
            LOGIN: (username, password) => {
                return `${BASE_URL}admin/login/${username}/${password}`;
            },
            GET_ANNUAL_REQUESTS: () => {
                return `${BASE_URL}annual_request/`;
            },
            PUT_ANNUAL_REQUEST: () => {
                
            }
        }
    },
    ROUTES: [
        {
            path: "/",
            componentFunc: (type) => {
                if (type === USER_TYPE.ADMIN) {
                    return (
                        <>
                            <Menu /><AdminAnnualLeaveRequests />
                        </>
                    );
                }
                else if (type === USER_TYPE.EMPLOYEE) {
                    return (
                        <>
                            <Menu /><EmployeeAnnualLeaveRequests />
                        </>
                    );
                }
            },
            needAuth: true,
            negativeComponent: <Login />,
            exact: true
        },
        {
            path: "/login",
            component: <Login />,
            needAuth: false,
            exact: true
        },
        {
            path: "/annualLeaveRequests",
            componentFunc: (type) => {
                if (type === USER_TYPE.ADMIN) {
                    return (
                        <>
                            <Menu /><AdminAnnualLeaveRequests />
                        </>
                    );
                }
                else if (type === USER_TYPE.EMPLOYEE) {
                    return (
                        <>
                            <Menu /><EmployeeAnnualLeaveRequests />
                        </>
                    );
                }
            },
            needAuth: true,
            negativeComponent: <Login />,
            exact: true
        },
        {
            path: "/annualLeaveRequestDetail",
            component:
                <>
                    <Menu />
                    <AdminAnnualLeaveRequestDetail />
                </>,
            needAuth: true,
            negativeComponent: <Login />,
            exact: true
        },
        {
            path: "/annualLeaveRequest",
            component: <>
                <Menu /><EmployeeAnnualLeaveRequest />
            </>,
            needAuth: true,
            negativeComponent: <Login />,
            exact: true
        }

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