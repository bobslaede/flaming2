/// <reference path="../../../typings.d.ts" />

import {service, inject} from 'ng-annotations';

let stores = {}


export enum StoreEvents {
    set
}

@service('store')
export class Store {

    private data = []
    private listeners = {}

    constructor() {

    }

    dispatch(event:StoreEvents) {
        (this.listeners[event] || [])
            .forEach(cb => cb());
    }

    on(event:StoreEvents, callback:Function) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(callback);
    }

    add(item:any) {
        let data = this.get();
        data.push(item);
        this.set(data);
    }

    get() {
        return this.data.slice()
    }

    set(data:any) {
        this.data = data.slice()
        this.dispatch(StoreEvents.set)
    }

}

