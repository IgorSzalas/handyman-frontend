import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionsPageComponent } from './opinions-page.component';

describe('OpinionsPageComponent', () => {
  let component: OpinionsPageComponent;
  let fixture: ComponentFixture<OpinionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpinionsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpinionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
