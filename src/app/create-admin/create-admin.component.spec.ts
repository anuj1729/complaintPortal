import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminComponent } from './create-admin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ServerService } from '../server.service';

describe('CreateAdminComponent', () => {
  let component: CreateAdminComponent;
  let fixture: ComponentFixture<CreateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAdminComponent],
      imports: [FormsModule, RouterTestingModule, HttpModule],
      providers: [ServerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
