import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptChallengeComponent } from './prompt-challenge.component';

describe('PromptChallengeComponent', () => {
  let component: PromptChallengeComponent;
  let fixture: ComponentFixture<PromptChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromptChallengeComponent]
    });
    fixture = TestBed.createComponent(PromptChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
