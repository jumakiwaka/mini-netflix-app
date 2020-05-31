import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getPopulorMovies() {
    const endpoint = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1e627ee773abfc0448500a1b00e34388&page=1`;

    return this._http.get(endpoint);
  }
}
