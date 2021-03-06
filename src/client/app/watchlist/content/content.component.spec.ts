/* tslint:disable:no-unused-variable */

import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { ContentComponent } from './index';

@Component({selector: 'mp-chart', template: ''})
class ChartComponent {}

@Component({selector: 'mp-info', template: ''})
class InfoComponent {}

@Component({selector: 'mp-news', template: ''})
class NewsComponent {}

export function main() {
  describe('ContentComponent', () => {
    let fixture:ComponentFixture<ContentComponent>;
    let component:ContentComponent;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          ContentComponent,
          ChartComponent,
          InfoComponent,
          NewsComponent
        ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ContentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
}
