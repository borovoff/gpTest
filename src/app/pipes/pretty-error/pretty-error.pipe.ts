import {Pipe, PipeTransform} from '@angular/core'
import {ValidationErrors} from '@angular/forms'
import {CustomNullable} from '../../models/custom-nullable'

@Pipe({
    name: 'prettyError'
})
export class PrettyErrorPipe implements PipeTransform {

    transform(key: string, value?: CustomNullable<ValidationErrors>): string {
        if (!value) {
            return 'Unknown error'
        }

        if (value.hasOwnProperty('required')) {
            return `${key} is required`
        }

        if (value.hasOwnProperty('maxlength')) {
            return `${key} should be less than 20`
        }

        if (value.hasOwnProperty('pattern')) {
            return key === 'country' ? 'You can use only letters' : 'You can use only numbers'
        }

        if (value.hasOwnProperty('email')) {
            return 'Please enter a valid email address'
        }

        return 'Unknown error'
    }

}
