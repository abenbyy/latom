import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMedicService } from 'src/app/services/apimedic.service';

@Component({
  selector: 'app-issue-info',
  templateUrl: './issue-info.component.html',
  styleUrls: ['./issue-info.component.scss']
})
export class IssueInfoComponent implements OnInit {

  currId
  issueData
  constructor(
    private actRoute: ActivatedRoute,
    private service: ApiMedicService,
  ) { }

  ngOnInit(): void {
    this.currId = this.actRoute.snapshot.paramMap.get('id');
    this.service.getToken().subscribe(async (data:any) =>{
      this.service.TOKEN = data.Token;
      await this.service.getIssueInfo(this.currId).subscribe(async data =>{
        this.issueData = data;
      })
    })

  }

}
