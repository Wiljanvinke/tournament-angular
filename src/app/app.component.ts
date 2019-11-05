import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from './participant/participant.component';
import { ParticipantService } from './participant/participant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tournament Demo in Angular';
  table: HTMLTableElement;
  participantService: ParticipantService;

  public getParticipants(): Observable<Participant[]>{
    let row = this.table.insertRow(-1);
    let cell = row.insertCell(-1);
    cell.innerHTML = this.participantService.getParticipants()[0];
    return this.participantService.getParticipants();
  }
}
