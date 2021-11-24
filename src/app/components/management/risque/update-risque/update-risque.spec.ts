import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterisqueComponent } from './update-risque.component';

describe('UpdaterisqueComponent', () => {
  let component: UpdaterisqueComponent;
  let fixture: ComponentFixture<UpdaterisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
