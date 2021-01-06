import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckerComponent } from './pages/checker/checker.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PredictionComponent } from './pages/prediction/prediction.component';
import { IssueInfoComponent } from './pages/issue-info/issue-info.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'symptom-check',
    component: CheckerComponent,
  },
  {
    path: 'prediction',
    component: PredictionComponent,
  },
  {
    path: 'issue-info/:id',
    component: IssueInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
