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
  displayedColumns: string[] = ['email', 'firstName'];

  ngOnInit() {
    this.getParticipants();
  }

  constructor(public participantService: ParticipantService){}

  public getParticipants(): Observable<Participant[]> {
    this.participantService.getParticipants().subscribe(data => 
       this.participants = data
    );
    this.test = this.participants;
    console.log(this.participants);
    return this.participantService.getParticipants();

  }
}
