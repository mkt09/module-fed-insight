import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-psm-insight',
  templateUrl: './psm-insight.component.html',
  styleUrls: ['./psm-insight.component.scss']
})
export class PsmInsightComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private translateService: TranslateService) { 
  }

  ngOnInit(): void {
  this.translateService.use('en_US');
  }

  onBack(){
    this.router.navigateByUrl('/');
   }

   ngOnDestroy(): void {
  }
}
