import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicbindingComponent } from './dynamicbinding.component';

describe('DynamicbindingComponent', () => {
  let component: DynamicbindingComponent;
  let fixture: ComponentFixture<DynamicbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicbindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
