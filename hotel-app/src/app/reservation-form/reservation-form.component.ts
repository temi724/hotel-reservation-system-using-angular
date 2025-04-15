import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  constructor(private rs: ReservationService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  onSubmit() {
    // console.log('hello');
    if (this.reservationForm.valid) {
      let rf: Reservation = this.reservationForm.value;
      this.rs.addReservation(rf);
      this.reservationForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
