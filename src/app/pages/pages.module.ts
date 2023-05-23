import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent,
    ],
    imports: [
        CommonModule,
        RoutingModule,
        SharedModule
    ]
})
export class PagesModule { }
