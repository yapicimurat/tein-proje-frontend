


import { useSelector } from "react-redux";
import { USER_TYPE } from "../../app/";

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
                    <a href="#" className="active-menu">Yeni İzin Talebi</a>
                    <a href="#">İzin Taleplerim</a>
                    <a href="#">Çıkış Yap</a>
                </nav>
            </header>
        );

    } else {
        return (
            <p>Bir hata meydana geldi...</p>
        );
    }




}
