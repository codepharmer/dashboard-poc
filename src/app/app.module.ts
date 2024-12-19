import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import your components
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

// Routing configuration
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [ LeaderboardComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
