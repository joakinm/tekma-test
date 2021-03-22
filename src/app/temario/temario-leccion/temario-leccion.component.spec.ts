import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemarioLeccionComponent } from './temario-leccion.component';

describe('TemarioItemsComponent', () => {
  let component: TemarioLeccionComponent;
  let fixture: ComponentFixture<TemarioLeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemarioLeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemarioLeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
