export class MembershipDetails {

  private _applictionPrice: number;
  private _membershipDuration: number;

  constructor(applictionPrice: number, membershipDuration: number) {
    this._applictionPrice = applictionPrice;
    this._membershipDuration = membershipDuration;
  }

  get applictionPrice(): number {
    return this._applictionPrice;
  }

  set applictionPrice(value: number) {
    this._applictionPrice = value;
  }

  get membershipDuration(): number {
    return this._membershipDuration;
  }

  set membershipDuration(value: number) {
    this._membershipDuration = value;
  }
}
