import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { NgxsModule } from '@ngxs/store';

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { PopoverModule } from "ngx-bootstrap/popover";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { RegisterpageComponent } from "./pages/registerpage/registerpage.component";
import { AccountsettingsComponent } from "./pages/accountsettings/accountsettings.component";
import { LoginpageComponent } from "./pages/loginpage/loginpage.component";
import { ProductpageComponent } from "./pages/productpage/productpage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PictureUploadComponent } from "./components/picture-upload/picture-upload.component";
import { QRCodesComponent } from "./pages/qrcodes/qrcodes.component";
import { QRCodeDetailsComponent } from "./pages/qrcodedetails/qrcodedetails.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent,
    AccountsettingsComponent,
    LoginpageComponent,
    QRCodesComponent,
    QRCodeDetailsComponent,
    ProductpageComponent,
    NavbarComponent,
    FooterComponent,
    PictureUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    // NgxsModule.forRoot([ZooState], {
    //   developmentMode: !environment.production
    // })
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
