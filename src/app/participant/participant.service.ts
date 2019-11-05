import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participant } from './participant.component';

@Injectable({
    providedIn: 'root'
})
export class ParticipantService {
    url = 'http://localhost:8082/';

    constructor(private http: HttpClient) {}
    
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    //GET
    getParticipants(): Observable<Participant[]>{
        return this.http.get<Participant[]>(this.url + 'participants');
    }

}