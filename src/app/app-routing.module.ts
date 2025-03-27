import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { ImagesPageComponent } from './pages/images-page/images-page.component';
import { HeadingsPageComponent } from './pages/headings-page/headings-page.component';
import { ContrastPageComponent } from './pages/contrast-page/contrast-page.component';

const routes: Routes = [
  { path: 'form', component: FormPageComponent },
  { path: 'images', component: ImagesPageComponent },
  { path: 'headings', component: HeadingsPageComponent },
  { path: 'contrast', component: ContrastPageComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: '**', redirectTo: '/form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
