import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  contact = new Contact();
  submitted = false;
  showThanks = true;
  constructor(private contactService: ContactService)  { }

  ngOnInit() {
  }

  processForm() {
    this.contactService.saveContact(this.contact)
    .subscribe(contact => {
      console.log('contact saved.', contact);
    });
    this.submitted = true;
    this.showThanks = false;
  }

}
