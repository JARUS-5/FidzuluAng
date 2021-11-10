import { Component, OnInit } from '@angular/core';
import { bikes } from 'src/Model/bikes.model';
import { ZuluService } from '../service/zulu.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor(private service:ZuluService) { }

  bikes:bikes[]=[];
  country:string="I";

  ngOnInit(): void {
    this.service.getBikes(this.country).subscribe(
      bikes=>{
        this.bikes=bikes;
        //console.log(books);
      }
    );
  }

  india(){
    this.country="I";
    this.service.getBikes(this.country).subscribe(
      bikes=>{
        this.bikes=bikes;
        //console.log(books);
      }
    );

  }
  usa(){
    this.country="U"
    this.service.getBikes(this.country).subscribe(
      bikes=>{
        this.bikes=bikes;
        //console.log(books);
      }
    );
  }

}
