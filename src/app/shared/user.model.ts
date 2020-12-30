export interface UserData {
    id?: number;
    name: string;
    date: {
      day: number,
      month: number,
      year: number
    };
    phone: string;
  }