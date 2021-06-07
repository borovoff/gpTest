import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'
import {User} from '../../models/user'

class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
    }
}

enum FormGroupStatus {
    Valid = 'VALID',
    Invalid = 'INVALID'
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    fields = ['username', 'email', 'age', 'country', 'phone']
    formGroup: FormGroup
    matcher = new MyErrorStateMatcher()

    user?: User

    constructor() {
        const defaultValidators = [
            Validators.required,
            Validators.maxLength(20)
        ]

        const numberValidators = [
            ...defaultValidators,
            Validators.pattern('^[0-9]+$')
        ]


        this.formGroup = new FormGroup({
            username: new FormControl('', defaultValidators),
            email: new FormControl('', [
                ...defaultValidators,
                Validators.email,
            ]),
            age: new FormControl('', numberValidators),
            phone: new FormControl('', numberValidators),
            country: new FormControl('', [
                ...defaultValidators,
                Validators.pattern('^[a-zA-Z]+$')
            ])
        })
    }

    ngOnInit(): void {
    }

    submit() {
        const {status, value} = this.formGroup

        if (status === FormGroupStatus.Valid) {
            this.user = value
        }
    }
}
