import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  topTracks:any[] = [];
  loading:boolean = true;

  constructor(private router:ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
      this.verArtista(params['id']);
      this.verTopTracks(params['id']);
    });
   }

  ngOnInit() {
  }
  
  verArtista( artistaId:string ){
    this.spotify.getArtista(artistaId).subscribe( response =>{
      this.artista = response;
      this.loading = false;
    });
  }
  verTopTracks(artistaId:string){
      this.spotify.getTopTracks(artistaId).subscribe( response =>{
        console.log("response", response);
        this.topTracks = response;
    });
  }
}
