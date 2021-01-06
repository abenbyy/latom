import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable({
  providedIn: 'root'
})
export class ApiMedicService {

  headers: HttpHeaders;
  SANDBOX_MODE = true;
  AUTH_API: string;
  HEALTH_API: string;
  API_KEY = "awishforlife@gmail.com";
  SECRET_KEY = "x4S5Rwy6LAm3k2BWn";
  HASHED_CREDENTIALS = "f5c2f00816f3b7429c9fc77cdcc012f4";
  FORMAT = "json";

  TOKEN: string;
  symptoms: number[];

  constructor(private http: HttpClient) { 
    this.AUTH_API = (this.SANDBOX_MODE)? "https://sandbox-authservice.priaid.ch/" : "https://authservice.priaid.ch";
    this.HEALTH_API = (this.SANDBOX_MODE)? "https://sandbox-healthservice.priaid.ch/" : "https://healthservice.priaid.ch";
    this.headers = new HttpHeaders({
      Authorization: 'Bearer awishforlife@gmail.com:9cLwCBbzt0Kcn8d83MAS9A=='
    });

    this.getToken();
  }



  public getToken(){
    return this.http.post(this.AUTH_API + 'login', {
      api_key: this.API_KEY,
      secret_key: this.SECRET_KEY,
      hashed_credentials: this.HASHED_CREDENTIALS,
      format: this.FORMAT,
    },{ headers: this.headers })
  }

  public getBodyLocations(){
    return this.http.get(`${this.HEALTH_API}body/locations?token=${this.TOKEN}&language=en-gb`);
  }

  public getBodySubLocations(id:number){
    return this.http.get(`${this.HEALTH_API}body/locations/${id}?token=${this.TOKEN}&language=en-gb`)
  }

  public getSymptoms(id:number){
    return this.http.get(`${this.HEALTH_API}symptoms/${id}/man?token=${this.TOKEN}&language=en-gb`)
  }

  public getDiagnosis(){
    return this.http.get(`${this.HEALTH_API}diagnosis?token=${this.TOKEN}&language=en-gb&gender=male&year_of_birth=2000&symptoms=[${this.symptoms}]`);    
  }

  public getIssueInfo(id:number){
    return this.http.get(`${this.HEALTH_API}issues/${id}/info?token=${this.TOKEN}&language=en-gb`)
  }
  


}
