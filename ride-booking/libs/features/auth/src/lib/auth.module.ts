import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';

import { InterfacesModule } from '@ride-booking/interfaces';
import { LoginComponent } from './componets/login/login.component';

export const authRoutes: Route[] = [{
  path:'', component: LoginComponent
}];

@NgModule({
  imports: [CommonModule, RouterModule, BrowserAnimationsModule,
            AngularFirestoreModule, AngularFireModule,
            ReactiveFormsModule, MatFormFieldModule,
            MatInputModule, FlexLayoutModule, MatButtonModule,
            InterfacesModule

           ],
  declarations: [LoginComponent],
})
export class AuthModule {}
