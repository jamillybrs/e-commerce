import { Routes } from "@angular/router";
import { authGuard } from "./core/auth.guard";
export const routes: Routes = [
    {
        path:'', //router para raiz lacalhost:4200/
        loadComponent: () =>
            import('./features/home/home/home')     //o import esta sendo feito dentro da função 22/07
        .then((m) => m.Home),
    },
    {
        path:'produtos',
        loadComponent: () =>
            import('./features/produtos/lista-produtos/lista-produtos')
        .then((m) => m.ListaProdutos),
    },
    {
        path:'carrinho',
        canActivate:[authGuard],
        loadComponent: () =>
            import('./features/carrinho/carrinho/carrinho')
        .then((m) => m.Carrinho),
    },
    {
        path:'**',
        redirectTo:'',
    },
];
