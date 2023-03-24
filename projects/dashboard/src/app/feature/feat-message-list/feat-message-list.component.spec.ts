import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatMessageListComponent } from './feat-message-list.component';

describe('FeatMessageListComponent', () => {
  let component: FeatMessageListComponent;
  let fixture: ComponentFixture<FeatMessageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatMessageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
