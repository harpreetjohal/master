import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {NotFoundComponent } from './notFound.component';

describe('NotFoundComponent', () => {
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NotFoundComponent
      ]
    }).compileComponents();
  }));

  it('should create the not found component', () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the 404 error message', () => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.col-sm-12 h1').textContent).toContain('404 File not found.');
  });
});
