import { UserService } from './user.service';
import { LoginComponent } from './login.component';
import { UserRoutingModule } from './user.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    imports: [ CommonModule,FormsModule,UserRoutingModule ],
    exports: [],
    providers: [UserService],
})
export class UserModule {}