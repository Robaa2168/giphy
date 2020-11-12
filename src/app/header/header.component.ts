import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  search(searchTerm: string){
    if (searchTerm !==""){
      this.dataService.searchGifs(searchTerm);
    }

  }

}
