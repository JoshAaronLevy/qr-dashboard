import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { getStoredUser } from "src/shared/userHelper";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  user: any;
  displayName: string;
  isCollapsed = true;

  constructor(private router: Router) {
    router.events.subscribe(val => {
      this.isCollapsed = true;
    });
  }

  mobileView(){
    if (window.innerWidth < 992) {
        return true;
    }
    return false;
  }

  ngOnInit() {
    this.user = getStoredUser();
    const sessionToken = localStorage.getItem("sessionToken");
    if (!sessionToken) {
      this.router.navigate(['/login']);
    }
    this.displayName = this.user.firstName;
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  goHome() {
    this.router.navigate(['/dashboard']);
  }
}
