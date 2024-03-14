import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') myForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female']
  user = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: ''
  }
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.myForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   userReply: {
    //     secret: 'pet',
    //   },
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    this.myForm.form.patchValue({
      userData: {
        username: suggestedName
      },
      userReply: {
        secret: 'pet',
      },
      gender: 'male'
    })
  }
  // onSubmit(form: NgForm){
  //   console.log(form)
  // }
  onSubmit() {
    this.submitted = true;
    this.user.username = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.email;
    this.user.secret = this.myForm.value.userReply.secret;
    this.user.questionAnswer = this.myForm.value.questionAnswer;
    this.user.gender = this.myForm.value.gender;

    this.myForm.reset()
  }
}
