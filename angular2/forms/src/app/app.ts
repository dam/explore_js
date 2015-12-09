/// <reference path="../../node_modules/angular2/typings/tsd.d.ts" />
'use strict';
import {bootstrap, Component} from 'angular2/angular2';
import {HeroFormComponent} from './hero-form.component';

@Component({
	selector: 'my-app',
	template: '<hero-form></hero-form>',
	directives: [HeroFormComponent]
})
class AppComponent {
}
bootstrap(AppComponent);

