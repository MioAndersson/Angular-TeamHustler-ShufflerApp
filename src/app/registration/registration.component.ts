import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { RegisterService } from "../register.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  constructor(private registerService: RegisterService) {}

  email: string;
  password: string;

  registerUser() {
    let user = new User();
    user.email = this.email;
    user.password = this.password;
    this.registerService.registerUsers(user);
  }

  ngOnInit() {}
}
