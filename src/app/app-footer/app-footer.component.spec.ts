import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterComponent } from './app-footer.component';

describe('AppFooterComponent DOM Tests', () => {
  let component: AppFooterComponent;
  let fixture: ComponentFixture<AppFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the footer end text', () => {
    let titleComponent = fixture.debugElement.nativeElement.querySelector(".app-footer__text-format");
    expect(titleComponent).toBeTruthy();
    expect(titleComponent.textContent).toContain("Antoine Frère : Front End Developer- 2018");
  });
});
