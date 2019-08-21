import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 

  }

  getQuery( query : string){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDS7fxKZgU4R8_Ok6kqiehB-gzmU3yfBY34K3kPvW9Td6U2bVyY_ZkudV12KWHcSK0LN8yQ7Iwa1x68z08'
    });
    const base = `https://api.spotify.com/v1/${ query }`;

    return  this.http.get( base, {headers});
  }

  getNewReleases(){
    /*let url = 'https://api.spotify.com/v1/browse/new-releases';
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBjzI0yIjFOEd1m349F_-5KyigueZyBIcCJlXzyeiLhbM30d622OI6vsPBshmNDkayktU5Fbhv6ACso3m0'
    });*/

    return this.getQuery(`browse/new-releases`)
      .pipe( map(response => response['albums'].items) );
  }

  getArtistas( termino:string ){
    /*let url = `https://api.spotify.com/v1/search?q=${ termino }&type=artist`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBjzI0yIjFOEd1m349F_-5KyigueZyBIcCJlXzyeiLhbM30d622OI6vsPBshmNDkayktU5Fbhv6ACso3m0'
    });*/

    return this.getQuery(`search?q=${ termino }&type=artist`)
      .pipe( map( response => response['artists'].items ));
  }

  getArtista( artistaId:string ){

    return this.getQuery(`artists/${ artistaId }`);
  }

  getTopTracks( artistaId:string ){

    return this.getQuery(`artists/${ artistaId }/top-tracks?country=ES`)
      .pipe( map( response => response['tracks']) );
  }
}
