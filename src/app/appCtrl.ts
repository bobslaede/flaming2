/// <reference path="../../typings.d.ts" />

import {controller, inject} from 'ng-annotations';

interface packageJson {
    name:string
    version:string
}

@controller()
@inject('$http')
export class AppCtrl {
    title:string = '';

    constructor($http:ng.IHttpService) {

        $http.get('../package.json')
            .then(res => res.data)
            .then((data:packageJson) => {
                this.title = `${data.name} - version: ${data.version}`
            });
    }
}