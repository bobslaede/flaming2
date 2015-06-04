/// <reference path="../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2'

@Component({
    selector: 'my-app'
})
@View({
    template: `
        <paper-drawer-panel>
          <paper-header-panel drawer>
            <paper-toolbar>
              <div>Application</div>
            </paper-toolbar>
            <div>
                <paper-menu>
                    <paper-item>
                        foo
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
    `
})
export class MyApp {

    constructor() {
        console.log('foo');
    }

}

bootstrap(MyApp);