import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeIssue } from './tree-issue';

describe('TreeIssue', () => {
  let component: TreeIssue;
  let fixture: ComponentFixture<TreeIssue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeIssue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeIssue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
