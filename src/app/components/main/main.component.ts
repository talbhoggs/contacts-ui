import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/model/contact';

import { ToastrService } from 'src/app/services/toastr.service'
declare let toastr : any;

@Component({
  //selector: 'app-main', //
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private contactService : ContactService, private toastr : ToastrService) { }

  private selectedContact : Contact;

  ngOnInit() {
  }

  selectContact(contact : Contact) {
    this.selectedContact = contact;
  }

  createContact(contact : Contact) {
    console.log("create");
    this.contactService.addContact(contact);
  }

  updateContact(contact : Contact) {
    console.log("update");
    this.contactService.updateContact(contact);
    
  }

  deleteContact(contact : Contact, e) {
    
    e.preventDefault();

    if (confirm("Are you sure you want to delete this contact?")) {
      this.contactService.deleteContact(contact);
      toastr.warning("Contact Deleted successfully!!");
    } 
    
  }
}
