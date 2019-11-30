import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ErrorComponent
      ]
    }).compileComponents();
  }));

  it('should create the error component', () => {
    const fixture = TestBed.createComponent(ErrorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the error message', () => {
    const fixture = TestBed.createComponent(ErrorComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.col-sm-12 h1').textContent).toContain('Something went wrong!');
  });
});
