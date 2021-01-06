import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiMedicService } from '../../services/apimedic.service';
import { BodyLocation } from '../../models/body-location';
import { BodySublocation } from '../../models/body-sublocation';
import { Symptoms } from '../../models/symptoms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.scss']
})
export class CheckerComponent implements OnInit {

  currLocation: number
  currSubLocations: number
  currSymptoms: number[]

  bodyLocations
  bodySubLocations
  symptoms


  mCategory = []

  constructor(
    private service: ApiMedicService,
    private router: Router) {}
  
  selectLocation(id: number){
    this.currLocation = this.bodyLocations[id].ID;
    this.clearCategories();
    document.querySelectorAll('.category')[id].classList.add('activated'); 
    this.loadSubLocations();   
  }

  loadSubLocations(){
    console.log(this.bodySubLocations)
    this.service.getToken().subscribe(async (data:any) =>{
      this.service.TOKEN = data.Token;
      await this.service.getBodySubLocations(this.currLocation).subscribe(async data =>{
        this.bodySubLocations = data;
      })
    })
  }

  selectSubLocation(id: number){
    this.currSubLocations = this.bodySubLocations[id].ID;
    this.clearSubLocations();
    document.querySelectorAll('.sub-location')[id].classList.add('activated'); 
    this.loadSymptoms();
  }

  loadSymptoms(){
    this.service.getToken().subscribe(async (data:any) =>{
      this.service.TOKEN = data.Token;
      await this.service.getSymptoms(this.currSubLocations).subscribe(async data=>{
        this.symptoms = data;
        await console.log(data);
      })
    })
  }

  selectSymptom(id:number){
    this.currSymptoms.push(this.symptoms[id].ID);
    document.querySelectorAll('.symptom')[id].classList.add('activated'); 
  }

  clearCategories(){
    for(let i=0;i<document.querySelectorAll('.category').length;i++){
      document.querySelectorAll('.category')[i].classList.remove('activated');

    }
  }

  clearSubLocations(){
    for(let i=0;i<document.querySelectorAll('.sub-location').length;i++){
      document.querySelectorAll('.sub-location')[i].classList.remove('activated');

    }
  }

  goToPredict(){
    this.service.symptoms = this.currSymptoms;
    this.router.navigate(['prediction']);
  }


  ngOnInit(): void {
    this.currLocation = -1;
    this.currSubLocations = -1;
    this.currSymptoms = [];

    this.bodyLocations = [];
    this.bodySubLocations = [];
    this.symptoms = [];

    
    this.service.getToken().subscribe(async (data:any) =>{
      this.service.TOKEN = data.Token;
      await this.service.getBodyLocations().subscribe(async data =>{
        this.bodyLocations = data;
      })
    })
    
    var checkRender = setInterval(function(){
      if(document.querySelectorAll('.category').length){
          let temp = document.querySelectorAll('.category');
        clearInterval(checkRender)
      }
    }, 100)
  }

}
