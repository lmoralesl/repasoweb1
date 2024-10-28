import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { SeriesComponent } from './pages/series/series.component';
import { GestionPersonalComponent } from './pages/gestion-personal/gestion-personal.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesSeriesComponent } from './pages/detalles-series/detalles-series.component';
import { EditarComponent } from './pages/editar/editar.component';

export const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'gestion', component: GestionPersonalComponent},

    {path: 'series/:idSeries',component: DetallesSeriesComponent},
    {path: 'editar/:idPersonal', component:EditarComponent},


    {path: '**', component: Error404Component}




];
