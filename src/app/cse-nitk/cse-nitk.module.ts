import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CseNitkRoutingModule } from './cse-nitk-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProgrammeAndCoursesComponent } from './components/programme-and-courses/programme-and-courses.component';
import { FacultiesComponent } from './components/faculties/faculties.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ResearchComponent } from './components/research/research.component';
import { DateEntryComponent } from './components/date-entry/date-entry.component';


@NgModule({
  declarations: [HomeComponent, ProgrammeAndCoursesComponent, FacultiesComponent, AchievementsComponent, ResearchComponent, DateEntryComponent],
  imports: [
    CommonModule,
    CseNitkRoutingModule
  ]
})
export class CseNitkModule { }
