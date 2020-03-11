import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ValueComponent } from './value/value.component';
import { StudentComponent } from './student/student.component';
import { PostComponent } from './post/post.component';
import { MyPostComponent } from './my-post/my-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    StudentComponent,
    PostComponent,
    MyPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
