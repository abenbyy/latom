import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  ngOnInit(): void {
    this.symptoms = this.service.symptoms;
    this.predictions = []
    this.predict();
  }

}
