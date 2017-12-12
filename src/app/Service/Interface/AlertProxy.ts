export abstract class AlertProxy {

    abstract error(message?: string, title?: string, override?: any): any;

    abstract success(message?: string, title?: string, override?: any): any;

    abstract info(message?: string, title?: string, override?: any): any;

    abstract warning(message?: string, title?: string, override?: any): any;
}
