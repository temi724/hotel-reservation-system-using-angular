import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css',
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  constructor(
    private rs: ReservationService,
    private fb: FormBuilder,
    private router: Router,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      roomNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
    let id = this.ac.snapshot.paramMap.get('id');
    if (id) {
      let reservation = this.rs.getReservationById(id);
      if (reservation) {
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  onSubmit() {
    // console.log('hello');
    if (this.reservationForm.valid) {
      let rf: Reservation = this.reservationForm.value;
      let id = this.ac.snapshot.paramMap.get('id');
      if (id) {
        this.rs.updateReservation(id, rf);
      } else {
        this.rs.addReservation(rf);
      }

      this.reservationForm.reset();
      this.router.navigate(['/list']);
    }
  }
}
