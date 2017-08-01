import {Component, OnInit, Input} from "@angular/core";
import {SeasonDTO} from "../../ws/soccer/model/SeasonDTO";
import {MatchDTO} from "../../ws/soccer/model/MatchDTO";

@Component({
    selector: 'app-season',
    template: `
    <h3>{{season?.description}}</h3>
    <app-match *ngFor="let match of matches" [match]="match"></app-match>
     <div class="box" *ngIf="matches?.length == 0">
            <p>{{"text.matches.empty" | translate}}</p>
    </div>
  `,
    styles: []
})
export class SeasonComponent implements OnInit {
    @Input() season: SeasonDTO;
    @Input() matches: MatchDTO[];

    constructor() {
    }

    ngOnInit() {
    }

}
