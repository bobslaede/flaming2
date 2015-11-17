/// <reference path="../../../typings.d.ts" />

import {directive} from 'ng-annotations';
import {UserCtrl} from './userCtrl';

@directive()
export class userView {
    controller = 'UserCtrl as userCtrl'
    template = `<div>
    VIEW

    {{userCtrl.user.name}}

    <form name="user" ng-submit="userCtrl.save(userCtrl.user)">
        <label>
            <input type="text" ng-model="userCtrl.user.name">
        </label>
        <button>Save</button>
    </form>

    <button class="btn btn-danger" ng-click="userCtrl.remove(userCtrl.user)">delete me</button>
    </div>`;
}