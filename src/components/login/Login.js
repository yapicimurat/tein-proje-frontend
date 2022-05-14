import "../../style.css";
import { USER_TYPE } from "../../app/";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import clsx from "clsx";
import loadingGifURL from "../../assets/img/loading.gif";
import CONFIG, { ROUTE_PATHS } from "../../app/";

import { useDispatch } from "react-redux";
import { setUser } from "../../features/user";
import axios from "axios";


export default function Login() {
    const [loginType, setLoginType] = useState(USER_TYPE.EMPLOYEE);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginTypeHandler = (type) => {
        setLoginType(type);
    };

    const changeHandler = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    };

    const login = (e) => {
        e.preventDefault();
        if (username === "" || password === "") {
            alert("Lütfen alanları eksiksiz giriniz.");
        } else {
            setLoading(true);
            axios.get((loginType === USER_TYPE.EMPLOYEE) ? CONFIG.API_PATHS.EMPLOYEE.LOGIN(username, password) : CONFIG.API_PATHS.ADMIN.LOGIN(username, password))
                .then(response => {
                    setLoading(false);
                    const data = response.data;
                    alert(data.message);
                    if (data.data !== null) {
                        //giris basarili...
                        navigate(ROUTE_PATHS.INDEX);
                        
                        dispatch(setUser({
                            type: loginType,
                            userId: data.data.id,
                            username: data.data.username,
                            password: data.data.password,
                            isLogged: true
                        }));
                    }
                })
                .catch(error => {
                    setLoading(false);
                    alert("Bir hata meydana geldi. Lütfen daha sonra tekrar deneyiniz.");
                });

        }
    };

    return (
        <>
            <h1 style={{ marginTop: "20px", display: "block", width: "fit-content", margin: "0 auto" }}>Sisteme Hoşgeldiniz</h1>
            <div className="login-panel">
                <div className="login-head">
                    <div className={clsx({ "login-menu": true, "login-menu-active": (loginType === USER_TYPE.EMPLOYEE) })}>
                        <a onClick={() => { loginTypeHandler(USER_TYPE.EMPLOYEE) }}>PERSONEL</a>
                    </div>
                    <div className={clsx({ "login-menu": true, "login-menu-active": (loginType === USER_TYPE.ADMIN) })}>
                        <a onClick={() => { loginTypeHandler(USER_TYPE.ADMIN) }}>ADMIN</a>

                    </div>
                </div>
                <div className="login-body">
                    <form onSubmit={login}>
                        <label className="form-label">Kullanıcı adı</label>
                        <input id="username" name="username" type="text" value={username} onChange={changeHandler} className="form-input" />

                        <label className="form-label">Parola</label>
                        <input id="password" name="password" type="password" value={password} onChange={changeHandler} className="form-input" />

                        <button type="submit" className="login-button"> {(loading) ? <img className="loading" src={loadingGifURL} /> : null} giriş yap</button>
                    </form>

                </div>
                <div className="login-footer">
                    <p>Tein Yazılım Staj Test Projesi - muratyapiicii@gmail.com</p>
                </div>
            </div>
        </>

    );
}