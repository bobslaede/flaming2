/// <reference path="../../typings.d.ts" />

import {directive} from 'ng-annotations';
import {AppCtrl} from './appCtrl';

@directive('myApp')
export class MyApp {
    restrict = 'E'
    controller = AppCtrl
    controllerAs = 'app'
    template = `
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>{{app.title}}</h1>
                        </div>
                    </div>
                </div>
            `
}
