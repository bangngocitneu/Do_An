import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

import { SharedComponent } from './shared.component';

const routes: Routes = [{ path: '', component: SharedComponent },
{ path: 'header', component: HeaderComponent },
{ path: 'footer', component: FooterComponent },
{ path: 'login', component: LoginComponent },
{ path: 'search', component: SearchComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
