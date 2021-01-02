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
import { PgListComponent } from './components/programme-and-courses/postgraduate/pg-list/pg-list.component';
import { PgDetailComponent } from './components/programme-and-courses/postgraduate/pg-detail/pg-detail.component';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { FilterPipe } from '../shared/filter.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ProgrammeAndCoursesComponent,
    FacultiesComponent,
    AchievementsComponent,
    ResearchComponent,
    DataEntryComponent,
    DeptComponent,
    PgListComponent,
    PgDetailComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    CseNitkRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class CseNitkModule { }
