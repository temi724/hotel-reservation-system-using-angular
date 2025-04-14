export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  checkInDate: Date;
  checkOutDate: Date;
  roomType: string;
  roomNumber: number;
  //   numberOfGuests: number;
  //   specialRequests?: string;
}
