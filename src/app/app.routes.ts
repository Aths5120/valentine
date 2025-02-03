import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ReasonComponent } from './pages/reason/reason.component';
import { reasonGuard } from './guard/reason.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'reason/:id',
    component: ReasonComponent,
    // canActivate: [reasonGuard],
  },
];
