import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponse{
    idToken	: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}


@Injectable({providedIn: 'root'})
export class AuthService{
    constructor(private httpClient: HttpClient){}

    signup(email: string, password: string){
       return this.httpClient.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2tK_lX0eJjR_0KZZAkZGmmSH1PRX7BWQ', {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError));
    }

    login(email: string, password: string){
       return this.httpClient.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2tK_lX0eJjR_0KZZAkZGmmSH1PRX7BWQ', {
            email: email, 
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError));
    }
    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = "An error is accured!";
            if (!errorRes.error || !errorRes.error.error) {
                return throwError(errorMessage)
            }
            switch (errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMessage = "email already exists!";
                    break;
                case 'OPERATION_NOT_ALLOWED':
                    errorMessage = "Operation not allowed";
                    break;
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                    errorMessage = "too many attempts happened, try again later!";
                    break;
                case 'EMAIL_NOT_FOUND':
                    errorMessage = "There is no user record corresponding to this identifier. The user may have been deleted.";
                    break;
                case 'INVALID_PASSWORD':
                    errorMessage = "The password is invalid or the user does not have a password.";
                    break;
                case 'USER_DISABLED':
                    errorMessage = "The user account has been disabled by an administrator";
                    break;
                default:
                    errorMessage = "An error happened!";
            }
            return throwError(errorMessage)
    }
}