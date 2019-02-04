import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})


export class LoginComponent implements OnInit {
    form: FormGroup;
    constructor(private _build: FormBuilder, private _router: Router) { }

    ngOnInit() {
        this.form = this._build.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    onSubmit() {
        console.log(this.form);
        if (this.form.invalid) {
            return console.log('invalid');
        }

        if (this.form.controls['username'].value === 'test@gmail.com' && this.form.controls['password'].value === 'asdf') {
            this._router.navigate(['', 'members']);
        } else {
            console.log('Incorrect');
        }
    }
}
