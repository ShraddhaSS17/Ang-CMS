import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamService } from '../param.service';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {
public event:any;
public img:any;
  constructor(private route:ActivatedRoute, private param : ParamService) { }

  ngOnInit(): void {
    let type=this.route.snapshot.paramMap.getAll('event')
    this.event=type;
    let image=this.route.snapshot.paramMap.getAll('img')
    this.img=image;
  }

}
