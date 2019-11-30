import {
  Component
} from "@angular/core";

@Component({
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  selector: "app-footer"
})
export class FooterComponent {
  public currentYear: number = new Date().getFullYear();

}
