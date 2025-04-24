import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration,withEventReplay } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicbindingComponent } from './dynamicbinding/dynamicbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
