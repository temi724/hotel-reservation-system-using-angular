import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    let storedReservations = localStorage.getItem('reservations');
    this.reservations = storedReservations
      ? JSON.parse(storedReservations)
      : [];
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getReservationById(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex((res) => res.id !== id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    const index = this.reservations.findIndex((res) => res.id === id);
    if (index !== -1) {
      this.reservations[index] = {
        ...this.reservations[index],
        ...updatedReservation,
      };
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
  }
}
