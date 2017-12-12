import {AlertProxy} from "../../src/app/Service/Interface/AlertProxy";

export class MessageServiceSpy implements AlertProxy {

    /* istanbul ignore next */
    error(message?: string, title?: string, override?: any) {
        return this.errorCallback();
    }

    /* istanbul ignore next */
    success(message?: string, title?: string, override?: any) {
        return this.successCallback();
    }

    /* istanbul ignore next */
    info(message?: string, title?: string, override?: any) {
        return this.infoCallback();
    }

    /* istanbul ignore next */
    warning(message?: string, title?: string, override?: any) {
        return this.warningCallback();
    }

    /* istanbul ignore next */
    errorCallback() {

    }

    /* istanbul ignore next */
    successCallback() {

    }

    /* istanbul ignore next */
    infoCallback() {

    }

    /* istanbul ignore next */
    warningCallback() {

    }
}
