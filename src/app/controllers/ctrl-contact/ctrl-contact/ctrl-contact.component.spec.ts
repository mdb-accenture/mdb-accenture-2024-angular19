import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlContactComponent } from './ctrl-contact.component';

describe('CtrlContactComponent', () => {
  let component: CtrlContactComponent;
  let fixture: ComponentFixture<CtrlContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtrlContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtrlContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
