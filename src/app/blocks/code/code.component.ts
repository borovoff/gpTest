import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {AuthService} from '../../services/auth/auth.service'
import {ActivatedRoute, Router} from '@angular/router'
import {User} from '../../models/user'

@Component({
    selector: 'app-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.sass']
})
export class CodeComponent implements OnInit, OnDestroy {
    @Input() user?: User
    code = ''
    defaultValue = 1000 * 300
    millisecondsLeft = this.defaultValue
    intervalId = setInterval(() => this.millisecondsLeft -= 1000, 1000)

    constructor(private auth: AuthService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    codeChange(value: string) {
        if (value.length === 5 && this.user) {
            this.auth.user = this.user
            this.router.navigate([this.route.snapshot.queryParams['returnUrl'] || '/'])
        }
    }

    resend() {
        this.millisecondsLeft = this.defaultValue
    }

    ngOnDestroy() {
        clearInterval(this.intervalId)
    }

}
