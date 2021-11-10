import { Component, OnInit } from '@angular/core';
import { toys } from 'src/Model/toys.model';
import { ZuluService } from '../service/zulu.service';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  constructor(private service:ZuluService) { }

  toys:toys[]=[];
  country:string="I";

  ngOnInit(): void {
    this.service.getToys(this.country).subscribe(
      toys=>{
        this.toys=toys;
        console.log(toys);
      }
    );
  }

  india(){
    this.country="I";
    this.service.getToys(this.country).subscribe(
      toys=>{
        this.toys=toys;
        //console.log(books);
      }
    );

  }
  usa(){
    this.country="U"
    this.service.getToys(this.country).subscribe(
      toys=>{
        this.toys=toys;
        //console.log(books);
      }
    );
  }
}
