import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCompsComponent } from './common-comps.component';

describe('CommonCompsComponent', () => {
  let component: CommonCompsComponent;
  let fixture: ComponentFixture<CommonCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonCompsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
