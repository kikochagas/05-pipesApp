import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'pluxee'
  public nameUpper: string = 'PLUXEE'
  public fullName: string = 'pLuXEE SodeXO'

  public customDate: Date = new Date();

  constructor(private translate: TranslateService){}

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

  public async methodA() {
    const message = await this.getTranslate('welcome')
    alert(message);
  }
}
