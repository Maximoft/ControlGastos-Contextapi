import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {
  const {state}=useBudget()
  const isEmpty =useMemo(() => state.expenses.length === 0, [state.expenses])
  return (
    <div  className="mt-10">
      {isEmpty ? <p className="text-cyan-800 font-bold text-2xl ">No Hay Gastos</p> : (
        <>
        <p className="text-cyan-800 text-2xl font-bold my-5"> Listado de Gastos </p>
        {state.expenses.map(expense =>(
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
