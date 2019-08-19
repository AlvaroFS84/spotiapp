import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  @Input() artistas:any [] =[];
  loading:boolean = false;

  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }
  
  buscar( termino : string ){
      this.loading = true;
      this.spotify.getArtistas(termino).subscribe( (response : any) =>{  
        this.artistas = response;  
      });
      this.loading = false;
  }
}
