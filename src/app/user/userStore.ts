/// <reference path="../../../typings.d.ts" />

import {service, inject} from 'ng-annotations';
import {Store, StoreEvents, StoreModel} from '../store/store';

export var UserEvents = StoreEvents;

export interface UserModel extends StoreModel {
    name:string
}

@service('userStore')
export class UserStore extends Store{
}