import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar color="accent" class="footer">
      <span>© 2024 LLM Knowledge App</span>
      <span class="spacer"></span>
      <a mat-button href="#">Terms of Service</a>
      <a mat-button href="#">Privacy Policy</a>
    </mat-toolbar>
  `,
  styles: [`
    .footer {
      margin-top: 20px;
    }
    .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class FooterComponent {}
