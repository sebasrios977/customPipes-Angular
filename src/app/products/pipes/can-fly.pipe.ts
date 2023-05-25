import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'canFly',
})
export class canFlyPipe implements PipeTransform {

    transform(canFly: boolean = false): 'Vuela' | 'No Vuela' {

      return (canFly) ? 'Vuela' : 'No Vuela';
    }
}
