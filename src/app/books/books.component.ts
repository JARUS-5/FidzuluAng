import { Component, OnInit } from '@angular/core';
import { Books } from 'src/Model/books.model';
import { ZuluService } from '../service/zulu.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private service:ZuluService) { }

  books:Books[]=[];
  country:string="I";

  ngOnInit(): void {
    this.service.getBooks(this.country).subscribe(
      books=>{
        this.books=books;
        //console.log(books);
      }
    );
  }

  india(){
    this.country="I";
    this.service.getBooks(this.country).subscribe(
      books=>{
        this.books=books;
        //console.log(books);
      }
    );

  }
  usa(){
    this.country="U"
    this.service.getBooks(this.country).subscribe(
      books=>{
        this.books=books;
        //console.log(books);
      }
    );
  }

}
