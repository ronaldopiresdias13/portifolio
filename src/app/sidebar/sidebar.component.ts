import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/sobre', title: 'SOBRE', icon: 'nc-bank', class: '' },
    { path: '/habilidades', title: 'HABILIDADES', icon: 'nc-diamond', class: '' },
    { path: '/experiencias', title: 'EXPERIÊNCIAS', icon: 'nc-pin-3', class: '' },
    { path: '/educacao', title: 'EDUCAÇÃO', icon: 'nc-bell-55', class: '' },
    { path: '/projetos', title: 'PROJETOS', icon: 'nc-single-02', class: '' },
    { path: '/premios', title: 'PRÊMIOS', icon: 'nc-tile-56', class: '' },
    { path: '/contato', title: 'CONTATO', icon: 'nc-caps-small', class: '' },
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
