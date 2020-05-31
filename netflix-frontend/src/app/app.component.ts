import { Component, OnInit } from "@angular/core";
import { MoviesService } from "./services/movies.service";
import { Movies } from "./models/movies";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "mini-netflix";
  movies: Array<Object> = [];
  shows: Array<Object> = [];
  currentPage: Number;
  poster: String;
  currentIndex: Number;
  rating: Array<Number>;
  constructor(private _movieService: MoviesService) {}

  setArray(n: number): Array<Number> {
    return Array(Math.round(n));
  }

  ngOnInit() {
    this._movieService.getPopulorMovies().subscribe((movies: Movies) => {
      const { page, results } = movies;
      this.currentPage = page;
      this.movies = results;
      this.currentIndex = 0;
      // this.poster = `https://image.tmdb.org/t/p/w780${this.movies[0].poster_url}`;
      // console.log(this.movies);
    });
  }
  viewFilmDetails(index: Number) {
    console.log(index);
    this.currentIndex = index;
  }
}
