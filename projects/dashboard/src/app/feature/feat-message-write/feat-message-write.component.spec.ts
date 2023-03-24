import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatMessageWriteComponent } from './feat-message-write.component';

describe('FeatMessageWriteComponent', () => {
  let component: FeatMessageWriteComponent;
  let fixture: ComponentFixture<FeatMessageWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatMessageWriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatMessageWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
