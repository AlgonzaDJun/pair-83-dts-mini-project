import { Card, CardMedia, Typography } from "@mui/material";
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

// import images array from ranking
import {ranking} from "../assets/rangking";

const Row = ({ title, fetchUrl, isLargeRow, isContinue, isTopTen }) => {
  
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

  const continueWatch = (
    <Box
      sx={{
        margin: "auto",
        mt: "4px",
        width: "80%",
        background:
          "linear-gradient(to right, red 0%, red 20%, white 20%, white 100%)",
        height: "5px",
      }}
    ></Box>
  );

  return (
    <div className="Row">
      <Box
        sx={{
          m: 3,
        }}
        color="primary"
      >
        <Typography variant="h6">{title}</Typography>
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
            color="primary"
          >
            {movies
              //   .filter((_, index) => index < 10)
              .slice(0, 10)
              .map((movie) => (
                <SwiperSlide key={movie.id} color="primary">
                  <Card sx={{ display: "flex" } } color="primary">
                    {isTopTen && (
                      ranking.map((rank, index) => (
                        <>
                          <img src={`${rank}`} alt="rank" key={index} />
                          <CardMedia
                            className={
                              isLargeRow
                                ? "row_poster_large"
                                : isTopTen
                                ? "row_poster_topTen"
                                : "row_poster"
                            }
                            component="img"
                            key={movie.id}
                            image={`${BASE_IMG_URL}${
                              isLargeRow || isTopTen
                                ? movie.poster_path
                                : movie.backdrop_path
                            }`}
                            alt={movie.title}
                          />
                        </>
                      ))
                    )}
                    <CardMedia
                      className={
                        isLargeRow
                          ? "row_poster_large"
                          : isTopTen
                          ? "row_poster_topTen"
                          : "row_poster"
                      }
                      component="img"
                      key={movie.id}
                      image={`${BASE_IMG_URL}${
                        isLargeRow || isTopTen
                          ? movie.poster_path
                          : movie.backdrop_path
                      }`}
                      alt={movie.title}
                      color="primary"
                    />
                  </Card>
                  {isContinue && continueWatch}
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Box>
    </div>
  );
};

export default Row;
