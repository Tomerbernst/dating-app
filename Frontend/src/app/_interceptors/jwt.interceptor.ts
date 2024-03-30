import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const storedUserData = localStorage.getItem('user')
  if(storedUserData) {
    const user  = JSON.parse(storedUserData);
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${user.token}`
      }});
  }
  return next(req);
};
