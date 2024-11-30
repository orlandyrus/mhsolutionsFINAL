import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPromocionesComponent } from './carousel-promociones.component';

describe('CarouselPromocionesComponent', () => {
  let component: CarouselPromocionesComponent;
  let fixture: ComponentFixture<CarouselPromocionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselPromocionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
