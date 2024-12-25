import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from './auth.guard';
// import {Hom}

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component:AboutComponent, canActivate: [AuthGuard]},
  {path: 'projects', component:ProjectsComponent, canActivate: [AuthGuard]},
  {path: 'clients', component:ClientsComponent, canActivate: [AuthGuard]},
  {path: 'meetings', component:MeetingsComponent, canActivate: [AuthGuard]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
