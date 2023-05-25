import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Sebastian';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  public changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Fernando', 'Eduardo', 'Melisa', 'Sebastian'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    "=1": 'tenemos un cliente esperando',
    "other": 'tenemos # clientes esperando',
  }

  public deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Sebastian',
    age: 25,
    addres: 'Villavicencio'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log('tap:', value))
    );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('Tenemos data en la promesa')
    }, 3500);
  })
}
