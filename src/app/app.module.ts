import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './webPages/home-page/home-page.component';
import { UserPageComponent } from './webPages/user-page/user-page.component';
import { UserFormComponent } from './webPages/user-form/user-form.component';
import { MembershipFormComponent } from './webPages/membership-form/membership-form.component';
import { PageNotFoundComponent } from './webPages/page-not-found/page-not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { LyHammerGestureConfig, LyThemeModule, LY_THEME, LY_THEME_NAME, StyleRenderer, LyTheme2 } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';
import {LyIconModule} from '@alyle/ui/icon';
import {CropperWithDialogAppModule} from './webPages/user-form/cropper-with-dialog/cropper-with-dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserPageComponent,
    UserFormComponent,
    MembershipFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HammerModule,
    LyIconModule,
    CropperWithDialogAppModule,
  ],
  providers: [
    UserService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
    StyleRenderer,
    LyTheme2,
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
