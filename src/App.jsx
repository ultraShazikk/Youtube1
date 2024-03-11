import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chrome from "./Chrome/brawzer";
import Main from "./Main/Main";
import Home from "./Home/Home";
import Home2 from "./Home2/Home2";
import Home_header from "./Home_header/Home_header";
import { Channel } from "./Channel/Channel";
import { Player } from "./Profil/Player";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chrome />} />
        <Route path="/Bosh" element={<Chrome />} />
        <Route path="/Main/:item_id" element={<Main />} />
        <Route path="/Home2/:item_id" element={<Home2 />} />
        <Route path="/Home_header/:item_id" element={<Home_header />} />
        <Route path="/Home/:item_id" element={<Home />} />
        <Route path="/Channel/:item_id" element={<Channel />} />
        <Route path="/Player/:item_id" element={<Player />} />
      </Routes>
    </Router>
  );
}

export default App;
