import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionfilterComponent } from './missionfilter.component';

describe('MissionfilterComponent', () => {
  let component: MissionfilterComponent;
  let fixture: ComponentFixture<MissionfilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionfilterComponent]
    });
    fixture = TestBed.createComponent(MissionfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
