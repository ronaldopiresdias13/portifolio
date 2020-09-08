import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'sobre',          component: DashboardComponent },
    { path: 'habilidades',    component: UserComponent },
    { path: 'experiencias',          component: TableComponent },
    { path: 'educacao',     component: TypographyComponent },
    // { path: 'projetos',          component: IconsComponent },
    { path: 'premios',           component: MapsComponent },
    { path: 'contato',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
