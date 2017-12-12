import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {AlertProxy} from "../Interface/AlertProxy";

@Injectable()
export class ToastProxy implements AlertProxy {

    static timeout: number = 4000;

    constructor(public service: ToastrService) {
    }

    success(message?: string, title?: string, override?: any): any {
        return this.service.success(message, title, this.getOverrides(override));
    }

    error(message?: string, title?: string, override?: any): any {
        return this.service.error(message, title, this.getOverrides(override));
    }

    info(message?: string, title?: string, override?: any): any {
        return this.service.info(message, title, this.getOverrides(override));
    }

    warning(message?: string, title?: string, override?: any): any {
        return this.service.warning(message, title, this.getOverrides(override));
    }

    private getOverrides(override: any) {
        return Object.assign({
            enableHtml    : true,
            positionClass : 'toast-bottom-right',
            timeOut       : ToastProxy.timeout,
            onActivateTick: true
        }, override || {});
    }
}
