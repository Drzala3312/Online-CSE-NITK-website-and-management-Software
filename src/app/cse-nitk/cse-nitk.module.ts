import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CseNitkRoutingModule } from './cse-nitk-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProgrammeAndCoursesComponent } from './components/programme-and-courses/programme-and-courses.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ResearchComponent } from './components/research/research.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { DeptComponent } from './components/achievements/dept/dept.component';
import { NewsEntryComponent } from './components/data-entry/news-entry/news-entry.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { NewsAndEventsComponent } from './components/home/news-and-events/news-and-events.component';


@NgModule({
  declarations: [HomeComponent, ProgrammeAndCoursesComponent, FacultiesComponent, AchievementsComponent, ResearchComponent, DataEntryComponent, DeptComponent, NewsEntryComponent, NewsAndEventsComponent],
  imports: [
    CommonModule,
    CseNitkRoutingModule,
    JwPaginationModule
  ]
})
export class CseNitkModule { }
