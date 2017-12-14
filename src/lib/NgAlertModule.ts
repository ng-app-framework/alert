import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ToastrModule, ToastContainerModule} from "ngx-toastr";
import {ToastProxy} from "./Service/Impl/ToastProxy";
import {AlertProxy} from "./Service/Interface/AlertProxy";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports  : [
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({positionClass: 'toast-bottom-right', onActivateTick: true, preventDuplicates: true}),
        ToastContainerModule
    ],
    providers: [
        ToastProxy,
        {
            provide    : AlertProxy,
            useExisting: ToastProxy
        }
    ]
})
export class NgAlertModule {

}
