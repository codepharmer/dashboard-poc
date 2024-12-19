import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MOCK_USER_PROGRESS } from '../mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  template: `
    <mat-card>
      <mat-card-title>Welcome back, {{ progressData.username }}</mat-card-title>
      <mat-card-content>
        <p>You have taken {{ progressData.quizzesTaken }} quizzes and passed {{ progressData.quizzesPassed }} of them.</p>
        <h3>Achievements:</h3>
        <mat-list>
          <mat-list-item *ngFor="let ach of progressData.achievements">{{ ach }}</mat-list-item>
        </mat-list>
        <h3>Recommended Next Steps:</h3>
        <mat-list>
          <mat-list-item *ngFor="let step of progressData.recommendedNextSteps">{{ step }}</mat-list-item>
        </mat-list>
      </mat-card-content>
    </mat-card>
  `
})
export class DashboardComponent implements OnInit {
  progressData = MOCK_USER_PROGRESS;

  ngOnInit() {
    // In a real scenario, you might load this from a service
  }
}
