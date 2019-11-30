import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { Localization } from '../localization/localization';

@Component({
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
    public constructor(private title: Title) {
        title.setTitle(Localization.getString("home"));
    }
}