import {MessageServiceSpy} from "../Mock/MessageServiceSpy";
import {ToastProxy} from "../../src/lib/Service/Impl/ToastProxy";

describe('Module: Alert', () => {
    describe('Class: ToastProxy', () => {

        let toastProxy = null;
        beforeEach(() => {
            toastProxy = new ToastProxy(<any> new MessageServiceSpy());
        });
        describe('Upon New Instance', () => {

            function assertMethodExists(methodName) {
                expect(typeof toastProxy.service[methodName] === 'undefined').toBeFalsy(`The ${methodName} method was undefined`);
            }

            it('should be loaded with a message service that has the required methods', () => {
                assertMethodExists('success');
                assertMethodExists('error');
                assertMethodExists('info');
                assertMethodExists('warning');
            });
        });
        describe('After Instantiation', () => {
            function assertServiceMethodIsInvoked(methodName) {
                let executed                                = false;
                toastProxy.service[methodName + 'Callback'] = () => {
                    executed = true;
                };
                toastProxy[methodName]();
                expect(executed).toBeTruthy();
            }

            describe('Method: Success', () => {

                it('should call the service', () => {
                    assertServiceMethodIsInvoked('success');
                });
            });

            describe('Method: Error', () => {

                it('should call the service', () => {
                    assertServiceMethodIsInvoked('error');
                });
            });

            describe('Method: Info', () => {

                it('should call the service', () => {
                    assertServiceMethodIsInvoked('info');
                });
            });

            describe('Method: Warning', () => {

                it('should call the service', () => {
                    assertServiceMethodIsInvoked('warning');
                });
            });
        });
    });
});
