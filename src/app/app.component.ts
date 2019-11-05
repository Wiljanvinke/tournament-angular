import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from './participant/participant.component';
import { ParticipantService } from './participant/participant.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tournament Demo in Angular';
  table;
  participantService: ParticipantService;

  getParticipants(): Observable<Participant[]>{
    return this.participantService.getParticipants();
  }
}
