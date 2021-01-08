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
import { NewsEntryComponent } from './components/data-entry/news-entry/news-entry.component';
import { FacultiesEntryComponent } from './components/data-entry/faculties-entry/faculties-entry.component';
import { PcEntryComponent } from './components/data-entry/pc-entry/pc-entry.component';
import { UgListComponent } from './components/programme-and-courses/undergraduate/ug-list/ug-list.component';
import { UgDetailComponent } from './components/programme-and-courses/undergraduate/ug-detail/ug-detail.component';
import { DrListComponent } from './components/programme-and-courses/doctoral/dr-list/dr-list.component';
import { DrDetailComponent } from './components/programme-and-courses/doctoral/dr-detail/dr-detail.component';
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
}, {
  path:'pg-list',
  component:PgListComponent,
},
{
  path:'pg-detail',
  component:PgDetailComponent
},
{
  path:'ug-list',
  component:UgListComponent
},
{
  path:'ug-detail',
  component:UgDetailComponent
},
{
  path:'dr-list',
  component:DrListComponent
},
{
  path:'dr-detail',
  component:DrDetailComponent
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
  path: 'faculties-entry',
  component: FacultiesEntryComponent
},
{
  path:'pc-entry',
  component:PcEntryComponent
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
