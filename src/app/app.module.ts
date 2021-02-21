import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { TestersTableComponent } from './testers-table/testers-table.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TestersTableComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
