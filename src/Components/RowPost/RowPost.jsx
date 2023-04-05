import React, { useEffect, useState } from "react";
import Youtube from 'react-youtube';
import { API_KEY, imageUrl } from "../../Constants/Constants";
import axios from "../../axios";
import "./RowPost.css";

const RowPost = (props) => {
  const [movies, setmovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setmovies(response.data.results);
      })
      .catch((err) => {
        // alert("Network Error")
      });
  }, []);

  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US&=`).then((response) => {
      console.log(response.data.results[0]);
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0].key)
      } else {
        console.log('no video');
      }
    })
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallposter" : "poster"}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <Youtube videoId={urlId} opts={opts} />}
    </div>
  );
};

export default RowPost;
