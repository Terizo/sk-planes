import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: MatSnackBar
    
  ){}

  canActivate( next: ActivatedRouteSnapshot,  state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggenIn()){
      return true;
    }

    this.router.navigate(['/login']);
    this.toast.open('You are not auhorized to see this page. Please log in');
    return false;
  }
  
}
