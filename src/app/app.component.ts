import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from './participant/participant.component';
import { ParticipantService } from './participant/participant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tournament Demo in Angular';
  test;
  table: HTMLTableElement;
  participants: Participant[];

  ngOnInit() {
    this.getParticipants();
  }

  constructor(public participantService: ParticipantService){}

  public getParticipants(): Observable<Participant[]> {
    this.table = document.createElement("table");
    let row = this.table.insertRow(-1);
    let cell = row.insertCell(-1);
    cell.innerHTML = this.participantService.getParticipants()[0];
    this.participantService.getParticipants().subscribe(data => {
      this.participants = data
    });
    console.log(this.participants);
    return this.participantService.getParticipants();

  }
}
