import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './core/login/login.module';
import { FormsModule } from "@angular/forms";
import { PointsCalculatorModule } from './points-calculator/points-calculator.module';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { KeycloakAngularModule, KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { HomeComponent } from './core/home/home.component';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [
    AppComponent,	
    HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    FormsModule,
    PointsCalculatorModule,
    StoreModule.forRoot({}, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),
    KeycloakAngularModule,
    MainModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  keycloak.keycloakEvents$.subscribe({
    next: e => {
      if (e.type == KeycloakEventType.OnTokenExpired) {
        keycloak.updateToken(20);
      }
    }
  });

  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'User-Realm',
        clientId: 'front-app',
      },
      bearerExcludedUrls: ['/assets', '/home'],
      // initOptions: {
      //   onLoad: 'check-sso',
      //   silentCheckSsoRedirectUri:
      //     window.location.origin + '/assets/silent-check-sso.html',
      // },
    });
}