import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header.component';
import { FooterComponent } from './shared/components/footer.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'loc'})
class MockPipe implements PipeTransform {
    transform(value: any): any {
        return value;
    }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SnotifyModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MockPipe
      ],
      providers: [
        { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
        SnotifyService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'master'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('master');
  });

  it('should have the other components', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).not.toBe(null);
    expect(compiled.querySelector('app-footer')).not.toBe(null);
    expect(compiled.querySelector('ng-snotify')).not.toBe(null);

  });
});
