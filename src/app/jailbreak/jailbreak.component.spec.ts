import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JailbreakComponent } from './jailbreak.component';

describe('JailbreakComponent', () => {
  let component: JailbreakComponent;
  let fixture: ComponentFixture<JailbreakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JailbreakComponent]
    });
    fixture = TestBed.createComponent(JailbreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
