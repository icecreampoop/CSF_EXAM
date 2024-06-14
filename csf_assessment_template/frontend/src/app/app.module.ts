import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './views/main.component';
import { PictureComponent } from './views/picture.component';
import { RouterModule, Routes } from '@angular/router';
import { CameraService } from './camera.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { UploadService } from './upload.service';
import { DatePipe } from '@angular/common';

const appsRoute: Routes = [
  { path: '', component: MainComponent},
  { path: 'upload', component: PictureComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent, MainComponent, PictureComponent
  ],
  imports: [
    RouterModule.forRoot(appsRoute),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    WebcamModule
  ],
  providers: [ CameraService, UploadService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
