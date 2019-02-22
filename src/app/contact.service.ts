import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Contact } from './contact.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts= new Array<Contact>();
  private contactsUrl = '/api/contacts';

  constructor( private http: HttpClient) { }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // // TODO: better job of transforming error for user consumption
    // this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  saveContact(contact: Contact) {
    this.contacts.push(contact);
    return this.http.post<Contact>(`${this.contactsUrl}/create`, contact, httpOptions)
      .pipe(
        catchError(this.handleError('saveContact', contact))
      );
    // return true;

  }

  getContacts(): Observable<Contact[]> {
    console.log('calling server to get contacts');
    return this.http.get<Contact[]>(this.contactsUrl);
    // return true;

  }
}
