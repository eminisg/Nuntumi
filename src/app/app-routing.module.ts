import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ForgotComponent} from "./forgot/forgot.component";
import {OtpComponent} from "./otp/otp.component";
import {HomeComponent} from "./home/home.component";
import {TagsComponent} from "./tags/tags.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthGuard} from "./services/auth.guard";
import {AboutComponent} from "./about/about.component";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SettingsComponent} from "./settings/settings.component";
import {NewPostComponent} from "./new-post/new-post.component";
import {HelpComponent} from "./help/help.component";

import {ArticlePageComponent} from "./article-page/article-page.component";


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'forgot-password', component: ForgotComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'otp-page', component: OtpComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'article', component: ArticlePageComponent, canActivate: [AuthGuard]},
  {path: 'tags', component: TagsComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: 'new-post', component: NewPostComponent, canActivate: [AuthGuard]},
  {path: 'help', component: HelpComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
