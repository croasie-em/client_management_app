import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  message: string | null = null;


  constructor(private router: Router, private route: ActivatedRoute) {}

  logout() {
    localStorage.removeItem('isLoggedIn') // clears logged in status from local storage

    this.router.navigate(['/home']); // redirects to homepage/login
  }
  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      // If the user is already logged in, redirect them to a page like /projects or /about
      this.router.navigate(['/home']);
    }
    // Optionally, show a message if needed
    this.route.queryParams.subscribe((params: Params) => {
      this.message = params['message'] || null;
    });
  }
  }





