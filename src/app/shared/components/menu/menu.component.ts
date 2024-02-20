import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];
  public defaultLang = {label:'Português', value:'pt'}
  constructor(public translate: TranslateService){

    translate.addLangs(['en','esp', 'pt']);
  }
  public langs =
  [
    {label:'English', value:'en'},
    {label:'Español', value:'esp'},
    {label:'Português', value:'pt'},
  ];
  public switchLanguage(event: any){
    console.log(event);
    localStorage.setItem('language', JSON.stringify(event.value));
    this.translate.use(event.value.value)
    this.setMenu();
  }

  private getTranslate(key: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.translate.get(key).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }
  private async setMenu(){
    this.menuItems = [
      {
        label: await this.getTranslate('menuTitle1'),
        icon: 'pi pi-desktop',
        items: [
          {
            label: await this.getTranslate('menuTitle1Subtitle1'),
            icon: 'pi pi-align-left',
            routerLink:  'basics'
          },
          {
            label: await this.getTranslate('menuTitle1Subtitle2'),
            icon: 'pi pi-dollar',
            routerLink:  'numbers'
          },
          {
            label: await this.getTranslate('menuTitle1Subtitle3'),
            icon: 'pi pi-globe',
            routerLink:  'uncommon'
          },
        ]
      },
      {
        label: await this.getTranslate('menuTitle2'),
        icon: 'pi pi-cog',
        items: [
          {
            label: await this.getTranslate('menuTitle2Subtitle1'),
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ]
      }
    ]
  }
  ngOnInit() {
    const lang = localStorage.getItem('language')
    if(lang){
      const obj = JSON.parse(lang);JSON.parse(lang);
      this.defaultLang = {label: obj.label, value: obj.value}
    }
    //this.translate.setDefaultLang(this.defaultLang);
    console.log(this.defaultLang);
   this.setMenu();

  }
}
