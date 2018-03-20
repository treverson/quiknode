import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendInstanceComponent } from './suspend-instance.component';

describe('SuspendInstanceComponent', () => {
  let component: SuspendInstanceComponent;
  let fixture: ComponentFixture<SuspendInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspendInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
