import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToggleComponent } from './toggle.component';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group.component';
import { CounterComponent } from './counter/counter.component';
import { TabContentDirective } from './tabs/tab-content.directive';
import { FormatAddressPipe } from './pipe/format-address.pipe';
import { AdultPipe } from './pipe/adult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToggleComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabBsGroupComponent,
    CounterComponent,
    TabContentDirective,
    FormatAddressPipe,
    AdultPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
