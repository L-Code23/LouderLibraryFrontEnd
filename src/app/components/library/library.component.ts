import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthorService } from '../../Services/author.service';
import { BookService } from '../../Services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  constructor (private authorService: AuthorService, private bookService:BookService){

  }

}
