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
  movies: Array<any> = [];
  shows: Array<object> = [];
  currentPage: Number;
  poster: String;
  currentIndex: Number;
  rating: String;
  constructor(private _movieService: MoviesService) {}

  setArray(n: number): Array<Number> {
    this.rating = `${100 * (n - Math.floor(n))}%`;

    return Array(Math.floor(n));
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

  viewNextFilms() {
    const page = Number(this.currentPage) + 1;
    this._movieService.getPopulorMovies(page).subscribe((movies: Movies) => {
      const { page, results } = movies;
      this.currentPage = page;
      this.movies = this.movies.concat(results);

      // this.poster = `https://image.tmdb.org/t/p/w780${this.movies[0].poster_url}`;
      // console.log(this.movies, results);
    });
  }

  viewFilmDetails(index: Number) {
    this.currentIndex = index;
  }
}
