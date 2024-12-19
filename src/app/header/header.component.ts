import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router'; // for routerLink support
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink],
  template: `
    <mat-toolbar color="primary">
      <span class="app-title">LLM Knowledge App</span>
      <span class="spacer"></span>
      <a mat-button routerLink="/">Home</a>
      <a mat-button routerLink="/dashboard">Dashboard</a>
      <a mat-button routerLink="/quizzes">Quizzes</a>
      <a mat-button routerLink="/prompts">Prompt Challenges</a>
      <a mat-button routerLink="/jailbreak">Jailbreaking</a>
      <a mat-button routerLink="/leaderboard">Leaderboard</a>
    </mat-toolbar>
  `,
  styles: [`
    .app-title { font-weight: bold; }
    .spacer { flex: 1 1 auto; }
  `]
})
export class HeaderComponent {}
