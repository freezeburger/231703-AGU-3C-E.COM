import { Inject } from '@angular/core';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'c3-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

    public navItems:Array<string | undefined> = [];

    constructor(
      // @Inject(Router) private router:Router
      private router:Router,
      private route:ActivatedRoute,
    ){
      this.navItems =  (this.route.parent as any).routeConfig['_loadedRoutes'].filter( (r:Route) => r.path !== '**').map( (r:Route)  => r.path );
    }
}
