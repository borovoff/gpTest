import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core'
import {User} from '../../models/user'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit, AfterViewInit {
    userSample: User = {
        username: '',
        email: 'me@getproven.com',
        age: 19,
        country: 'France',
        phone: 180022
    }

    columns: string[]
    dataSource: MatTableDataSource<User>

    @ViewChild(MatPaginator) paginator!: MatPaginator
    @ViewChild(MatSort) sort!: MatSort

    constructor() {
        this.columns = Object.entries(this.userSample)
            .reduce((accumulator: string[], [key]) => accumulator.concat([key]), [])

        const users: User[] = []
        for (let i = 0; i < 10; i++) {
            const username = String.fromCharCode(97 + i)
            users.push({...this.userSample, username})
        }

        this.dataSource = new MatTableDataSource(users)
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
    }
}
