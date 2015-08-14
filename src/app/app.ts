/// <reference path="../../typings.d.ts" />

import {directive} from 'ng-annotations';
import {AppCtrl} from './appCtrl';

@directive('myApp')
export class MyApp {
    restrict = 'E'
    controller = AppCtrl
    controllerAs = 'app'
    template = `
                <div>
                    <h1>My App</h1>
                    <hr/>
                    <button>
                        {{app.button}}
                    </button>
                    <hr/>
                </div>
            `
}
