export class Membership {

  private _id: number;
  private _userId: number;
  private _price: number;
  private _startMembership: string;
  private _endMembership: string;
  private _automaticMembershipRenew: boolean;

  constructor(id: number, userId: number, price: number, startMembership: string, endMembership: string, automaticMembershipRenew: boolean) {
    this._id = id;
    this._userId = userId;
    this._price = price;
    this._startMembership = startMembership;
    this._endMembership = endMembership;
    this._automaticMembershipRenew = automaticMembershipRenew;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get startMembership(): string {
    return this._startMembership;
  }

  set startMembership(value: string) {
    this._startMembership = value;
  }

  get endMembership(): string {
    return this._endMembership;
  }

  set endMembership(value: string) {
    this._endMembership = value;
  }

  get automaticMembershipRenew(): boolean {
    return this._automaticMembershipRenew;
  }

  set automaticMembershipRenew(value: boolean) {
    this._automaticMembershipRenew = value;
  }
}
