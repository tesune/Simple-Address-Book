import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(
    private service: ContactService
  ){}

  ngOnInit(): void {
    this.contacts = this.service.getContacts();
  }
  
}
