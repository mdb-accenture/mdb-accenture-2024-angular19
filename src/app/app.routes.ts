import { Routes } from '@angular/router';
import { CtrlContactComponent } from './controllers/ctrl-contact/ctrl-contact/ctrl-contact.component';
import { CtrlContactDetailsComponent } from './controllers/ctrl-contact/ctrl-contact-details/ctrl-contact-details.component';
import { CtrlNotFoundComponent } from './controllers/ctrl-not-found/ctrl-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: CtrlContactComponent },
    { path: 'home/:id', component: CtrlContactDetailsComponent },
    { path: 'not-found', component: CtrlNotFoundComponent},
    { path: '**', redirectTo: 'not-found'}
];
