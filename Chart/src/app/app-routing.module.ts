import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '',component:ChartComponent},
  {path: 'posts',component:PostsComponent},
  {path: 'detailspage',component:DetailspageComponent},
  {path: 'edit/:id', component: EditPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
