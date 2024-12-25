import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-projects',
  standalone: false,
  
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projectForm!: FormGroup;
  isFormVisible: boolean = false;
  projects: any[] = [];
  searchProjects: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      project_name: ['', Validators.required],
      project_area: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]


    })
  }

  toggleForm(){
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      const newProject= this.projectForm.value // gets form data
      this.projects.push(newProject);  // Log form value in array on submit

      // Reset the form + hides it after submission
      this.projectForm.reset();
      this.isFormVisible = false;
    }
  }

  get filteredProjects(){ // search for projects by area
    return this.projects.filter(project => project.project_area.toLowerCase().includes(this.searchProjects.toLowerCase()));
  }
}
