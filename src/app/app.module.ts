import { CartModule } from './cart/cart.module';
import { OrderModule } from './orders/order.modules';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { Eror404Component } from './error-404.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { UserModule } from './users/user.module';
import { FormsModule } from '@angular/forms';
import { UserInfoService } from './userinfo.service';
import { LoginGuard } from './login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

let appRules =[
    {"path":"","component":HomeComponent },
    {"path":"home","component":HomeComponent },
    {"path":"contact","component":ContactComponent },
    {"path":"about","component":AboutComponent },
    {"path":"**","component":Eror404Component }
]

@NgModule({
    declarations: [AppComponent,HomeComponent,AboutComponent,ContactComponent,Eror404Component],
    imports: [ BrowserModule,
               FormsModule,
               SharedModule,
               UserModule,
               ProductModule,
               CartModule,
               OrderModule,
               RouterModule.forRoot(appRules),
               RouterModule,
               BrowserAnimationsModule,
               ToastrModule.forRoot()],
    providers:[UserInfoService,LoginGuard ],
    bootstrap:[AppComponent]
})
export class AppModule {

}