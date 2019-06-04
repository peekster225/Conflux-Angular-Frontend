import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginService } from './login.service';
@NgModule({

    declarations: [
        HomeComponent
    ],

    imports: [
        RouterModule.forChild([
            {

                path: '',
                component: HomeComponent,
                pathMatch: 'full'

            }
        ])

    ],

    providers: [
        LoginService
    ]
})
export class HomeModule {
}