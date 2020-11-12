import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  gifs:any[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTrends()
    .subscribe((response: any)=>{
   this.gifs=response.data;
    })
  }

}
