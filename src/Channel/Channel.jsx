import React from "react";
import "./Channel.scss"
import Section from "../Home/Home";
import Headerr from "../Home_header/Home_header"
import Mainnn from "../Home2/Home2"
import Yashil from "../img/Cover.png"
import Humann from "../img/human2.svg"
import Qongroq from "../img/qo'ng'iroq.svg"
import lupajon from "../img/lupa.svg"
import Dong from "../img/do'ng.png"
import Bovay from "../img/bovay.png"
import Jingalak from "../img/jingalak.png"
import Bovay2 from "../img/bovay2.png"
import Arrow from "../img/Arrows.png"


function Channel() {
    return (
        <>
            <div className="containerrr">
                <div className="boxjon">
                    <Section />
                    <Headerr />
                </div>

                <div className="containerrr_box">
                    <img className="yashillll" src={Yashil} alt="img" />

                    <div className="containerrr_box_d">
                        <div className="img_box_h">
                            <div className="img_bbox">
                                <img className="img_img" src={Humann} alt="img" width={80} height={80} />

                                <div className="text_box_h">
                                    <h2 className="containerrr_heading">Margaret Phelps</h2>
                                    <p className="containerrr_text">245K subscribed</p>
                                </div>
                            </div>

                            <div className="sub_box">
                                <img src={Qongroq} alt="img" />
                                <button className="subscription">Subscribe 2.3m</button>
                            </div>
                        </div>
                    </div>

                    <div className="menu_box">
                        <div className="menu_text_heading">
                            <h3 className="menu_heading">Home</h3>
                            <h3 className="menu_heading">Videos</h3>
                            <h3 className="menu_heading">Playlists</h3>
                            <h3 className="menu_heading">Channels</h3>
                            <h3 className="menu_heading">Channels</h3>
                            <h3 className="menu_heading">About</h3>
                            <img src={lupajon} alt="lupa" />
                        </div>

                        <p className="containerrr_text_ch">Recommended channel</p>
                    </div>



                    <div className="box_img_text">

                        <div className="box_h_t">
                            <img src={Dong} alt="img" width={440} height={250}/>

                            <div className="box_box_text">
                                <h3 className="box_h">Choosing The Best Audio Player Software For Your Computer</h3>

                                <p className="box_t">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>

                                <span className="box_l">11k views  ·  6 months ago</span>
                            </div>
                        </div>

                        <div className="box_img_j">
                            <div className="img_t_box">
                                <img src={Bovay} alt="img" width={50} height={50} />
                                <h3 className="img_t_heading">Flora Benson</h3>
                            </div>

                            <div className="img_t_box">
                                <img src={Jingalak} alt="img" width={50} height={50} />
                                <h3 className="img_t_heading">Violet Cobb</h3>
                            </div>

                            <div className="img_t_box">
                                <img src={Bovay2} alt="img" width={50} height={50} />
                                <h3 className="img_t_heading">Phillip Mullins</h3>
                            </div>
                        </div>
                    </div>

                    <div className="box_scrol">
                        <div className="box_scrol_d">
                            <h3 className="box_scrol_heading">Margaret Phelps videos</h3>
                            <img src={Arrow} alt="img" />
                        </div>
                        <Mainnn />
                    </div>
                </div>
            </div>
        </>
    )
}

export { Channel };