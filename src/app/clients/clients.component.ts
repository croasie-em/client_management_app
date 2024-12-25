import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients',
  standalone: false,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit {
  clientForm!: FormGroup;
  isFormVisible: boolean = false;
  clients: any[] = [];
  searchClient: string = '' ;

  // Injecting FormBuilder via the constructor
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.clientForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      add_line: ['', Validators.required],
      city: ['', Validators.required],
      post_code: ['', Validators.required],
    });
  }

  toggleForm(){
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const newClient = this.clientForm.value // gets form data
      this.clients.push(newClient);  // Log form value in array on submit

      // Reset the form + hides it after submission
      this.clientForm.reset();
      this.isFormVisible = false;
    }
  }

  get filteredClients(){
    return this.clients.filter(client => client.company.toLowerCase().includes(this.searchClient.toLowerCase()));
  }
}
