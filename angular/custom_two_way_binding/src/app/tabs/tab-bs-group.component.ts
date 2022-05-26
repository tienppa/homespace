import { Component } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'tab-bs-group',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item" *ngFor="let tab of tabPanelList; index as idx">
        <a
          class="nav-link"
          (click)="activeIndexChange.emit(idx)"
          [class.active]="idx === activeIndex"
          href="#"
        >
          {{ tab.title }}
          <button class="btn btn-primary" (click)="removeTab(tab)">x</button>
        </a>
      </li>
    </ul>

    <div class="tab-body" *ngIf="tabPanelList.length; else noTabs">
      <ng-container
        *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"
      ></ng-container>
    </div>

    <ng-template #noTabs> No more tabs. </ng-template>
  `,
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBsGroupComponent,
    },
  ],
})
export class TabBsGroupComponent extends TabGroupComponent {}
