import { AuthService } from './services/auth.service';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { ModuleWithProviders, NgModule, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { Optional } from '@angular/core';
import { LoginComponent } from './components/login/login.component';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthService],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: CoreModule};
  }
 constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
        throw new Error('CoreModule is already loaded.');
    }
  }
}
