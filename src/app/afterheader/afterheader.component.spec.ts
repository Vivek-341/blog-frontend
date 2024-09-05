import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterheaderComponent } from './afterheader.component';

describe('AfterheaderComponent', () => {
  let component: AfterheaderComponent;
  let fixture: ComponentFixture<AfterheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
