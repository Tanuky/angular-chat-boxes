import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent DOM tests', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;
  const sampleTitle = 'enter Title Here'


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    component.inputHeader = sampleTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a title', fakeAsync(() => {
    let titleComponent = fixture.debugElement.nativeElement.querySelector("h1.app-header__text-format");
    expect(titleComponent).toBeTruthy();
    expect(titleComponent.textContent).toContain(sampleTitle);
  }));
});
