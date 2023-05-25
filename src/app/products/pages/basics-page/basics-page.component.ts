import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'sebastian';
  public nameUpper: string = 'SEBASTIAN';
  public fullName: string = 'seBaStiAN riOS';

  public customDate: Date = new Date();
}
