import { NgModule }      from '@angular/core';
import { RouterModule }  from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginService } from './login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from './register.service';

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
        ]),
        FormsModule,
        ReactiveFormsModule

    ],

    providers: [
        LoginService,
        RegisterService
    ]
})
export class HomeModule {
}