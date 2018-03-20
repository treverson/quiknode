import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateInstanceComponent } from './create-update-instance.component';

describe('CreateUpdateInstanceComponent', () => {
  let component: CreateUpdateInstanceComponent;
  let fixture: ComponentFixture<CreateUpdateInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
