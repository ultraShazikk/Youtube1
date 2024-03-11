import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home2.scss";

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
                    setFilms(filmsRes.data.slice(5, 8));
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
                <div className="main_box_d">
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
            </div>
        </div >
    );
}

export default Main;