export class Status {
  code?: string;
  level?: string;
  text?: string;
}

export class Article {
  activeSubstance: string;
  articleInfoText?: string;
  articleNumber: string;
  articleStatus: Status;
  canBePurchased: boolean;
  cheapestReplacement?: Article;
  description?: string;
  extraCost: number;
  header: string;
  id: string;
  isNarcotic: boolean;
  nplpackid: string;
  numericalNumber: number;
  originalUnitPrice: number;
  packagingText: string;
  pharmaceuticalForm: string;
  preamble: string;
  productLongName: string;
  productName: string;
  purchaseStatus: Status;
  stock: number;
  stockStatus: string;
  strength: string;
}

export class Prescriber {
  name: string;
  phoneNumber: string;
  profession: string;
  workplace: string;
}

export class PrescriptionsDTO {
  active: boolean;
  article: Article;
  dosage: string;
  maxNumberOfPacks: number;
  numberOfWithdrawals: number;
  numberOfWithdrawalsLeft: number;
  prescriber: Prescriber;
  prescriptionId: number;
}
