import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { QRCodesComponent } from "./pages/qrcodes/qrcodes.component";
import { QRCodeDetailsComponent } from "./pages/qrcodedetails/qrcodedetails.component";
import { ProfileComponent } from "./pages/profile/profile.component";

const routes: Routes = [
  { path: "", redirectTo: "qrcodes", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: RegisterComponent },
  { path: "qrcodes", component: QRCodesComponent },
  { path: "qrcodes/:id", component: QRCodeDetailsComponent },
  { path: "qrcodes/create", component: QRCodeDetailsComponent },
  { path: "profile", component: ProfileComponent }
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
