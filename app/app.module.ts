
//import angular code modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';


//import custom modules
import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile.component';

@NgModule({
  imports:      [ 
  					BrowserModule,
  					HttpModule,
  					FormsModule
  				], //imports finished
  declarations: [ 
  					AppComponent,
  					ProfileComponent
  				],//declarations finished
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
