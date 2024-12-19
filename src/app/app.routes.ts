import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuizComponent } from './quiz/quiz.component';
import { PromptChallengeComponent } from './prompt-challenge/prompt-challenge.component';
import { JailbreakComponent } from './jailbreak/jailbreak.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'quizzes', component: QuizComponent },
  { path: 'prompts', component: PromptChallengeComponent },
  { path: 'jailbreak', component: JailbreakComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: '**', redirectTo: '' }
];
