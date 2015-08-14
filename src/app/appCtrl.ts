/// <reference path="../../typings.d.ts" />

import {controller, inject} from 'ng-annotations';

@controller()
@inject('$http')
export class AppCtrl {
    button:string

    constructor($http:ng.IHttpService) {
        this.button = 'foo bar';

        $http.get('../tsd.json')
            .then(foo => console.log(foo));
    }
}