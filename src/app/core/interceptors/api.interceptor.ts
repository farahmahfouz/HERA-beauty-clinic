import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../utils/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
    const apiReq = req.clone({
        url: environment.apiUrl + req.url,
        // withCredentials: true,
    });

    return next(apiReq);
};
