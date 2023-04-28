import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosCategoriaComponent } from './articulos-categoria.component';

describe('ArticulosCategoriaComponent', () => {
  let component: ArticulosCategoriaComponent;
  let fixture: ComponentFixture<ArticulosCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
