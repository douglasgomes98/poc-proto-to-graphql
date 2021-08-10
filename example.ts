/* eslint-disable */
export const protobufPackage = "api.flight.booking";

export enum BookingStatus {
  BOOKING_STATUS_UNSPECIFIED = "BOOKING_STATUS_UNSPECIFIED",
  BOOKING_STATUS_ONHOLD = "BOOKING_STATUS_ONHOLD",
  BOOKING_STATUS_TICKETED = "BOOKING_STATUS_TICKETED",
  BOOKING_STATUS_CANCELLED = "BOOKING_STATUS_CANCELLED",
  BOOKING_STATUS_PENDING = "BOOKING_STATUS_PENDING",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export enum GenderType {
  GENDER_TYPE_UNSPECIFIED = "GENDER_TYPE_UNSPECIFIED",
  GENDER_TYPE_FEMALE = "GENDER_TYPE_FEMALE",
  GENDER_TYPE_MALE = "GENDER_TYPE_MALE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export enum PaxType {
  PAX_TYPE_UNSPECIFIED = "PAX_TYPE_UNSPECIFIED",
  PAX_TYPE_ADT = "PAX_TYPE_ADT",
  PAX_TYPE_CHD = "PAX_TYPE_CHD",
  PAX_TYPE_INF = "PAX_TYPE_INF",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export enum Baggage {
  BAGGAGE_UNSPECIFIED = "BAGGAGE_UNSPECIFIED",
  BAGGAGE_NO = "BAGGAGE_NO",
  BAGGAGE_1_PIECE = "BAGGAGE_1_PIECE",
  BAGGAGE_1_PIECE_23KG = "BAGGAGE_1_PIECE_23KG",
  BAGGAGE_1_PIECE_32KG = "BAGGAGE_1_PIECE_32KG",
  BAGGAGE_2_PIECE = "BAGGAGE_2_PIECE",
  BAGGAGE_2_PIECE_23KG = "BAGGAGE_2_PIECE_23KG",
  BAGGAGE_2_PIECE_32KG = "BAGGAGE_2_PIECE_32KG",
  BAGGAGE_3_PIECE = "BAGGAGE_3_PIECE",
  BAGGAGE_3_PIECE_23KG = "BAGGAGE_3_PIECE_23KG",
  BAGGAGE_3_PIECE_32KG = "BAGGAGE_3_PIECE_32KG",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export enum Cabin {
  CABIN_UNSPECIFIED = "CABIN_UNSPECIFIED",
  CABIN_ECONOMY = "CABIN_ECONOMY",
  CABIN_PREMIUM = "CABIN_PREMIUM",
  CABIN_BUSINESS = "CABIN_BUSINESS",
  CABIN_FIRST = "CABIN_FIRST",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export enum LegStatus {
  LEG_STATUS_UNSPECIFIED = "LEG_STATUS_UNSPECIFIED",
  LEG_STATUS_CONFIRMED = "LEG_STATUS_CONFIRMED",
  LEG_STATUS_CANCELED = "LEG_STATUS_CANCELED",
  LEG_STATUS_NO_SHOW = "LEG_STATUS_NO_SHOW",
  LEG_STATUS_FLOWN = "LEG_STATUS_FLOWN",
  LEG_STATUS_REISSUED = "LEG_STATUS_REISSUED",
  LEG_STATUS_WAIT_LIST = "LEG_STATUS_WAIT_LIST",
  LEG_STATUS_SCHEDULE_CHANGE = "LEG_STATUS_SCHEDULE_CHANGE",
  LEG_STATUS_PENDING_CONFIRMATION = "LEG_STATUS_PENDING_CONFIRMATION",
  LEG_STATUS_FRAUD = "LEG_STATUS_FRAUD",
  LEG_STATUS_REFUNDED = "LEG_STATUS_REFUNDED",
  LEG_STATUS_SUSPENDED = "LEG_STATUS_SUSPENDED",
  LEG_STATUS_CHECKED_IN = "LEG_STATUS_CHECKED_IN",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export interface GetBookingRequest {
  id: string;
}

export interface GetBookingResponse {
  booking: Booking | undefined;
}

export interface ListBookingsRequest {}

export interface ListBookingsResponse {
  bookings: Booking[];
}

export interface CancelBookingRequest {
  id: string;
}

export interface CancelBookingResponse {
  booking: Booking | undefined;
}

export interface CreateBookingRequest {
  selectedTokens: string[];
  passengers: Passenger[];
}

export interface CreateBookingResponse {
  booking: Booking | undefined;
}

export interface UpdateBookingFeeRequest {
  bookingId: string;
  passengerFee: UpdateBookingFeeRequest_BookingPassengerFee[];
}

export interface UpdateBookingFeeRequest_BookingPassengerFee {
  passengerId: string;
  agentFee: number;
}

export interface UpdateBookingFeeResponse {
  booking: Booking | undefined;
}

export interface UpdateBookingTsaRequest {
  bookingId: string;
  bookingPassengerTsa: UpdateBookingTsaRequest_BookingPassengerTsa | undefined;
}

export interface UpdateBookingTsaRequest_BookingPassengerTsa {
  passengerId: string;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  genderType: GenderType;
  redress: string;
  passportIssuingCountry: string;
  passportNumber: string;
  nationality: string;
  passportExpiresAt: string;
}

export interface UpdateBookingTsaResponse {
  success: boolean;
  error: string;
}

export interface Booking {
  slices: Slice[];
  /** @deprecated */
  totalFare: number;
  /** @deprecated */
  totalTax: number;
  /** @deprecated */
  totalFee: number;
  /** @deprecated */
  totalPrice: number;
  /** @deprecated */
  pricePerPax: PaxPrice[];
  baggage: Baggage;
  seatReservation: boolean;
  milleage: boolean;
  createdAt: string;
  expiresAt: string;
  validatingCarrier: string;
  passengers: Passenger[];
  provider: Booking_Provider | undefined;
  bookingStatus: BookingStatus;
  userId: number;
  agencyId: number;
  id: string;
  issuedAt: string;
  cancelledAt: string;
  price: Price | undefined;
}

export interface Booking_Provider {
  locator: string;
  gds: string;
}

export interface Passenger {
  paxType: PaxType;
  title: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  genderType: GenderType;
  email: string;
  birthDate: string;
  middleName: string;
  id: string;
  price: Price | undefined;
  providerId: string;
  tickets: Passenger_Ticket[];
  tsa: Passenger_TSA | undefined;
  associatedInfantId: string;
}

export interface Passenger_Ticket {
  number: string;
  ticketType: Passenger_Ticket_TicketType;
  createdAt: string;
  pcc: string;
  providerDetails: string;
}

export enum Passenger_Ticket_TicketType {
  TICKET_TYPE_SEGMENT = "TICKET_TYPE_SEGMENT",
  TICKET_TYPE_ANCILLARY = "TICKET_TYPE_ANCILLARY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export interface Passenger_TSA {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  genderType: GenderType;
  redress: string;
  passportIssuingCountry: string;
  passportNumber: string;
  nationality: string;
  passportExpiresAt: string;
  providerId: string;
}

export interface PaxPrice {
  /** @deprecated */
  paxType: PaxType;
  /** @deprecated */
  quantity: number;
  /** @deprecated */
  fare: number;
  /** @deprecated */
  tax: number;
  /** @deprecated */
  fee: number;
}

export interface Price {
  originalCurrency: string;
  originalFare: number;
  fare: number;
  tax: number;
  agentFee: number;
  consolidFee: number;
  total: number;
}

export interface Slice {
  id: string;
  origin: string;
  destination: string;
  departureDate: string;
  arrivalDate: string;
  airline: string;
  duration: number;
  connections: string[];
  legs: Slice_Leg[];
  token: string;
}

export interface Slice_Leg {
  id: string;
  aircraft: string;
  destination: string;
  arrivalDate: string;
  arrivalTerminal: string;
  origin: string;
  departureDate: string;
  departureTerminal: string;
  duration: number;
  flightNumber: number;
  managedBy: string;
  numberOfStops: number;
  operatedBy: string;
  fareInfo: Slice_Leg_FareInfo | undefined;
  legStatus: LegStatus;
  providerId: string;
  providerStatus: string;
}

export interface Slice_Leg_FareInfo {
  fareClass: string;
  fareBasis: string;
  cabin: Cabin;
  baggage: Baggage;
}

export interface BookingService {
  CreateBooking(request: CreateBookingRequest): Promise<CreateBookingResponse>;
  ListBookings(request: ListBookingsRequest): Promise<ListBookingsResponse>;
  GetBooking(request: GetBookingRequest): Promise<GetBookingResponse>;
  UpdateBookingFee(
    request: UpdateBookingFeeRequest
  ): Promise<UpdateBookingFeeResponse>;
  UpdateBookingTsa(
    request: UpdateBookingTsaRequest
  ): Promise<UpdateBookingTsaResponse>;
  CancelBooking(request: CancelBookingRequest): Promise<CancelBookingResponse>;
}
