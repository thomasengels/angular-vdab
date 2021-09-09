import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowAddComponent } from './tv-show-add.component';

describe('TvShowAddComponent', () => {
  let component: TvShowAddComponent;
  let fixture: ComponentFixture<TvShowAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
