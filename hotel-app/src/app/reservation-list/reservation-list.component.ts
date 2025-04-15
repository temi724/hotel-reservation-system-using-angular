import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  standalone: false,
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  constructor(private rs: ReservationService) {
    this.reservations = this.rs.getReservations();
  }
  ngOnInit(): void {
    this.reservations = this.rs.getReservations();
  }

  reservations: Reservation[] = [];
}
