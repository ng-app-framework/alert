export function alert(target: any, propertyName: string, descriptor: any) {
    let method = descriptor.value;


    descriptor.value = function (...args: any[]) {
        let result = method.apply(this, arguments);
        window['$alert'][result.type](result.message, result.title || null, result.options || {});
        return result;
    };

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
