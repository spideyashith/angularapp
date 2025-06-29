import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloAngularComponent } from './hello-angular.component';

describe('HelloAngularComponent', () => {
  let component: HelloAngularComponent;
  let fixture: ComponentFixture<HelloAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
