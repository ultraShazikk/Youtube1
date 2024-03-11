import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Home/Home";
import Section from "../Home2/Home2";
import Headerr from "../Home_header/Home_header"
import "./Player.scss";

function Player() {
    const { item_id } = useParams();
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${item_id}`);
                if (!res.ok) {
                    throw new Error("Serverdan xato ketti 5 daqiqa qisib turing");
                }
                const data = await res.json();
                setItem(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [item_id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="coontainer">
            <Header />
            <Headerr />
            {item && (
                <div className="text">
                    <div className="text_box">
                        <img className="text_img" src={item.url} alt={item.title} />
                        <h2 className="text_heading">{item.title}</h2>
                    </div>
                    <Section className="baluu"/>
                </div>
            )}
        </div>
    );
}

export { Player };