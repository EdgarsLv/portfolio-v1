import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderDone = new Subject<void>();
  loaderDone$ = this.loaderDone.asObservable();

  finish() {
    this.loaderDone.next();
  }
}
