/// <reference path="../../../typings.d.ts" />

import {directive} from 'ng-annotations';
import {UserCtrl} from './userCtrl';

@directive()
export class userAdd {
    controller = UserCtrl
    controllerAs = 'userCtrl'
    template = `<form name="user" ng-submit="userCtrl.add(user.name)">
        <label>
            <input type="text" ng-model="user.name">
        </label>
        <button>Save</button>
    </form>
    <hr>
    <user-list></user-list>
    `;
}