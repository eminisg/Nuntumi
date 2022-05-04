import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ForgotComponent} from './forgot/forgot.component';
import {OtpComponent} from './otp/otp.component';
import {NgxMaskModule} from "ngx-mask";
import {VerifyDataDirective} from './derectives/verify-data.directive';
import {MainPageComponent} from './main-page/main-page.component';
import {HomeComponent} from './home/home.component';
import { TagsComponent } from './tags/tags.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NewPostComponent } from './new-post/new-post.component';
import { HelpComponent } from './help/help.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from "@angular/common/http";
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {AboutComponent} from "./about/about.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ArticlePageComponent } from './article-page/article-page.component';
import { SideBarMenuComponent } from './side-bar-menu/side-bar-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    OtpComponent,
    VerifyDataDirective,
    MainPageComponent,
    HomeComponent,
    TagsComponent,
    SignupComponent,
    ErrorPageComponent,
    ProfileComponent,
    OwlCarouselComponent,
    AboutComponent,
    ArticlePageComponent,
    SideBarMenuComponent,
    DashboardComponent,
    SettingsComponent,
    NewPostComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
}
