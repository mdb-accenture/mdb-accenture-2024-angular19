import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlNotFoundComponent } from './ctrl-not-found.component';

describe('CtrlNotFoundComponent', () => {
  let component: CtrlNotFoundComponent;
  let fixture: ComponentFixture<CtrlNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtrlNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtrlNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
