import { Injectable } from '@angular/core';

export interface Contact {
  Id: Number,
  FullName: String,
  Email: String,
  Address: String,
  PhonoNumber?: String
}

const contacts: Contact[] = [{
  "Id": 1,
  "FullName": "Nancy Davolio",
  "Email": "Nancy1234@gmail.com",
  "Address": "507 - 20th Ave. E.\r\nApt. 2A",
  "PhonoNumber": "206-555-9857"
}, {
  "Id": 2,
  "FullName": "Andrew Fuller",
  "Email": "Andrew@yahoo.com",
  "Address": "908 W. Capital Way",
  "PhonoNumber": "206-555-9482"
  
}, {
  "Id": 3,
  "FullName": "Janet Leverling",
  "Email": "Janet@yahoo.com",
  "Address": "722 Moss Bay Blvd.",
  "PhonoNumber": "206-555-3412",
}, {
  "Id": 4,
  "FullName": "Margaret Peacock",
  "Email": "Margaret567@outlook.com",
  "Address": "4110 Old Redmond Rd.",
  "PhonoNumber": "206-555-8122"
}];

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Contact[] {
    return contacts;
  }
}
