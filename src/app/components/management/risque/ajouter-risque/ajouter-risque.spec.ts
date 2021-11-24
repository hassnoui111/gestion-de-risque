import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterrisqueComponent } from './ajouter-risque.component';

describe('AjouterrisqueComponent', () => {
  let component: AjouterrisqueComponent;
  let fixture: ComponentFixture<AjouterrisqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterrisqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterrisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
