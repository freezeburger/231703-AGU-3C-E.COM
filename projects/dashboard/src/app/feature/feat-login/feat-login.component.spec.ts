import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatLoginComponent } from './feat-login.component';

describe('FeatLoginComponent', () => {
  let component: FeatLoginComponent;
  let fixture: ComponentFixture<FeatLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
