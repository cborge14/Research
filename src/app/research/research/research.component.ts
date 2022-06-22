import { Component, OnInit } from '@angular/core';
import { ResearchService } from '../services/research.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  chosenOpt: string;


  constructor(private researchService: ResearchService) { }


  ngOnInit(): void {

  }

  //event option handler for the option chosen by the user
  selectOpt (event: any) {
    this.chosenOpt = event.target.value;
  
  }
}

