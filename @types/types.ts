import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  Incomes: undefined;
  Expenses: undefined;
}

export type ExpenseStackParamList = {
  Add: undefined;
  View: undefined;
}

export type IncomeStackParamList = {
  Add: undefined;
  View: undefined;
}

export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

export type AddExpenseProps = NativeStackScreenProps<ExpenseStackParamList, 'Add'>;
export type ViewExpensesProps = NativeStackScreenProps<ExpenseStackParamList, 'View'>;

export type AddIncomeProps = NativeStackScreenProps<IncomeStackParamList, 'Add'>;
export type ViewIncomesProps = NativeStackScreenProps<IncomeStackParamList, 'View'>;