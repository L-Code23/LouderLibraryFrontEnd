import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from "@abacritt/angularx-social-login";
import { provideHttpClient } from '@angular/common/http';
import { EnvironmentDevelopement } from '../environments/environment.developement';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //We are building a provider. Version 2.2.0 of package doesn't provide one.
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [provideHttpClient(),
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            //Remove the .apps.googleusercontent.com from the client id
            //MAKE SURE TO HIDE IT FROM GITHUB
            EnvironmentDevelopement.clientId
          ),
        },
      ],
      onError: (err) => {
        debugger;
        console.error(err);
      },
    } as SocialAuthServiceConfig,
  },
  //more providers can go here
]
};

