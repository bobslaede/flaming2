/// <reference path="../../typings/tsd.d.ts" />

import * as angular from 'angular'

var foo = angular.module('app', [])
    .directive('myApp', function () {
        return {
            restrict: 'E',
            scope: true,
            template: `
                <paper-drawer-panel>
                  <paper-header-panel drawer>
                    <paper-toolbar>
                      <div>Application</div>
                    </paper-toolbar>
                    <div>
                        <paper-menu ng-attr-selected="{{app.selected}}">
                            <paper-item>
                                <span ng-repeat="item in app.menuItems">{{item}}</span>
                            </paper-item>
                        </paper-menu>
                    </div>
                  </paper-header-panel>
                  <paper-header-panel main>
                    <paper-toolbar>
                      <paper-icon-button icon="menu" paper-drawer-toggle></paper-icon-button>
                      <div>Title</div>
                    </paper-toolbar>
                    <div> Main content...

                        <p>
                            <div class="icons">
                                eject
                            </div>
                        </p>
                    </div>
                  </paper-header-panel>
                </paper-drawer-panel>
            `,
            controllerAs: 'app',
            controller: function () {
                this.menuItems = ['foo','bar','baz'];
                this.selected = 1;
            }
        }
    })

export var app = foo;