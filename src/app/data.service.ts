import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getTrends(){

    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=yAJseOBgadYamMVxU82GHNn73d1jBGlH&limit=25&rating=g`);
  }
 getSearchGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=yAJseOBgadYamMVxU82GHNn73d1jBGlH&q=&limit=25&offset=0&rating=g&lang=en`); 
  }
}
