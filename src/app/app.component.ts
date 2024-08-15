import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Environments } from '../environments/environments';
import { LandingComponent } from "./components/landing/landing.component";
import { LibraryComponent } from './components/library/library.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomepageComponent, RouterLink, LandingComponent, RouterModule, LibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MsLoudersLibrary';
}
