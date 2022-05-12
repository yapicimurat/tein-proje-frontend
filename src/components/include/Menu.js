


import { useSelector } from "react-redux";
import { USER_TYPE } from "../../app/";
import { NavLink } from "react-router-dom";
import "../../style.css";

export default function Menu() {

    //type -> admin or employee 
    const type = useSelector(state => state.userReducer.type);


    if (type == USER_TYPE.ADMIN) {
        return (
            <header>
                <div className="header-info">
                    <p>Hoşgeldiniz, Murat YAPICI</p>
                </div>
                <nav className="menu">
                    {/* <div></div> */}

                    <a href="#">İzin Talepleri</a>
                    <a href="#">Çıkış Yap</a>
                </nav>
            </header>
        );

    } else if (type == USER_TYPE.EMPLOYEE) {
        return (
            <header>
                <div className="header-info">
                    <p>Hoşgeldiniz, Murat YAPICI</p>
                </div>
                <nav className="menu">
                    <NavLink
                        end={true}
                        to="/employee/annualLeaveRequest"
                        className={({isActive}) => (isActive) ? "active-menu" : null}
                    >Yeni İzin Talebi</NavLink>

                    <NavLink
                        end={true}
                        to="/employee/annualLeaveRequests"
                        className={({isActive}) => (isActive) ? "active-menu" : null}
                    >İzin Taleplerim</NavLink>

                    <NavLink
                        end
                        to="/employee/sdfdf"
                    >Çıkış Yap</NavLink>

                </nav>
            </header>
        );

    } else {
        return (
            <p>Bir hata meydana geldi...</p>
        );
    }




}
