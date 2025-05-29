export class CreateBidDto {
  jobId: string;
  freelancerId: string;
  proposalText: string;
  piQuote: number;
  timeline?: string;
}