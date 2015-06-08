/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2'

interface IItem {
    name: string
}

@Component({
    selector: 'my-app'
})
@View({
    directives: [NgFor],
    template: `
        <paper-drawer-panel>
          <paper-header-panel drawer>
            <paper-toolbar (click)="stuff2($event)">
              <div>Application</div>
            </paper-toolbar>
                <paper-menu>
                    <template [ng-for] #item [ng-for-of]="items" #i="index">
                        <paper-item tabindex="0" (click)="stuff($event, item)">
                            <paper-item-body two-line>
                                {{item.name}}
                            </paper-item-body>
                        </paper-item>
                    </template>
                </paper-menu>
          </paper-header-panel>
          <paper-header-panel main>
            <paper-toolbar>
              <paper-icon-button icon="menu" paper-drawer-toggle></paper-icon-button>
              <div>Title</div>
            </paper-toolbar>
            <div> Main content...
                <div class="icons">
                    eject
                </div>
            </div>
          </paper-header-panel>
        </paper-drawer-panel>
    `
})
export class MyApp {

    items:[IItem]

    constructor() {
        this.items = [{
            name: 'foo'
        }]
    }

    stuff($event:Event, item:IItem) {
        console.log($event, item);
    }

    stuff2($event:MouseEvent) {
        console.log($event);
    }

}