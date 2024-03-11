import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Todo from "../Todos/todos";
import HomeSVG from "../img/home.svg";
import TrendingSVG from "../img/trending.svg";
import SubscriptionsSVG from "../img/subscription.svg";
import Menu from "../img/menu.svg";
import LibrarySVG from "../img/libruary.svg";
import HistorySVG from "../img/history.svg";
import WatchSVG from "../img/watch.svg";
import FavouritesSVG from "../img/favourite.svg";
import LikedSVG from "../img/likes.svg";
import MusicSVG from "../img/music.svg";
import GamesSVG from "../img/games.svg";
import ShowSVG from "../img/more.svg";
import Human1 from "../img/human1.svg";
import Human2 from "../img/human2.svg";
import Human3 from "../img/human3.svg";
import Human4 from "../img/human4.svg";
import Human5 from "../img/human5.svg";
import Human6 from "../img/human6.svg";
import Youtube from "../img/youtubeblack.svg";

function Home() {
    const homeRef = useRef(null);

    const [Todos] = React.useState([
        { title: "Home", icon: HomeSVG },
        { title: "Trending", icon: TrendingSVG },
        { title: "Subscriptions", icon: SubscriptionsSVG }
    ]);

    const [Todoss] = React.useState([
        { title: "Library", icon: LibrarySVG },
        { title: "History", icon: HistorySVG },
        { title: "Watch later", icon: WatchSVG },
        { title: "Favourites", icon: FavouritesSVG },
        { title: "Liked videos", icon: LikedSVG },
        { title: "Music", icon: MusicSVG },
        { title: "Games", icon: GamesSVG },
        { title: "Show more", icon: ShowSVG }
    ]);

    const [Todosss] = React.useState([
        { title: "Gussie Singleton", icon: Human1 },
        { title: "Nora Francis", icon: Human2 },
        { title: "Belle Briggs", icon: Human3 },
        { title: "Eunice Cortez", icon: Human4 },
        { title: "Emma Hanson", icon: Human5 },
        { title: "Leah Berry", icon: Human6 }
    ]);

    const toggleVisibility = () => {
        if (homeRef.current) {
            homeRef.current.classList.toggle("hide");
        }
    };

    return (
        <>
            <div className="containeer">
                <div className="home_box">
                    <img className="home_menu" src={Menu} alt="svg"
                        width={20} height={17} onClick={toggleVisibility} />
                    <img className="home_youtube" src={Youtube} alt="svg" width={116} height={25} />
                </div>
                <section className="home" ref={homeRef}>
                    <div className="container">

                        <div className="Todos">
                            {Todos.map((todo, index) => (
                                <Todo key={index}>
                                    <img className="black_img"
                                        src={todo.icon} alt={todo.title}/>
                                    <p className="home_text">{todo.title}</p>
                                </Todo>
                            ))}
                        </div>

                        <div className="Todoss">
                            {Todoss.map((todo, index) => (
                                <Todo key={index}>
                                    <img src={todo.icon} alt={todo.title} />
                                    <p className="home_text">{todo.title}</p>
                                </Todo>
                            ))}
                        </div>

                        <h2 className="home_heading">Subscriptions</h2>

                        <div className="Todosss">
                            {Todosss.map((todo, index) => (
                                <Link key={index} to={`/Channel/${todo.title}`}>
                                    <Todo>
                                        <img src={todo.icon} alt={todo.title} />
                                        <p className="home_text">{todo.title}</p>
                                    </Todo>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
