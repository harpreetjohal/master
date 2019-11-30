import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingComponent } from './loading.component';
  
  describe('LoadingComponent', () => {
    beforeEach(async (() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
            LoadingComponent
        ]
      }).compileComponents();
    }));
  
    it('should create the loading component', () => {
      const fixture = TestBed.createComponent(LoadingComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  
    it('should have the loading text', () => {
      const fixture = TestBed.createComponent(LoadingComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.col-sm-6 p').textContent).toContain('Loading...');
    });
  });
  