import { Component, EventEmitter, NgModule, Output, output } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BookModel } from '../../models/book-model';
import { Book } from '../../models/author-model';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})


export class AddBookComponent {
  @Output() Submitted = new EventEmitter<BookModel>();

  AllBooks: Book[] = [];
  Book: Book = {} as Book;
  
  
}
