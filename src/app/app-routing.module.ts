import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './webPages/home-page/home-page.component';
import {UserPageComponent} from './webPages/user-page/user-page.component';
import {UserFormComponent} from './webPages/user-form/user-form.component';
import {PageNotFoundComponent} from './webPages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'user/:id', component: UserPageComponent },
  { path: 'create-user', component: UserFormComponent },
  { path: 'apply-membership/:id', component: UserFormComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
