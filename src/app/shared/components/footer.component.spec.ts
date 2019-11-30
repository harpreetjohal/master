import {
  TestBed,
  async
} from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  FooterComponent
} from './footer.component';

describe('FooterComponent', () => {
  beforeEach(async (() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FooterComponent
      ]
    }).compileComponents();
  }));

  it('should create the footer component', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the copyright text', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.text-muted small').textContent).toContain('Copyright');
  });
});
