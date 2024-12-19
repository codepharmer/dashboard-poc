import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MOCK_JAILBREAKS } from '../mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jailbreak',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  template: `
    <h2>Jailbreaking Exercises</h2>
    <mat-card *ngIf="challenge">
      <mat-card-title>Adversarial Challenge</mat-card-title>
      <mat-card-content>
        <p>{{ challenge.challenge }}</p>
        <p><em>Hint: {{ challenge.hint }}</em></p>
        <mat-form-field appearance="fill">
          <mat-label>Your Attempt</mat-label>
          <input matInput [(ngModel)]="userAttempt">
        </mat-form-field>
        <button mat-raised-button color="warn" (click)="submitAttempt()">Try to Break</button>
        <div *ngIf="attemptResponse">
          <h3>Model Response:</h3>
          <p>{{ attemptResponse }}</p>
        </div>
      </mat-card-content>
    </mat-card>
  `
})
export class JailbreakComponent {
  challenge = MOCK_JAILBREAKS[0];
  userAttempt = '';
  attemptResponse = '';

  submitAttempt() {
    // Mock logic: If the user tries something disallowed, the model refuses
    if (this.userAttempt.toLowerCase().includes('disallowed')) {
      this.attemptResponse = "I'm sorry, but I can’t help with that request.";
    } else {
      this.attemptResponse = "The model responds normally to your attempt.";
    }
  }
}
