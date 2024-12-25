import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meetings',
  standalone: false,
  
  templateUrl: './meetings.component.html',
  styleUrl: './meetings.component.css'
})
export class MeetingsComponent implements OnInit {
  meetingForm!: FormGroup;
  isFormVisible: boolean = false;
  meetings: any[] = [];
  searchMeetings: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.meetingForm = this.fb.group({
      meeting_title: ['', Validators.required],
      meeting_date: ['', Validators.required],
      meeting_time: ['', Validators.required],
      number_of_ppl: ['', Validators.required]


    })
  }

  toggleForm(){
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit(): void {
    if (this.meetingForm.valid) {
      const newMeeting= this.meetingForm.value // gets form data
      this.meetings.push(newMeeting);  // Log form value in array on submit

      this.meetingForm.reset();
      this.isFormVisible = false;
    }
  }

  get filteredMeetings(){ // search for meetings by title
    return this.meetings.filter(meetings => meetings.meeting_title.toLowerCase().includes(this.searchMeetings.toLowerCase()));
  }
}
