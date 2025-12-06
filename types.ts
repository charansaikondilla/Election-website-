export interface Representative {
  name: string;
  title: string;
  imageUrl: string;
  about: string;
  keyPromises: string[];
  partyName: string;
  partySymbolUrl: string;
  wardNumber: string;
  villageName: string;
}

export enum IssueStatus {
  InProgress = 'In Progress',
  Reported = 'Reported',
}

export interface Issue {
  id: number;
  title: string;
  status: IssueStatus;
  icon: 'car' | 'lightbulb';
}

export interface ProblemType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: 'car' | 'lightbulb' | 'spray-can' | 'trash';
}