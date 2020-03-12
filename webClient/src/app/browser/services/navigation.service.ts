import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class NavigationService {

  startPage = 'https://zowe.org';
  urlSubject = new ReplaySubject<string>(1);
  history: string[] = [];

  constructor() { }

  navigate(url: string): void {
    this.history.push(url);
    this.urlSubject.next(url);
  }
}
