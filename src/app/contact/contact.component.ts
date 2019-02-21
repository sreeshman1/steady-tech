import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My company is ${this.company}. My email is ${this.email}. My phone number is ${this.phone}. My message is ${this.message}`;
    alert(allInfo); 
  }

}
