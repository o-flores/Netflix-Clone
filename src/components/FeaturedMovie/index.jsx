import React, { useEffect, useState } from 'react';
import { fetchMoviesOrTvInfo, BASE_URL, API_KEY } from '../../services/api';
import './style.css';
import { FaPlay } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";


function FeaturedMovie() {

  const [featuredTv, setfeaturedTv] = useState([]);
  const [featuredTvInfo, setfeaturedTvInfo] = useState([]);

  let overview = featuredTvInfo.overview;
  if (featuredTvInfo.overview) {
    if (featuredTvInfo.overview.length > 200) {
      overview = featuredTvInfo.overview.substr(0, 200) + '...';
    }
  }


  useEffect(() => {
    const numberOfInfoPerPage = 20;
    const fetchFeaturedSeries = async () => {
      const { results } = await fetchMoviesOrTvInfo(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_watch_providers=8&watch_region=BR&sort_by=popularity.desc&language=pt-BR`);
      const randomNumber = Math.round(Math.random() * numberOfInfoPerPage);
      setfeaturedTv(results[randomNumber]);
    }
    fetchFeaturedSeries();
  }, []);

  useEffect(() => {
    const fetchDetailsTvInfo = async () => {
      const info = await fetchMoviesOrTvInfo(`${BASE_URL}/tv/${featuredTv.id}?api_key=${API_KEY}&language=pt-BR`);
      setfeaturedTvInfo(info);
    }
    if (featuredTv.length !== 0) fetchDetailsTvInfo();
  }, [featuredTv]);

  return (
    <div
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${featuredTv.backdrop_path})`
      }}
    >
      <div className="vertical-gradient">
        <div className="horizontal-gradient">
          <div className="infos">
            <div className="title">
              <h1>{featuredTv.original_name}</h1>
            </div>
            <div className="overview">
              <p>{overview}</p>
            </div>
            <div className="buttons">
              <button className="play-btn">
                <FaPlay className="icon" />
                Assistir
              </button>
              <button className="info-btn">
                <FaInfo className="icon" />
                Mais informações
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedMovie;
