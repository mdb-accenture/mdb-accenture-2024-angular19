import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlContactDetailsComponent } from './ctrl-contact-details.component';

describe('CtrlContactDetailsComponent', () => {
  let component: CtrlContactDetailsComponent;
  let fixture: ComponentFixture<CtrlContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtrlContactDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtrlContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
