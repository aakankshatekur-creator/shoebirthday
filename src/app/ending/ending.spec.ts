import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ending } from './ending';

describe('Ending', () => {
  let component: Ending;
  let fixture: ComponentFixture<Ending>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ending]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ending);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
