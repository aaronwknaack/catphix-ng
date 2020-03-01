import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedKittyComponent } from './unauthorized-kitty.component';

describe('UnauthorizedKittyComponent', () => {
  let component: UnauthorizedKittyComponent;
  let fixture: ComponentFixture<UnauthorizedKittyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizedKittyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedKittyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
