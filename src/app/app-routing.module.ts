import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProductListComponent } from "./pages/productlist/productlist.component";
import { ProductDetailsComponent } from "./pages/productdetails/productdetails.component";
import { ProfileComponent } from "./pages/profile/profile.component";

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: RegisterComponent },
  { path: "products", component: ProductListComponent },
  { path: "products/:id", component: ProductDetailsComponent },
  { path: "products/create", component: ProductDetailsComponent },
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
