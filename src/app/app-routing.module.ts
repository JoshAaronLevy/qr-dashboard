import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterpageComponent } from "./pages/registerpage/registerpage.component";
import { AccountsettingsComponent } from "./pages/accountsettings/accountsettings.component";
import { LoginpageComponent } from "./pages/loginpage/loginpage.component";
import { ProductpageComponent } from "./pages/productpage/productpage.component";
import { QRCodesComponent } from "./pages/qrcodes/qrcodes.component";
import { QRCodeDetailsComponent } from "./pages/qrcodedetails/qrcodedetails.component";

const routes: Routes = [
  { path: "", redirectTo: "qrcodes", pathMatch: "full" },
  { path: "login", component: LoginpageComponent },
  { path: "signup", component: RegisterpageComponent },
  { path: "qrcodes", component: QRCodesComponent },
  { path: "qrcodes/:id", component: QRCodeDetailsComponent },
  { path: "qrcodes/create", component: ProductpageComponent },
  { path: "account", component: AccountsettingsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
