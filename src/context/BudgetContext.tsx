import { useReducer, createContext,type Dispatch, type ReactNode   } from "react"
import { budgetReducer, initialState } from "../reducers/budget-reducer";
import type { BudgetActions, BudgetState } from "../reducers/budget-reducer";


type BudgetContextProviderProps = {
  state: BudgetState,
  dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
  children: ReactNode
}


export const BudgetContext = createContext<BudgetContextProviderProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {

  const [state, dispatch] = useReducer(budgetReducer, initialState)

  return (
    <BudgetContext.Provider 
    value={{ 
      state, 
      dispatch 
    }}
    >
      {children}
    </BudgetContext.Provider>
  )
}