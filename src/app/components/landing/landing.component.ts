import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { StudentModel } from '../../models/student-model';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [GoogleSigninButtonModule,RouterOutlet,RouterModule,RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
 student: SocialUser = {} as SocialUser;
 loggedIn : boolean = false;

 constructor( private socialAuthServiceConfig: SocialAuthService){}

 ngOnInit(){
  this.socialAuthServiceConfig.authState.subscribe((userResponse: SocialUser)=>{
    this.student = userResponse;
    this.loggedIn = (userResponse != null);
  });
 }

 signOut(): void {
  this.socialAuthServiceConfig.signOut();
 }

}
