import React from "react";
import "./Home_header.scss";
import Lupa from "../img/lupa.svg";
import Kamera from "../img/kamera.svg";
import Nuqtalar from "../img/to'qqiz.svg";
import Qongiroq from "../img/qo'ng'iroq.svg";
import Jekchan from "../img/jekchan.svg";

function Main() {

    return (
        <div className="main">
            <div className="container">
                <div className="header_box_d">
                    <input className="header_input" type="text" placeholder="Qidirish" />
                    <img className="header_lupa" src={Lupa} alt="svg" />
                    <div className="header_box">
                        <img className="kamera" src={Kamera} alt="svg" />
                        <img className="nuqta" src={Nuqtalar} alt="svg" />
                        <img className="qungroq" src={Qongiroq} alt="svg" />
                        <img className="jekchan" src={Jekchan} alt="svg" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Main;