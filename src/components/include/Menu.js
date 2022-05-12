
import { useSelector } from "react-redux";
import { USER_TYPE } from "../../app/";
import { NavLink } from "react-router-dom";
import "../../style.css";

import { useDispatch } from "react-redux";
import { setUser } from "../../features/user";


export default function Menu() {

    //type -> admin or employee 
    const { type, username } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const logout = () => {

        dispatch(setUser({
            isLogged: false,
            userId: null,
            username: "",
            password: ""
        }));


    };


    let menu = null;


    
    if (type === USER_TYPE.EMPLOYEE)
        menu = ( 
            <>
                <NavLink
                    end={true}
                    to="/employee/annualLeaveRequest"
                    className={({ isActive }) => (isActive) ? "active-menu" : null}
                >Yeni İzin Talebi</NavLink>

                <NavLink
                    end={true}
                    to="/employee/annualLeaveRequests"
                    className={({ isActive }) => (isActive) ? "active-menu" : null}
                >İzin Taleplerim</NavLink>

                <a href="#" onClick={logout}>Çıkış Yap</a>
            </>
        );
    else if (type === USER_TYPE.ADMIN)
        menu = (
            <>
                <NavLink
                    end={true}
                    to="/admin/annualLeaveRequests"
                    className={({ isActive }) => (isActive) ? "active-menu" : null}
                >İzin Talepleri</NavLink>

                <a href="#" onClick={logout}>Çıkış Yap</a>
            </>
        );
    else
        return (
            <p>Bir hata meydana geldi...</p>
        );




    return (
        <header>
            <div className="header-info">
                <p className="menu-welcome">Hoşgeldiniz, {username}</p>
                <small style={{fontSize: "10px", color: "#ff0000", fontStyle: "italic"}}>{(type === 0) ? "[ADMIN]" : "[PERSONEL]"}</small>
            </div>
            <nav className="menu">
                {menu}
            </nav>
        </header>
    );


}
