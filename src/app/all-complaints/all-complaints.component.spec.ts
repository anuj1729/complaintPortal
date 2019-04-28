import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AllComplaintsComponent } from './all-complaints.component';
import { RouterModule } from '@angular/router';
import { ServerService } from '../server.service';

describe('AllComplaintsComponent', () => {
  let component: AllComplaintsComponent;
  let fixture: ComponentFixture<AllComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllComplaintsComponent],
      imports: [RouterModule, RouterTestingModule, FormsModule, HttpModule],
      providers: [ServerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
