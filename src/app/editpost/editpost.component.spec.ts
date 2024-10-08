import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpostComponent } from './editpost.component';

describe('EditpostComponent', () => {
  let component: EditpostComponent;
  let fixture: ComponentFixture<EditpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditpostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
