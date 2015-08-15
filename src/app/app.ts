/// <reference path="../../typings.d.ts" />

import {directive} from 'ng-annotations';
import {AppCtrl} from './appCtrl';

@directive()
export class myApp {
    restrict = 'E'
    controller = AppCtrl
    controllerAs = 'app'
    template = `<div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>{{app.title}}</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <car></car>
                        </div>
                    </div>
                </div>
            `
}

