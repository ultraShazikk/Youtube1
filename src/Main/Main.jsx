    import React, { useState, useEffect } from "react";
    import axios from "axios";
    import { Link } from "react-router-dom";
    import "./Main.scss";
    import Humanjon1 from "../img/human1.svg";
    import Lupa from "../img/lupa.svg";
    import Kamera from "../img/kamera.svg";
    import Nuqtalar from "../img/to'qqiz.svg";
    import Qongiroq from "../img/qo'ng'iroq.svg";
    import Jekchan from "../img/jekchan.svg";

    function Main() {
        const [bilyaaaaaaaaax, joojo] = useState([]);
        const [films, setFilms] = useState([]);

        useEffect(() => {
            const fetchFilms = async () => {
                try {
                    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");

                    if (res?.data) {
                        setFilms((res?.data.slice(5, 8)));
                    }
                } catch (error) {
                    console.error("Error fetching data from server:", error);
                }
            };

            fetchFilms();
        }, []);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const [photosRes, filmsRes] = await Promise.all([
                        axios.get("https://jsonplaceholder.typicode.com/photos"),
                        axios.get("https://jsonplaceholder.typicode.com/photos")
                    ]);

                    if (photosRes?.data && filmsRes?.data) {
                        joojo(photosRes.data.slice(0, 10));
                        setFilms(filmsRes.data.slice(5, 10));
                    }
                } catch (error) {
                    console.error("Serverdan ma'lumotlarni olishda xatolik:", error);
                }
            };

            fetchData();
        }, []);

        return (
            <div className="main">
                <div className="container">
                    <img className="header_lupa" src={Lupa} alt="svg" />
                    <div className="header_box_d">
                        <input className="header_input" type="text" placeholder="Qidirish" />
                        <div className="header_box">
                            <img className="kamera" src={Kamera} alt="svg" />
                            <img className="nuqta" src={Nuqtalar} alt="svg" />
                            <img className="qungroq" src={Qongiroq} alt="svg" />
                            <img className="jekchan" src={Jekchan} alt="svg" />
                        </div>
                    </div>
                    <div className="main_box_d">
                        <div className="main_box">
                            <img className="main_human" src={Humanjon1} alt="svg" width={50} height={50} />
                            <h2 className="main_title">Dollie Blair</h2>
                        </div>
                        <ul className="main_list">
                            {bilyaaaaaaaaax.map((item) => (
                                <Link key={item.id} to={"/Player/" + item.id}>
                                    <li className="main_item" key={item.id}>
                                        <img
                                            className="main_img"
                                            src={item.thumbnailUrl}
                                            alt={item.title + "ning posteri"}
                                            width={220}
                                            height={150}
                                        />
                                        <h2 className="main_heading">{item.title}</h2>
                                    </li>
                                </Link>

                            ))}
                        </ul>
                    </div>
                    <div className="sectionjon">
                        <ul className="sectionjon_list">
                            {films.map((item) => (
                                <li key={item.id}>
                                    <Link  to={"/Player/" + item.id}>
                                        <img
                                            className="sectionjon_img"
                                            src={item.url}
                                            alt={item.title + "ning posteri"}
                                            width={340}
                                            height={250}
                                        />
                                        <h2 className="sectionjon_heading">{item.title}</h2>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        );
    }

    export default Main;