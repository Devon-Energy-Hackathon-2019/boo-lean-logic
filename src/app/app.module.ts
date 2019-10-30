import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { FileDropComponent } from './components/file-drop/file-drop.component';
import { Adal8Service, Adal8HTTPService } from 'adal-angular8';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatIconModule,MatFormFieldModule,MatSelectModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ReactiveFormsModule} from '@angular/forms';
import { ThinSectionsComponent } from './components/thin-sections/thin-sections.component';
import { ThinSectionPageComponent } from './views/thin-section-page/thin-section-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { CuttingsComponent } from './components/cuttings/cuttings.component';
import { ModelsComponent } from './components/models/models.component';
import { PredictionsComponent } from './components/predictions/predictions.component';
import { HomePageComponent } from './views/home-page/home-page/home-page.component';
import { LabelCuttingsPageComponent } from './views/label-cuttings-page/label-cuttings-page/label-cuttings-page.component';
import { CameraPageComponent } from './views/camera-page/camera-page/camera-page.component';
import { CallbackPipe } from './pipes/arrayFilterPipe';
import { ThinSectionsPipe } from './pipes/thin-section-pipe';
import { MlModelsComponent } from './components/ml-models/ml-models.component';

@NgModule({
  declarations: [
    AppComponent,
    FileDropComponent,
    ThinSectionsComponent,
    ThinSectionPageComponent,
    AuthComponent,
    CuttingsComponent,
    ModelsComponent,
    PredictionsComponent,
    HomePageComponent,
    LabelCuttingsPageComponent,
    CameraPageComponent,
    CallbackPipe,
    ThinSectionsPipe,
    MlModelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule,
    BrowserAnimationsModule,
    MatButtonModule,MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    ReactiveFormsModule
  ],
  providers: [
    Adal8Service,
    { provide: Adal8HTTPService, useFactory: Adal8HTTPService.factory, deps: [HttpClientModule, Adal8Service] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
