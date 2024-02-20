import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrAncISco';

  constructor (private primengConfig: PrimeNGConfig, private translateService: TranslateService ){
    this.translateService.setDefaultLang('pt')
    const lang = localStorage.getItem('language')
    if(lang){
      const obj = JSON.parse(lang);
      this.translateService.use(obj.value)
    }
    else{
      this.translateService.use('pt')
    }

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }


}
