import {Component, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgAlertModule} from "../lib/NgAlertModule";
import {ToastProxy} from "../lib/Service/Impl/ToastProxy";

@Component({
    selector: 'app',
    template: `
        <div>It works!</div>
    `
})
export class AppComponent {

    constructor(public alert: ToastProxy) {
        document.onkeypress = (event) => {
            if (event.which === 13) {
                alert.success('You pressed the Enter key!');
            }
        }
    }
}

@NgModule({
    declarations: [AppComponent],
    imports     : [
        BrowserModule,
        CommonModule,
        NgAlertModule
    ],
    exports     : [AppComponent],
    providers   : [],
    bootstrap   : [AppComponent]

})
export class AppModule {

}
