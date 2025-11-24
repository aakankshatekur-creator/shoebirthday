import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Suprise } from './suprise';

describe('Suprise', () => {
  let component: Suprise;
  let fixture: ComponentFixture<Suprise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Suprise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Suprise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
