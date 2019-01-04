import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contacts : Contact[];

  public loadContacts() {
    this.contacts = [
    {id:"1", firstName: "Charles", lastName : "Amper", phone : "+639276474248", email: "amperca@ph.ibm.com"},
    {id:"2", firstName: "Anuj", lastName : "Malhotra", phone : "+639173222633", email: "anujmalh@ph.ibm.com"},
    {id:"3", firstName: "Kris", lastName : "Malihan", phone : "+639088626637", email: "kris.malihan@ph.ibm.com"},
    {id:"4", firstName: "Eric Joshua", lastName : "Austria", phone : "+639276474670", email: "austriaef@ph.ibm.com"}
  ];
    //this.addContact();
   }

  constructor() {
    this.loadContacts();
  }

  public addContact(contact : Contact) {
    const nexId = Math.max.apply(null, this.contacts.map(c=>c.id));
    contact.id =  nexId + 1;
    this.contacts.push(contact);
  }


  public deleteContact(contact : Contact) {
    this.contacts.forEach((i, j) => {
      if(contact.id == i.id) {
        this.contacts.splice(j,1);
        return true;
      }
    });
  }

  public updateContact(contact : Contact) {
    this.contacts.forEach((i, j) => {
      if(contact.id == i.id) {
        i.firstName = contact.firstName;
        i.lastName = contact.lastName;
        i.email = contact.email;
        i.phone = contact.phone;
        return true;
      }
    });
  }


}
