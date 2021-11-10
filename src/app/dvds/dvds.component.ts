import { Component, OnInit } from '@angular/core';
import { dvds } from 'src/Model/dvds.model';
import { ZuluService } from '../service/zulu.service';

@Component({
  selector: 'app-dvds',
  templateUrl: './dvds.component.html',
  styleUrls: ['./dvds.component.css']
})
export class DvdsComponent implements OnInit {

  constructor(private service:ZuluService) { }

  dvds:dvds[]=[];
  country:string="I";

  ngOnInit(): void {
    this.service.getDvds(this.country).subscribe(
      dvds=>{
        this.dvds=dvds;
        //console.log(books);
      }
    );
  }

  india(){
    this.country="I";
    this.service.getDvds(this.country).subscribe(
      dvds=>{
        this.dvds=dvds;
        //console.log(books);
      }
    );

  }
  usa(){
    this.country="U"
    this.service.getDvds(this.country).subscribe(
      dvds=>{
        this.dvds=dvds;
        //console.log(books);
      }
    );
  }

}
