import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {
  const {state}=useBudget()

  const filterExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory)
    : state.expenses

    const isEmpty =useMemo(() => filterExpenses.length === 0, [filterExpenses])

  return (
    <div  className="mt-10">
      {isEmpty ? <p className="text-cyan-800 font-bold text-2xl text-center">No Hay Gastos</p> : (
        <>
        <p className="text-cyan-800 text-2xl font-bold my-5 text-center"> Listado de Gastos </p>
        {filterExpenses.map(expense =>(
          <ExpenseDetail
          key={expense.id}
          expense={expense}
          />
        ))}
        </>
      )}
    </div>
  )
}
