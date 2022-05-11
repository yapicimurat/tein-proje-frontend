import "../../style.css";

export default function Login(){

    return (
        <>
            <h1>Sisteme Hoşgeldiniz</h1>
            <div className="login-panel">
                <div className="login-head">
                    <div className="login-menu login-menu-active">
                        <a href="#">ADMIN</a>
                    </div>
                    <div className="login-menu">
                        <a href="#">PERSONEL</a>

                    </div>
                </div>
                <div className="login-body">
                    <label for="username" className="form-label">Kullanıcı adı</label>
                    <input id="username" name="username" type="text" className="form-input"/>

                    <label for="password" className="form-label">Parola</label>
                    <input id="password" name="password" type="text" className="form-input"/>

                    <button className="login-button">Sisteme giriş yap</button>
                </div>
                <div className="login-footer">
                    <p>Tein Yazılım Staj Test Projesi - muratyapiicii@gmail.com</p>
                </div>
            </div>
        </>
        
    );
}