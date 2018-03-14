export function alert(type: string, message: string, title?: string, options?: any) {
    return function (target: any, propertyName: string, descriptor: any) {
        let method = descriptor.value;


        descriptor.value = function (...args: any[]) {
            let result = method.apply(this, arguments);
            window['$alert'][type](message, title, options);
            return result;
        };

    }
}

window['$alert'] = window['$alert'] || {
    success: (message?: string, title?: string, override?: any) => {

    },

    error: (message?: string, title?: string, override?: any) => {
    },

    info: (message?: string, title?: string, override?: any) => {
    },

    warning: (message?: string, title?: string, override?: any) => {
    }
};
