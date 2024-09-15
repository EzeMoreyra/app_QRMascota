import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalesPerdidosPage } from './animales-perdidos.page';

describe('AnimalesPerdidosPage', () => {
  let component: AnimalesPerdidosPage;
  let fixture: ComponentFixture<AnimalesPerdidosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesPerdidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
