import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await tmdb.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <Box
        sx={{
          m: 3,
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Box className="row_posters">
          <Swiper
            slidesPerView={5}
            spaceBetween={1}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {movies
              //   .filter((_, index) => index < 10)
              .slice(0, 10)
              .map((movie) => (
                <SwiperSlide key={movie.id}>
                  <CardMedia
                    className={`row_poster ${isLargeRow && "row_poster_large"}`}
                    component="img"
                    // height="200"
                    key={movie.id}
                    image={`${BASE_IMG_URL}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.title}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Box>
    </div>
  );
};

export default Row;
