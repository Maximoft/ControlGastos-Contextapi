export type Expense = {
  id: string;
  expenseName: string;
  amount: number;
  category: string;
  date: value;
}

export type DraftExpense = Omit<Expense, 'id'>;

type valuePiece = Date | null;
export type value =  valuePiece | [valuePiece, valuePiece];

export type Category = {
  id: string;
  name: string;
  icon: string;
}