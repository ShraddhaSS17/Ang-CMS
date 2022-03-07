import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {
  contact:any=[];

  constructor(private contactservice:ContactService) {
  this.readcontact();
   }

  ngOnInit(): void {
  }
  readcontact(){
    this.contactservice.getcontacts().subscribe((data) => {
     this.contact = data;
    })    
  }
  removecontact(stud: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.contactservice.deletecontact(stud._id).subscribe((data) => {
          this.contact.splice(index, 1);
        }
      )    
    }
  }

}

