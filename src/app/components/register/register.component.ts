  import { Component, OnInit } from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';


  function passwordmatchvalidator(form){
  const password = form.get('password');
  const confirmpassword = form.get('confirmpassword');

  if(password.value !== confirmpassword.value){
    confirmpassword.setErrors({passwordmatch : true})
  }else{
    confirmpassword.setErrors(null)
  }
  return null
  }
  // if valid then return null else return object
  function symbolValidator(control){
    if(control.hasError('required')) return null;
    if(control.hasError('minlength')) return null;

    if (control.value.indexOf('@') > -1){
      return null;
    }else{
      return { symbol : true };
    }
    }
  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
  })
  export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
      this.buildForm()
    }

    buildForm(){
      this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        password: ['', [Validators.required,symbolValidator,Validators.minLength(4)]],
        confirmpassword: ''
      },{
      validators : passwordmatchvalidator
      })
    }
    register() {
      console.log(this.registerForm.value);

    }
  }
