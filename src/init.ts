﻿/// <reference path="../typings.d.ts" />

import * as angular from 'angular';
import {components} from './components';
import 'angular-ui-router';

let app = angular.module('userListApp', ['ui.router']);

var declareComponents = (components:any[], app:ng.IModule) => {
    components.forEach(component => {
        if (Array.isArray(component)) {
            declareComponents(component, app);
        } else {
            if (<any>component.$name) {
                console.log(<any>component.$name);
                <any>component.autodeclare(app);
            }
        }
    })
}

declareComponents(components, app);

angular.bootstrap(document.documentElement, [app.name]);

export default app;
