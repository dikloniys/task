export interface ICardProps {
  data: ICompanyData;
  handleOpenPopup: (text: string, type:string) => void;
}

export interface ICompanyData {
  company: {
    companyId: string;
  };
  customerMarkParameters: {
    loyaltyLevel: {
      cashToMark: number;
      number: number;
      name: string;
      requiredSum: number;
    };
    mark: number;
  };
  mobileAppDashboard: {
    accentColor: string;
    backgroundColor: string;
    cardBackgroundColor: string;
    companyName: string;
    highlightTextColor: string;
    logo: string;
    mainColor: string;
    textColor: string;
  };
}
export interface ICardProps {
  companies: ICompanyData[]
}