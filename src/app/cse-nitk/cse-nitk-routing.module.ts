import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataEntryService } from '../shared/data-entry.service';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { HomeComponent } from './components/home/home.component';
import { PgDetailComponent } from './components/programme-and-courses/postgraduate/pg-detail/pg-detail.component';
import { PgListComponent } from './components/programme-and-courses/postgraduate/pg-list/pg-list.component';
import { ProgrammeAndCoursesComponent } from './components/programme-and-courses/programme-and-courses.component';
import { ResearchComponent } from './components/research/research.component';
import { NewsEntryComponent } from './components/data-entry/news-entry/news-entry.component'
const routes: Routes = [
{
  path: '',
  redirectTo:'home',
  pathMatch:'full'
},
{
  path:'home',
  component:HomeComponent
},
{
  path:'programme-and-courses',
  component:ProgrammeAndCoursesComponent,
  children:[
    {
      path:'pg-list',
      component:PgListComponent,
    },
    {
      path:'pg-detail',
      component:PgDetailComponent
    }
  ]
},
{
  path:'faculties',
  component:FacultiesComponent
},
{
  path:'achievements',
  component:AchievementsComponent
},
{
  path:'research',
  component:ResearchComponent
},
{
  path:'data-entry',
  component:DataEntryComponent
},
{
  path:'news-entry',
  component:NewsEntryComponent
},
{
  path: '**',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CseNitkRoutingModule { }
