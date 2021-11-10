import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { ListComponent } from './list/list.component';

/* Traduction de la date en français  */
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import  localeFrExtra  from '@angular/common/locales/extra/fr';
import { PostService } from './sevices/post.service';

registerLocaleData(localeFr,'fr-FR',localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ListComponent,
  ],
  imports: [
    
    BrowserModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
