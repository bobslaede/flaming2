/// <reference path="../../../typings.d.ts" />

import {directive} from 'ng-annotations';
import {UserCtrl} from './userCtrl';

@directive()
export class userList {
    controller = UserCtrl
    controllerAs = 'userCtrl'
    template = `<div>MY USER LIST
        <ul>
            <li ng-repeat="user in userCtrl.users track by user.id">
                <a ui-sref="userEdit({id: user.id})">{{user.name}}</a>
            </li>
        </ul>
    </div>`
}