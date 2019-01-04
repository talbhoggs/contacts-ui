import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ToastrService } from 'src/app/services/toastr.service'
declare let toastr : any;

@Component({
  selector: 'app-contact-entryform',
  templateUrl: './contact-entryform.component.html',
  styleUrls: ['./contact-entryform.component.css']
})
export class ContactEntryformComponent implements OnInit {

  @Output() createCnt = new EventEmitter();
  @Output() updateCnt = new EventEmitter();
  @Output() deleteCnt = new EventEmitter();
  @Input() model : any;

 

  constructor(private toastr : ToastrService) { }

  ngOnInit() {
    this.model = {};
  }

  resetForm(cntFrm) {
    this.model = {};
    cntFrm.form.reset();
  }

  createContact(cntFrm) {
    
    if(cntFrm.form.valid) {
      this.createCnt.emit(this.model);
      this.resetForm(cntFrm);
      toastr.success("Contact added successfully!!");
    }
  }

  updateContact(cntFrm) {
    if(cntFrm.form.valid) {
      this.updateCnt.emit(this.model);
      this.resetForm(cntFrm);
      toastr.success("Contact updated successfully!!");
    }
  }


}
