
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService} from "./auth.service"
@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private authservice:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
let authToken= localStorage.getItem('userId');
if(authToken==null)
        authToken="";
const authRequest =req.clone({
    headers:req.headers.set("Authorizaion",authToken )
})

        return next.handle(authRequest);
    }
}