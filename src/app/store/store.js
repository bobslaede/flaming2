/// <reference path="../../../typings.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var ng_annotations_1 = require('ng-annotations');
var angular = require('angular');
(function (StoreEvents) {
    StoreEvents[StoreEvents["set"] = 0] = "set";
    StoreEvents[StoreEvents["add"] = 1] = "add";
    StoreEvents[StoreEvents["remove"] = 2] = "remove";
})(exports.StoreEvents || (exports.StoreEvents = {}));
var StoreEvents = exports.StoreEvents;
var Store = (function () {
    function Store() {
        this.data = [];
        this.listeners = {};
        this.idField = 'id';
        this.model = {};
        this.storageKey = "store-" + this.constructor.name;
        var json = window.localStorage.getItem(this.storageKey);
        try {
            var data = JSON.parse(json);
            this.set(data);
        }
        catch (e) { }
    }
    Store.prototype.guid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    Store.prototype.create = function () {
        return angular.extend({}, this.model, (_a = {},
            _a[this.idField] = this.guid(),
            _a
        ));
        var _a;
    };
    Store.prototype.dispatch = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (this.listeners[event] || [])
            .forEach(function (cb) { return cb.apply(void 0, args); });
    };
    Store.prototype.on = function (event, callback) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(callback);
    };
    Store.prototype.remove = function (item) {
        var _this = this;
        this.set(this.get().filter(function (i) { return i[_this.idField] !== item[_this.idField]; }));
        this.dispatch(StoreEvents.remove);
    };
    Store.prototype.update = function (item) {
        var _this = this;
        if (!item[this.idField]) {
            throw "No ID field " + this.idField + " on model";
        }
        var data = this.get().map(function (i) {
            if (i[_this.idField] == item[_this.idField]) {
                i = angular.copy(item, i);
            }
            return i;
        });
        this.set(data);
    };
    Store.prototype.add = function (item) {
        var data = this.get();
        var model = angular.copy(item);
        if (!model[this.idField]) {
            model[this.idField] = this.guid();
        }
        data.push(model);
        this.set(data);
        this.dispatch(StoreEvents.add, model);
    };
    Store.prototype.get = function () {
        return this.data.slice();
    };
    Store.prototype.getById = function (id) {
        var _this = this;
        return angular.copy(this.get().filter(function (item) { return item[_this.idField] == id; }).pop());
    };
    Store.prototype.set = function (data) {
        this.data = data.slice();
        this.dispatch(StoreEvents.set);
        var json = JSON.stringify(this.data);
        window.localStorage.setItem(this.storageKey, json);
    };
    Store = __decorate([
        ng_annotations_1.service('store')
    ], Store);
    return Store;
})();
exports.Store = Store;
