import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'node-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  errorMessage!: string;
  loading!: boolean;

  constructor(private formbuilder: FormBuilder,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.signinForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });

  }

  onSubmit(){
    this.loading = true;
    const email = this.signinForm.get('email')?.value;
    const password = this.signinForm.get('password')?.value;
    this.auth.signin(email, password)
    .then(() => {
        this.loading = false;
        this.router.navigate(['/shop']);
    }).catch((err) => {
      this.loading = false;
        this.errorMessage = err.message;
    });
  }

}

