import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MOCK_QUIZZES } from '../mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatRadioModule, MatButtonModule, FormsModule],
  template: `
    <h2>LLM Quizzes</h2>
    <div *ngIf="!submitted; else scoreBlock">
      <mat-card *ngFor="let q of quizQuestions; let i = index">
        <mat-card-title>{{q.question}}</mat-card-title>
        <mat-radio-group [(ngModel)]="userAnswers[i]">
          <mat-radio-button *ngFor="let opt of q.options; let idx = index" [value]="idx">
            {{opt}}
          </mat-radio-button>
        </mat-radio-group>
      </mat-card>
      <button mat-raised-button color="primary" (click)="submitQuiz()">Submit Quiz</button>
    </div>
    <ng-template #scoreBlock>
      <mat-card>
        <mat-card-title>Your Score: {{score}} / {{quizQuestions.length}}</mat-card-title>
        <mat-card-content>
          <p *ngIf="score === quizQuestions.length">Great job! You got all correct.</p>
          <p *ngIf="score < quizQuestions.length">Keep practicing! Review your answers and try again.</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button color="accent" (click)="retakeQuiz()">Retake</button>
        </mat-card-actions>
      </mat-card>
    </ng-template>
  `
})
export class QuizComponent {
  quizQuestions = MOCK_QUIZZES;
  userAnswers: number[] = [];
  submitted = false;
  score = 0;

  submitQuiz() {
    this.score = this.userAnswers.reduce((acc, ans, i) => {
      return ans === this.quizQuestions[i].answer ? acc + 1 : acc;
    }, 0);
    this.submitted = true;
  }

  retakeQuiz() {
    this.userAnswers = [];
    this.submitted = false;
    this.score = 0;
  }
}
