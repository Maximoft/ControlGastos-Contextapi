import { useReducer, createContext,type Dispatch, type ReactNode, useMemo   } from "react"
import { budgetReducer, initialState } from "../reducers/budget-reducer";
import type { BudgetActions, BudgetState } from "../reducers/budget-reducer";


type BudgetContextProviderProps = {
  state: BudgetState,
  dispatch: Dispatch<BudgetActions>
  totalExpenses: number
  raimingBudget: number
}

type BudgetProviderProps = {
  children: ReactNode
}


export const BudgetContext = createContext<BudgetContextProviderProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

  const [state, dispatch] = useReducer(budgetReducer, initialState)
  const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total ,0) ,[state])
  const raimingBudget = state.budget - totalExpenses
  return (
    <BudgetContext.Provider 
    value={{ 
      state, 
      dispatch,
      totalExpenses,
      raimingBudget 
    }}
    >
      {children}
    </BudgetContext.Provider>
  )
}