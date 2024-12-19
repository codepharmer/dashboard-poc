import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  template: `
    <mat-card>
      <mat-card-title>Welcome to the LLM Knowledge App</mat-card-title>
      <mat-card-content>
        <p>Enhance your understanding of Large Language Models through quizzes, challenges, and exercises.</p>
        <p>Start by visiting your dashboard to track your progress, or jump straight into a quiz.</p>
      </mat-card-content>
      <mat-card-actions>
        <a mat-button color="primary" routerLink="/dashboard">Go to Dashboard</a>
        <a mat-button color="accent" routerLink="/quizzes">Try a Quiz</a>
      </mat-card-actions>
    </mat-card>
  `
})
export class HomeComponent {}
