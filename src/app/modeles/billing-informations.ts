export class BillingInformations {

  private _cardNumber: string;
  private _expirationDate: string;
  private _secretPictogram: string;
  private _ownerName: string;

  constructor(cardNumber: string, expirationDate: string, secretPictogram: string, ownerName: string) {
    this._cardNumber = cardNumber;
    this._expirationDate = expirationDate;
    this._secretPictogram = secretPictogram;
    this._ownerName = ownerName;
  }

  get cardNumber(): string {
    return this._cardNumber;
  }

  set cardNumber(value: string) {
    this._cardNumber = value;
  }

  get expirationDate(): string {
    return this._expirationDate;
  }

  set expirationDate(value: string) {
    this._expirationDate = value;
  }

  get secretPictogram(): string {
    return this._secretPictogram;
  }

  set secretPictogram(value: string) {
    this._secretPictogram = value;
  }

  get ownerName(): string {
    return this._ownerName;
  }

  set ownerName(value: string) {
    this._ownerName = value;
  }
}
