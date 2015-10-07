/// <reference path="../../typings.d.ts" />

import {config, inject} from 'ng-annotations';
import {Authentication} from './authentication/authentication';

@config()
@inject('$httpProvider', '$stateProvider', '$urlRouterProvider')
export class Config {

    constructor(private $httpProvider:ng.IHttpProvider,
                private $stateProvider:angular.ui.IStateProvider,
                private $urlRouterProvider:angular.ui.IUrlRouterProvider) {
        this.$httpProvider.interceptors.push(this.authenticationInterceptor())

        this.configRoutes();
    }

    configRoutes() {
        this.$stateProvider
            .state('list', {
                url: '/list',
                template: `<car-list></car-list>`
            })
            .state('add', {
                url: '/add',
                template: `<car-add></car-add>`
            })
            .state('edit', {
                url: '/edit/:id',
                template: `<car-add></car-add>`
            })

        this.$urlRouterProvider
            .otherwise('list')
    }

    authenticationInterceptor() {
        return ['authentication', function(authentication:Authentication) {
            return {
                request: (config) => {
                    return authentication.getToken()
                            .then(token => {
                                config.headers['Authentication'] = `Bearer: ${token}`
                                return config;
                            });
                }
            }
        }]
    }

}