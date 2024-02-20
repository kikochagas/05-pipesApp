import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
    // i18n Select
    public name: string = 'Francisco'
    public gender: 'male' | 'female' = 'male';
    public welcomeMap = {
      'male': 'Bem-vindo',
      'female': 'Bem-vinda'
    }
    public invitationMap = {
      male: 'convida-lo',
      female: 'convida-la'
    }

    changeClient(): void {
      this.name = 'Maria'
      this.gender = 'female'
    }

    //i18nPlural
     public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hugo', 'Jose', 'João', 'Luis', 'Teresa', 'Beatriz', 'Ana']
     public clientsMap = {
      '=0': 'não temos nenhum cliente em espera.',
      '=1': 'temos um cliente em espera.',
      'other': 'temos # clientes em espera.'
    }

     processClient(): void {
      this.clients.shift();
    }

    //KeyValue Pipe
    public person = {
      name: 'Francisco',
      age: 36,
      address: 'Elvas, Portugal'
    }

    // Async Pipe
    public myObservableTimer: Observable<number> = interval(2000).pipe(
      tap( value => console.log(value))
    );

    public promiseValue: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Temos dados na promessa')
        console.log('Temos dados na promessa')
      }, 3500);
    } )


}
