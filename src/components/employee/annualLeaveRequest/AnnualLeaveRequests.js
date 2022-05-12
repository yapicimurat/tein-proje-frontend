
import SectionContent from "../../SectionContent"


import "../../../style.css";
export default function AnnualLeaveRequests() {

    return <SectionContent content={
        <>
            <h2>İzin Taleplerim</h2>
            <div className="table">
                <div className="table-head">
                    <ul>
                        <li>TARİH</li>
                        <li>BAŞ. TARİHİ</li>
                        <li>BİT. TARİHİ</li>
                        <li>GÜN SAYISI</li>
                        <li>DURUM</li>
                    </ul>
                </div>

                <div className="table-body">
                    <div className="table-row">
                        <ul>
                            <li>11.05.2022</li>
                            <li>11.05.2022</li>
                            <li>19.05.2022</li>
                            <li>8 Gün</li>
                            <li className="state state-waiting">ONAY BEKLİYOR</li>
                        </ul>
                    </div>
                    <div className="table-row">
                        <ul>
                            <li>11.05.2022</li>
                            <li>11.05.2022</li>
                            <li>19.05.2022</li>
                            <li>8 Gün</li>
                            <li className="state state-accepted">ONAYLANDI</li>
                        </ul>
                    </div>
                    <div className="table-row">
                        <ul>
                            <li>11.05.2022</li>
                            <li>11.05.2022</li>
                            <li>19.05.2022</li>
                            <li>8 Gün</li>
                            <li className="state state-waiting">ONAY BEKLİYOR</li>
                        </ul>
                    </div>
                    <div className="table-row">
                        <ul>
                            <li>11.05.2022</li>
                            <li>11.05.2022</li>
                            <li>19.05.2022</li>
                            <li>8 Gün</li>
                            <li className="state state-denied">REDDEDİLDİ</li>
                        </ul>
                    </div>
                    <div className="table-row">
                        <ul>
                            <li>11.05.2022</li>
                            <li>11.05.2022</li>
                            <li>19.05.2022</li>
                            <li>8 Gün</li>
                            <li className="state state-waiting">ONAY BEKLİYOR</li>
                        </ul>
                    </div>
                    <div className="table-row">
                        <ul>
                            <li>11.05.2022</li>
                            <li>11.05.2022</li>
                            <li>19.05.2022</li>
                            <li>8 Gün</li>
                            <li className="state state-accepted">ONAYLANDI</li>
                        </ul>
                    </div>
                    <div className="table-row">
                        <ul>
                            <li>11.05.2022</li>
                            <li>11.05.2022</li>
                            <li>19.05.2022</li>
                            <li>8 Gün</li>
                            <li className="state state-waiting">ONAY BEKLİYOR</li>
                        </ul>
                    </div>
                    <div className="table-row">
                        <ul>
                            <li>11.05.2022</li>
                            <li>11.05.2022</li>
                            <li>19.05.2022</li>
                            <li>8 Gün</li>
                            <li className="state state-denied">REDDEDİLDİ</li>
                        </ul>
                    </div>
                    
                </div>

                <div className="table-footer">

                </div>
            </div>
        </>

    } />
}