import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs'
import {UserNullable} from '../../models/user-nullable'

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _user: BehaviorSubject<UserNullable>

    get user(): UserNullable {
        return this._user.value
    }

    set user(value) {
        if (value) {
            localStorage.setItem('user', JSON.stringify(value))
        } else {
            localStorage.removeItem('user')
        }

        this._user.next(value)
    }

    constructor() {
        const stringUser = localStorage.getItem('user')
        this._user = new BehaviorSubject(stringUser ? JSON.parse(stringUser) : null)
    }
}
