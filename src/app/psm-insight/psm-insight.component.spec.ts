import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsmInsightComponent } from './psm-insight.component';

describe('PsmInsightComponent', () => {
  let component: PsmInsightComponent;
  let fixture: ComponentFixture<PsmInsightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsmInsightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsmInsightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
