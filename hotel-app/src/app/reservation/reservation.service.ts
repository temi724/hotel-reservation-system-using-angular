import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];
  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservationById(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    console.log('Reservation added:', this.reservations);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id !== id);
    this.reservations.splice(index, 1);
  }
  updateReservation(id: string, updatedReservation: Reservation): void {
    const index = this.reservations.findIndex((res) => res.id === id);
    if (index !== -1) {
      this.reservations[index] = {
        ...this.reservations[index],
        ...updatedReservation,
      };
    }
  }
}
