import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { SeriesComponent } from './pages/series/series.component';
import { GestionPersonalComponent } from './pages/gestion-personal/gestion-personal.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesSeriesComponent } from './pages/detalles-series/detalles-series.component';
import { EditarComponent } from './pages/editar/editar.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { privadoGuard } from './guards/privado.guard';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'gestion', component: GestionPersonalComponent},

    {path: 'series/:idSeries',component: DetallesSeriesComponent},
    {path: 'editar/:idPersonal', component:EditarComponent},

    /////////////////////////////////////////////////////////////

    {path: 'privado', component: PrivadoComponent, canActivate:[privadoGuard]},
    {path: 'login',component:LoginComponent},
    {path: 'registro',component: RegistroComponent},

    {path: '**', component: Error404Component}




];
