import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealTreeLook } from './ideal-tree-look';

describe('IdealTreeLook', () => {
  let component: IdealTreeLook;
  let fixture: ComponentFixture<IdealTreeLook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdealTreeLook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdealTreeLook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
