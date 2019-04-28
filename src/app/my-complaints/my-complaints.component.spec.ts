import { HttpModule } from '@angular/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComplaintsComponent } from './my-complaints.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ServerService } from '../server.service';

describe('MyComplaintsComponent', () => {
  let component: MyComplaintsComponent;
  let fixture: ComponentFixture<MyComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyComplaintsComponent],
      imports: [RouterTestingModule, HttpModule],
      providers: [ServerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
