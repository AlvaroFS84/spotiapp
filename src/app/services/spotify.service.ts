import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 

  }

  getQuery(){

  }

  getNewReleases(){
    let url = 'https://api.spotify.com/v1/browse/new-releases';
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBjzI0yIjFOEd1m349F_-5KyigueZyBIcCJlXzyeiLhbM30d622OI6vsPBshmNDkayktU5Fbhv6ACso3m0'
    });

    return this.http.get(url, {headers}).pipe( map(response => response['albums'].items) );
  }

  getArtista( termino:string ){
    let url = `https://api.spotify.com/v1/search?q=${ termino }&type=artist`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBjzI0yIjFOEd1m349F_-5KyigueZyBIcCJlXzyeiLhbM30d622OI6vsPBshmNDkayktU5Fbhv6ACso3m0'
    });

    return this.http.get(url, {headers})
      .pipe( map( response => response['artists'].items ));
  }
}
