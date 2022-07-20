import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import tmdb from "../apis/tmdb";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await tmdb.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <Box
        sx={{
          m: 3,
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Box
          className="row_posters"
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {movies
            //   .filter((_, index) => index < 10)
            .slice(0, 10)
            .map((movie) => (
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
            ))}
        </Box>
      </Box>
    </div>
  );
};

export default Row;
