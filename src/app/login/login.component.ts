import { Component, OnInit } from "@angular/core";
import { SelectorMatcher } from "@angular/compiler";
import { LoginService } from "../login.service";
import { User } from "../user";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  email: string;
  password: string;
  validUser: boolean;

  validate() {
    let user = new User();
    user.email = this.email;
    user.password = this.password;
    this.loginService.loginUsers(user).subscribe(data => {
      this.validUser = data;
      console.log(data);
      console.log(this.validUser);
    });
  }

  ngOnInit() {}
}
