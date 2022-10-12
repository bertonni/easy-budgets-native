import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AlertProps = {
  show?: boolean;
  close: () => void;
  title: string;
  message: string;
  variant: string;
}

export type StackParamList = {
  Home: undefined;
  Incomes: undefined;
  Expenses: undefined;
};

export type ExpenseStackParamList = {
  Add: undefined;
  View: undefined;
};

export type IncomeStackParamList = {
  Add: undefined;
  View: undefined;
};

export type IncomeFormData = {
  title: string;
  quantity: string;
};

export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

export type AddExpenseProps = NativeStackScreenProps<ExpenseStackParamList, 'Add'>;
export type ViewExpensesProps = NativeStackScreenProps<ExpenseStackParamList, 'View'>;

export type AddIncomeProps = NativeStackScreenProps<IncomeStackParamList, 'Add'>;
export type ViewIncomesProps = NativeStackScreenProps<IncomeStackParamList, 'View'>;