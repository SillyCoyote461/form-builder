import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  constructor(private router: Router) { }
  isAuthenticated: boolean = false;

  ngOnInit(): void {
    if (!this.isAuthenticated) {
      this.router.navigate(['/auth/login']);
      console.log('User is not authenticated');
    }
  }


}
