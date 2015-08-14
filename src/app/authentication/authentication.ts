/// <reference path="../../../typings.d.ts" />

import {service, inject} from 'ng-annotations';

@service()
@inject('$window', '$q')
export class authentication {

    constructor(private $window:ng.IWindowService, private $q:ng.IQService) {

    }

    getToken():ng.IPromise<string> {
        return new this.$q((resolve, reject) => {
            resolve('foo-bar-baz');
        })
    }

}