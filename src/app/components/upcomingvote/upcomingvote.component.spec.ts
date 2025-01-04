import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingvoteComponent } from './upcomingvote.component';

describe('UpcomingvoteComponent', () => {
  let component: UpcomingvoteComponent;
  let fixture: ComponentFixture<UpcomingvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingvoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
