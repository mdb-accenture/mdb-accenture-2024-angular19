import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'home/:id', component: ContactDetailComponent },
    { path: 'not-found', component: NotFoundComponent},
    { path: '**', redirectTo: 'not-found'}
];
