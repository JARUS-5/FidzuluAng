import { Component, OnInit } from '@angular/core';
import { food } from 'src/Model/food.model';
import { ZuluService } from '../service/zulu.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor(private service:ZuluService) { }

  foods:food[]=[];
  country:string="I";

  ngOnInit(): void {
    this.service.getFood(this.country).subscribe(
      foods=>{
        this.foods=foods;
        //console.log(books);
      }
    );
  }

  india(){
    this.country="I";
    this.service.getFood(this.country).subscribe(
      foods=>{
        this.foods=foods;
        //console.log(books);
      }
    );

  }
  usa(){
    this.country="U"
    this.service.getFood(this.country).subscribe(
      foods=>{
        this.foods=foods;
        //console.log(books);
      }
    );
  }

}
