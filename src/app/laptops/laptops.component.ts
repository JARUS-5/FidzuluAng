import { Component, OnInit } from '@angular/core';
import { laptops } from 'src/Model/laptops.model';
import { ZuluService } from '../service/zulu.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private service:ZuluService) { }

  laptops:laptops[]=[];
  country:string="I";

  ngOnInit(): void {
    this.service.getLaptops(this.country).subscribe(
      laptops=>{
        this.laptops=laptops;
        //console.log(books);
      }
    );
  }

  india(){
    this.country="I";
    this.service.getLaptops(this.country).subscribe(
      laptops=>{
        this.laptops=laptops;
        //console.log(books);
      }
    );

  }
  usa(){
    this.country="U"
    this.service.getLaptops(this.country).subscribe(
      laptops=>{
        this.laptops=laptops;
        //console.log(books);
      }
    );
  }
}
