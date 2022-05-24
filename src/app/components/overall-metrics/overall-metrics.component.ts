import { Component, OnInit } from '@angular/core';
import { newLayoutResponse, backendDataResponse } from "../../dataresponse";

@Component({
  selector: 'app-overall-metrics',
  templateUrl: './overall-metrics.component.html',
  styleUrls: ['./overall-metrics.component.css']
})
export class OverallMetricsComponent implements OnInit {
  newLayoutResponse = newLayoutResponse;
  backendDataResponse = backendDataResponse;
  fieldValue = newLayoutResponse.fieldDefinitions;
  // layoutVal = JSON.parse(JSON.stringify(newLayoutResponse.layout));
  dataset = backendDataResponse.dataSets[0].data;
  fieldVal: any = [];
  total:any={};
  constructor() {
    
  }

  ngOnInit(): void {
    this.fieldVal = []; let i = 0;
    for (const property in this.fieldValue) {
      this.fieldVal[i] = this.fieldValue[property];
      this.fieldVal[i].nam = property;

      i++;
    }
    for (const val in this.dataset) {
      
      for (const val2 in this.dataset[val]) {
        if (!isNaN(this.dataset[val][val2])) {
          this.dataset[val][val2] = Math.round(this.dataset[val][val2] * 100) / 100;
          if(!this.total[val2]){
            this.total[val2] = 0;
          }  
          this.total[val2] += this.dataset[val][val2];
          this.total[val2] = Math.round(this.total[val2] * 100) / 100;
        } 
        else{
          this.total[val2] = "";
        }

      }
    }
    // for (const num in this.layoutVal){
    //   if(this.layoutVal[num].name === "overallMetrics"){
    //     delete this.layoutVal[num];
    //   }
    // }
    //     console.log(this.layoutVal,newLayoutResponse.layout, "valueee-------");

  }
}
