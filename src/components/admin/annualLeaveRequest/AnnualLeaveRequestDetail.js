
// import SectionContent from "../../SectionContent"
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import CONFIG, {ANNUAL_LEAVE_REQUEST_STATE_STYLES, ANNUAL_LEAVE_REQUEST_STATE_TR} from "../../../app/";
// import "../../../style.css";
// import { dateLocaleFormatter } from "../../../app/helper";
// export default function AnnualLeaveRequests() {

//     const [annualLeaveRequests, setAnnualLeaveRequests] = useState([]);
//     const [isError, setIsError] = useState(false);

//     const userId = useSelector(state => state.userReducer.userId);

//     useEffect(() => {
//         axios.get(CONFIG.API_PATHS.EMPLOYEE.GET_ANNUAL_REQUEST_BY_EMPLOYEE_ID(userId))
//             .then(response => {
//                 const { error, message, data } = response.data;
//                 if (error) setIsError(true);
//                 else {
//                     setAnnualLeaveRequests(data);
//                 }

//             })
//             .catch(error => {
//                 if (error) setIsError(true);
//             });

//     },[]);


//     return <SectionContent content={
//         <>
//             <h2>Personellerin İzin Talepleri</h2>
//             <div className="table">
//                 <div className="table-head">
//                     <ul>
//                         <li>TARİH</li>
//                         <li>BAŞ. TARİHİ</li>
//                         <li>BİT. TARİHİ</li>
//                         <li>GÜN SAYISI</li>
//                         <li>DURUM</li>
//                     </ul>
//                 </div>

//                 <div className="table-body">
//                     {
//                         annualLeaveRequests.map((request, index) => {
//                             return (
//                                 <div key={index} className="table-row">
//                                     <ul>
//                                         <li>{dateLocaleFormatter(request.requestDate)}</li>
//                                         <li>{dateLocaleFormatter(request.startDate)}</li>
//                                         <li>{dateLocaleFormatter(request.endDate)}</li>
//                                         <li>{request.day}</li>
//                                         <li className={`state ${ANNUAL_LEAVE_REQUEST_STATE_STYLES[request.state]}`}>{ANNUAL_LEAVE_REQUEST_STATE_TR[request.state]}</li>
//                                     </ul>
//                                 </div>
//                             );
//                         })
//                    }

//                 </div>

//                 <div className="table-footer">

//                 </div>
//             </div>
//         </>

//     } />
// }