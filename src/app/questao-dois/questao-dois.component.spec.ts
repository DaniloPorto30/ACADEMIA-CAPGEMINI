import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoDoisComponent } from './questao-dois.component';

describe('QuestaoDoisComponent', () => {
  let component: QuestaoDoisComponent;
  let fixture: ComponentFixture<QuestaoDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestaoDoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestaoDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
