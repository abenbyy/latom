import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiMedicService } from 'src/app/services/apimedic.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

  symptoms
  predictions

  constructor(
    private service: ApiMedicService,
    private router: Router,
  ) { }

  predict(){
    this.service.getToken().subscribe(async (data:any) =>{
      this.service.TOKEN = data.Token;
      await this.service.getDiagnosis().subscribe(async data =>{
        this.predictions = data;
        await console.log(data);
      })
    })
  }
  goToIssueInfo(id:number){
    this.router.navigate(["./issue-info",this.predictions[id].Issue.ID])
  }

  ngOnInit(): void {
    this.symptoms = this.service.symptoms;
    this.predictions = []
    this.predict();
  }

}
