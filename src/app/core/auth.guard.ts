import { CanActivateFn } from "@angular/router";
import { usuarioLogado } from "./auth";

export const authGuard: CanActivateFn = () => {     //método que vai guarda o Guard 22/07
    return usuarioLogado();
};