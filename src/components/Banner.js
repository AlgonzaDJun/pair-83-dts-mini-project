import { Box, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import requests from "../apis/request";
import tmdb from "../apis/tmdb";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      const request = await tmdb.get(requests.fetchPopular);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, []);

  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {movies.slice(0, 5).map((movie) => (
          <>
            <SwiperSlide key={movie.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  //   justifyContent: "space-around",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "center",
                    m: "30px",
                    width: "50%",
                  }}
                >
                  <Typography variant="h4">{`${movie.title}`}</Typography>
                  <Typography variant="h5">
                    Starworld, english, drama
                  </Typography>
                  <Typography variant="caption">{`${movie?.overview}`}</Typography>
                </Box>
                <Box sx={{ width: "100%", height: "300px" }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    // random image from internet
                    image={`${BASE_IMG_URL}${movie.backdrop_path}`}
                    alt=""
                  />
                </Box>
              </Box>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
