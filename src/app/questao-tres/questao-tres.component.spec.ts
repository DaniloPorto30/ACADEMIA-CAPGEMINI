import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoTresComponent } from './questao-tres.component';

describe('QuestaoTresComponent', () => {
  let component: QuestaoTresComponent;
  let fixture: ComponentFixture<QuestaoTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestaoTresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestaoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
