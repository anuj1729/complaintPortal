import { ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintDetailComponent } from './complaint-detail.component';
import { ServerService } from '../server.service';

describe('ComplaintDetailComponent', () => {
  let component: ComplaintDetailComponent;
  let fixture: ComponentFixture<ComplaintDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintDetailComponent],
      providers: [ServerService],
      imports: [HttpModule, ActivatedRoute]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
