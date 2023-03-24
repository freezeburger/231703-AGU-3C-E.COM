import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatRegisterComponent } from './feat-register.component';

describe('FeatRegisterComponent', () => {
  let component: FeatRegisterComponent;
  let fixture: ComponentFixture<FeatRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
