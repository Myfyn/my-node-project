import { Router } from "express";
import { getMovie, getMovies, createMovie } from "../controllers/movie.controllers.js";

const movieRoute = Router();

movieRoute.get("/api/movie", getMovies);


movieRoute.get("/api/movie/:id", getMovie);
movieRoute.post("/api/movie", createMovie);

export default movieRoute;
