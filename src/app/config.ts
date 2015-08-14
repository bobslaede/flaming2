/// <reference path="../../typings.d.ts" />

import {config, inject} from 'ng-annotations';
import {authentication} from './authentication/authentication';

@config()
@inject('$httpProvider')
export class config {
    constructor(private $httpProvider:ng.IHttpProvider) {
        console.log('conf');

        $httpProvider.interceptors.push(this.authenticationInterceptor())
    }

    authenticationInterceptor() {
        return function(authentication:authentication) {
            return {
                request: (config) => {
                    return authentication.getToken()
                            .then(token => {
                                config.headers['Authentication'] = `Bearer: ${token}`
                                return config;
                            });
                }
            }
        }
    }

}