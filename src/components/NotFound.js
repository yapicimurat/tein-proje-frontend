import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <div className="not-found-page">
                <h1>Sayfa bulunamad─▒..</h1>
                <a href="#" onClick={() => {
                    navigate("/");
                }} >Anasayfa'ya git...</a>
            </div>
        </>
    );
}