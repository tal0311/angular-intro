import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritPreviewComponent } from './favorit-preview.component';

describe('FavoritPreviewComponent', () => {
  let component: FavoritPreviewComponent;
  let fixture: ComponentFixture<FavoritPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
