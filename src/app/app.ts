/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, bootstrap, NgFor} from 'angular2/angular2'

@Component({
    selector: 'my-app'
})
@View({
    directives: [NgFor],
    template: `
        <paper-drawer-panel>
          <paper-header-panel drawer>
            <paper-toolbar>
              <div>Application</div>
            </paper-toolbar>
            <div>
                <paper-menu multi>
                    <paper-item tabindex="0">
                        <paper-item-body two-line>
                            this works
                        </paper-item-body>
                        <paper-checkbox></paper-checkbox>
                    </paper-item>
                    <template [ng-for] #item [ng-for-of]="items" #i="index">
                        <paper-item tabindex="0" selected>
                            <paper-item-body two-line>
                                doesnt work {{item}}
                            </paper-item-body>
      <paper-checkbox></paper-checkbox>
                        </paper-item>
                    </template>
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
    `
})
export class MyApp {

    items:[string]

    constructor() {
        this.items = ['foo', 'bar', 'baz']
    }

}