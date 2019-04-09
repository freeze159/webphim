import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TrangChuModule } from './modules/layout/trang-chu/trang-chu.module'
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const appRoute: Routes = [
  { path: 'home', loadChildren: () => TrangChuModule },
  { path: '', loadChildren: () => TrangChuModule },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TrangChuModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
