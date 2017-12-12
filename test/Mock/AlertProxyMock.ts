import {AlertProxy} from "../../src/app/Service/Interface/AlertProxy";
import {EventEmitter} from "@angular/core";

export class AlertProxyMock implements AlertProxy {

    onCall = new EventEmitter<any>();

    /* istanbul ignore next */
    success(message?: string, title?: string, override?: any): any {
        this.onCall.emit({method: 'success', message});
        return {onHidden: new EventEmitter<any>()};
    }

    /* istanbul ignore next */
    error(message?: string, title?: string, override?: any): any {
        this.onCall.emit({method: 'error', message});
        return {onHidden: new EventEmitter<any>()};
    }

    /* istanbul ignore next */
    info(message?: string, title?: string, override?: any): any {
        this.onCall.emit({method: 'info', message});
        return {onHidden: new EventEmitter<any>()};
    }

    /* istanbul ignore next */
    warning(message?: string, title?: string, override?: any): any {
        this.onCall.emit({method: 'warning', message});
        return {onHidden: new EventEmitter<any>()};
    }

}
