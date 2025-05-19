import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent {

  myForm!: FormGroup;


  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Value:', this.myForm.value);
this.snackBar.open('Form submitted successfully!', 'Close', {
  duration: 3000,
  panelClass: ['success-snackbar'],
  horizontalPosition: 'center',  
  verticalPosition: 'top'       
});
    }
  }
}
