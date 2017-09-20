import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ilisEnvironment} from 'app/../environments/environment';
@Injectable()
export class CatogoryService {
  constructor(private http: Http) {
  }
  private handleError(error: any): Promise<any> {
    alert('An err occud' + error);
    return Promise.reject(error.message || error);
  }
}
