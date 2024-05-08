import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {catchError, tap, throwError} from "rxjs";
import {AuthService} from "../service/Auth.service";
import {AuthenticationResponse} from "../../../models/AuthenticationResponse";
import {HttpErrorResponse} from "@angular/common/http";

export interface AuthStateModel {
  token: string | null;
  email: string | null;
}

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: { email: string; password: string }) {}
}

export class Register {
  static readonly type = '[Auth] Register';
  constructor(public payload: { first_name: string, last_name: string, email: string; password: string }) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    email: null
  }
})
@Injectable()
export class AuthState {
  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static isAuthenticated(state: AuthStateModel): boolean {
    return !!state.token;
  }

  constructor(private authService: AuthService) {}

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService.login(action.payload).pipe(
      tap((result: AuthenticationResponse) => {
        ctx.patchState({
          token: result.access_token,
          email: action.payload.email
        });
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error.error instanceof ProgressEvent ? new Error("Server Error") : error.error);
      })
    );
  }

  @Action(Register)
  register(ctx: StateContext<AuthStateModel>, action: Register) {
    return this.authService.register(action.payload).pipe(
      tap((result: AuthenticationResponse) => {
        ctx.patchState({
          token: result.access_token,
          email: action.payload.email
        });
      })
    );
  }

  /*@Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    const state = ctx.getState();
    return this.authService.logout(state.token).pipe(
      tap(() => {
        ctx.setState({
          token: null,
          email: null
        });
      })
    );
  }*/
}
