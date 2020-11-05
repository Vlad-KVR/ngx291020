import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courseTitle = 'Angular course';
  // private salary = 4000;

  // public imgSrc = 'https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png';

  // public size = 50;

  // public tag = this.domSanitizer.bypassSecurityTrustHtml('<span style="color: red">Some tag</span>');

  // public user = {name: 'Vlad'};

  // constructor(
  //   private readonly domSanitizer: DomSanitizer
  // ) {

  // }

  // public getSalary(): number {
  //   return this.salary * 1.2;
  // }

  public onSideNavToggle(event: Event): void {
    // tslint:disable-next-line:no-unused-expression
    console.log('LOG!!', event);
  }
}
