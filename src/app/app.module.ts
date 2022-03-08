import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyBootstrapModalComponent } from './my-bootstrap-modal/my-bootstrap-modal.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, MyBootstrapModalComponent],
  bootstrap: [AppComponent],
  entryComponents: [MyBootstrapModalComponent],
})
export class AppModule {}
