import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { PipeTransform, Pipe } from '@angular/core';
  
@Pipe({name: 'loc'})
class MockPipe implements PipeTransform {
    transform(value: any): any {
        return value;
    }
}


  describe('HeaderComponent', () => {
    beforeEach(async (() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
            HeaderComponent,
            MockPipe
        ]
      }).compileComponents();
    }));
  
    it('should create the header component', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  
    it('should have the home link', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('a.nav-link').textContent).toContain('Home');
    });
  });
  