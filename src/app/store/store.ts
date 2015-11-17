/// <reference path="../../../typings.d.ts" />

import {service, inject} from 'ng-annotations';
import * as angular from 'angular';

export enum StoreEvents {
    set,
    add,
    remove
}

export interface StoreModel {
    id: string
}

@service()
@inject('$window')
export class Store {

    private data = [];
    private listeners = {};
    private storageKey: string;

    idField = 'id';

    private storageType:string = 'localStorage'

    model: StoreModel;

    constructor(private $window) {
        this.storageKey = `store-${(<any>this.constructor).name}`;

        let json = this.$window[this.storageType].getItem(this.storageKey);
        try {
            let data = JSON.parse(json);
            this.set(data);
        } catch (e) { }
    }

    guid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    create():StoreModel {
        return angular.extend({}, this.model || {}, {
            [this.idField]: this.guid()
        });
    }

    dispatch(event: StoreEvents, ...args: any[]) {
        (this.listeners[event] || [])
            .forEach(cb => cb(...args));
    }

    on(event: StoreEvents, callback: Function) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(callback);
    }

    remove(item: StoreModel) {
        this.set(this.get().filter(i => i[this.idField] !== item[this.idField]));
        this.dispatch(StoreEvents.remove);
    }

    update(item: StoreModel) {
        if (!item[this.idField]) {
            throw `No ID field ${this.idField} on model`;
        }
        let data = this.get().map(i => {
            if (i[this.idField] === item[this.idField]) {
                i = angular.copy(item, i);
            }
            return i;
        });
        this.set(data);
    }

    add(item: StoreModel) {
        let data = this.get();
        let model = angular.copy(item);
        if (!model[this.idField]) {
            model[this.idField] = this.guid();
        }
        data.push(model);
        this.set(data);
        this.dispatch(StoreEvents.add, model);
    }

    get() {
        return this.data.slice();
    }

    getById(id: string) {
        return angular.copy(this.get().filter(item => item[this.idField] == id).pop());
    }

    set(data: any) {
        this.data = data.slice();
        let json = JSON.stringify(this.data);
        this.$window[this.storageType].setItem(this.storageKey, json);
        this.dispatch(StoreEvents.set);
    }

}
