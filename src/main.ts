/*!

 =========================================================
 * Argon Desing System PRO Angular - v1.2.0
 =========================================================

 * Product Page: https://www.qrdashboard.com/product/qr-dashboard
 * Copyright 2021 QR Dashboard (http://www.qrdashboard.com)

Coded by www.qrdashboard.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
