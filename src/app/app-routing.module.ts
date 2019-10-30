import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThinSectionsComponent} from '../app/components/thin-sections/thin-sections.component';
import {FileDropComponent} from '../app/components/file-drop/file-drop.component';
import {CuttingsComponent} from '../app/components/cuttings/cuttings.component';
import {ModelsComponent} from '../app/components/models/models.component';
import {PredictionsComponent} from '../app/components/predictions/predictions.component';
import {HomePageComponent} from '../app/views/home-page/home-page/home-page.component'
import {LabelCuttingsPageComponent} from '../app/views/label-cuttings-page/label-cuttings-page/label-cuttings-page.component'
import { CameraPageComponent } from './views/camera-page/camera-page/camera-page.component';
import { MlModelsComponent } from './components/ml-models/ml-models.component';

const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'filedrop', component: FileDropComponent},
  { path: 'thinsections', component: ThinSectionsComponent },
  { path: 'cuttings', component: CuttingsComponent },
  { path: 'models', component: ModelsComponent },
  { path: 'predictions', component: PredictionsComponent },
  { path: 'label-cuttings', component: LabelCuttingsPageComponent},
  { path: 'camera', component: CameraPageComponent},
  { path: 'mlmodels', component: MlModelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
