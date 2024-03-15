import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['junaid', 'usman', 'fatima'];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null, [Validators.required, Validators.email], this.firbiddenEmail),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
    // this.signupForm.valueChanges.subscribe((value)=>{
    //   console.log(value)
    // })
    this.signupForm.statusChanges.subscribe((status)=>{
      console.log(status)
    })
    this.signupForm.setValue({
      'userData' : {
        'username': 'Junaid Tahir',
        'email' : 'junaid@techsembly.com',
      },
      'gender': 'male',
      'hobbies': []
    })
    this.signupForm.patchValue({
      'userData' : {
        'username': 'Junaid',
      }
    })
  }
  onSubmit(){
    console.log(this.signupForm)
    this.signupForm.reset()
  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }
  removeControl(index: number){
    
    console.log(index)
  }
  // custom validator
  forbiddenNames(control: FormControl):{[s:string]:boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true}
    }
    else null;
  }
  firbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === "junaid@techsembly.com"){
          resolve({'forbiddenEmail': true});
        }
        else {
          resolve(null) 
        }
      },1000)
    })
    return promise;
  }
}