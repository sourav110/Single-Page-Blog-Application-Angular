import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ValueComponent } from './value/value.component';
import { PostComponent } from './post/post.component';
import { MyPostComponent } from './my-post/my-post.component';


const routes: Routes = [
  {path: 'values', component: ValueComponent},
  {path: 'students', component: StudentComponent},
  {path: 'posts', component: PostComponent},
  {path: 'myposts', component: MyPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
