import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftervoteComponent } from './aftervote.component';

describe('AftervoteComponent', () => {
  let component: AftervoteComponent;
  let fixture: ComponentFixture<AftervoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AftervoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AftervoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
