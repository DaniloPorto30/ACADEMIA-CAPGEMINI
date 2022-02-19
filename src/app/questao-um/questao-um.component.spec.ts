import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoUmComponent } from './questao-um.component';

describe('QuestaoUmComponent', () => {
  let component: QuestaoUmComponent;
  let fixture: ComponentFixture<QuestaoUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestaoUmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestaoUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
