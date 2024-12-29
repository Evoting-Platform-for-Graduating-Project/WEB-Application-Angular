import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivevoteComponent } from './activevote.component';

describe('ActivevoteComponent', () => {
  let component: ActivevoteComponent;
  let fixture: ComponentFixture<ActivevoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivevoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivevoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
