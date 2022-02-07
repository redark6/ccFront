import {MembershipDetails} from './membership-details';
import {BillingInformations} from './billing-informations';

export class MembershipApply {

  private _userId: number;
  private _membershipDetailsRequest: MembershipDetails;
  private _billingInformationsRequest: BillingInformations;
  private _applicationDate: string;

  constructor(userId: number, membershipDetailsRequest: MembershipDetails, billingInformationsRequest: BillingInformations, applicationDate: string) {
    this._userId = userId;
    this._membershipDetailsRequest = membershipDetailsRequest;
    this._billingInformationsRequest = billingInformationsRequest;
    this._applicationDate = applicationDate;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get membershipDetailsRequest(): MembershipDetails {
    return this._membershipDetailsRequest;
  }

  set membershipDetailsRequest(value: MembershipDetails) {
    this._membershipDetailsRequest = value;
  }

  get billingInformationsRequest(): BillingInformations {
    return this._billingInformationsRequest;
  }

  set billingInformationsRequest(value: BillingInformations) {
    this._billingInformationsRequest = value;
  }

  get applicationDate(): string {
    return this._applicationDate;
  }

  set applicationDate(value: string) {
    this._applicationDate = value;
  }
}
