import { Component, OnInit } from "@angular/core";
import Headroom from "headroom.js";
import { Router } from '@angular/router';
import { getStoredUser } from "src/shared/userHelper";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  user: any;
  constructor(public router: Router){}

  ngOnInit() {
    const headroom = new Headroom(document.querySelector("#navbar-main"), {
      offset: 300,
      tolerance: {
        up: 30,
        down: 30
      },
    });
    headroom.init();
  }
}
