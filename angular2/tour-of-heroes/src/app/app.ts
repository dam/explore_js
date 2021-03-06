/// <reference path="../../node_modules/angular2/typings/tsd.d.ts" />
'use strict';
import {bootstrap, Component, FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {HeroService} from './heroes-service';

class Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'my-app',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	template: `
	  <h1>{{title}}</h1>
		<h2>My Heroes</h2>
		<ul class="heroes">
		  <li *ng-for="#hero of heroes" (click)="onSelect(hero)" [ng-class]="getSelectedClass(hero)">
			  <span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>
		<div *ng-if="selectedHero">
		  <h2>{{selectedHero.name}} details!</h2>
		  <div><label>id: </label>{{selectedHero.id}}</div>
		  <div>
		    <label>name: </label>
			  <div><input [(ng-model)]="selectedHero.name" placeholder="name"/></div>
		  </div>
		</div>
		`,
	styles: [`
		.heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
	`]
})
class AppComponent {
	public title = 'Tour of heroes';
	public heroes;
	public selectedHero: Hero;
	
	constructor(heroService: HeroService) {
		this.heroes = heroService.getHeroes();
	}
	
	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
	
	getSelectedClass(hero: Hero) {
    return { 'selected': hero === this.selectedHero };
  }
}

bootstrap(AppComponent, [HeroService]);

