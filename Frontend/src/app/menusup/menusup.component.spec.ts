import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusupComponent } from './menusup.component';

describe('MenusupComponent', () => {
  let component: MenusupComponent;
  let fixture: ComponentFixture<MenusupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenusupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
