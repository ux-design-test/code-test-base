import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MessageService {
    
    constructor (private http: HttpClient) {}

    private subject = new Subject<any>();
    displayImageStatus$ = new BehaviorSubject<boolean>(false);

    changeDisplayImageStatus(status: boolean){
        this.displayImageStatus$.next(status)
    }

    getDisplayImageStatus(){
        return this.displayImageStatus$.getValue();
    }

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}