/// <reference path="../../typings.d.ts" />

import {controller, inject} from 'ng-annotations';

@controller()
@inject('$http')
export class AppCtrl {
    button:string = '';

    constructor($http:ng.IHttpService) {
        this.button = 'foo bar';

        $http.get('../package.json')
            .then(res => res.data)
            .then(data => {
                this.button = `${data.name} - version: ${data.version}`
            });
    }
}