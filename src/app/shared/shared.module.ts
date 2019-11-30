import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header.component";
import { FooterComponent } from "./components/footer.component";
import { LoadingComponent } from "./components/loading.component";
import { LocalizationPipe } from "./localization/localization.pipe";
import { ValidationService } from "./validation/validation.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotFoundComponent } from "./components/notFound.component";
import { ErrorComponent } from "./components/error.component";
import { HomeComponent } from './components/home.component';

@NgModule({
    imports: [
        RouterModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    // dynamic components resolved by type
    entryComponents: [],
    exports: [
        LocalizationPipe,
        HeaderComponent,
        FooterComponent,
        LoadingComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        LoadingComponent,
        LocalizationPipe,
        NotFoundComponent,
        ErrorComponent,
        HomeComponent
    ]
})
export class SharedModule {

    // providers will be singleton and when we use this module in other modules
    // they will not have information regarding providers
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ValidationService
            ]
        };
    }
}