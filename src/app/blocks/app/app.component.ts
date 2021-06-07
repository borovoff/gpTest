import {ChangeDetectorRef, Component} from '@angular/core'
import {MediaMatcher} from '@angular/cdk/layout'
import {AuthService} from '../../services/auth/auth.service'
import {Router} from '@angular/router'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'getproven-test'

    mobileQuery: MediaQueryList

    private readonly _mobileQueryListener: () => void

    constructor(changeDetectorRef: ChangeDetectorRef,
                media: MediaMatcher,
                public auth: AuthService,
                private router: Router) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)')
        this._mobileQueryListener = () => changeDetectorRef.detectChanges()
        this.mobileQuery.addListener(this._mobileQueryListener)
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener)
    }

    logout() {
        this.auth.user = null
        this.router.navigate(['/login'])
    }
}
