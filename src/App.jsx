import "./App.css";
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {
  trending,
  originals,
  comedyMovies,
  horrorMovies,
  actionMovies,
  romanceMovies,
  documentaries,
} from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={trending} title="Trending" isSmall />
      <RowPost url={comedyMovies} title="Comedy Movies" isSmall />
      <RowPost url={horrorMovies} title="Horror Movies" isSmall />
      <RowPost url={actionMovies} title="Action Movies" isSmall />
      <RowPost url={romanceMovies} title="Romance Movies" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
