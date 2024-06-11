import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
    {
        path: 'list',
        component: ListComponent,
        title: 'List',
        //guardType: [tenGuard]
        // canActivate: [canActivateGuard] //kiểm tra có được truy cập route hay ko?
    },
    {
        path: 'create',
        component: CreateComponent,
        title: 'Create',
        // canDeactivate: [deactivateGuard] //kiểm tra xem ng dùng có được rời khỏi route hay ko?
    },
    {
        path:'create-task',
        component: CreateTaskComponent,
        title:'Task',
    },
    {
        path: 'detail/:project',
        component: DetailComponent,
        title: 'Detail',
    },
    {
        path: 'edit/:project',
        component: EditComponent,
    },
    {
        path: 'login',
        component: LoginComponent ,
        title :'Login'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'admin',
        // canActivateChild: [childGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            // {
            //     path:'login',
            //     component: LoginComponent,
            // },
            {
                path: 'projects',
                children: [
                    {
                        path: 'list',
                        component: ListComponent,
                    },
                    {
                        path: 'create',
                        component: CreateComponent,
                    },
                    {
                        path: 'edit',
                        component: EditComponent,
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

