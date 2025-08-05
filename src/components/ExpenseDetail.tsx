import { useMemo } from "react"
import { formatDate } from "../helpers"
import type { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"

type ExpenseDetailProps = {
  expense: Expense
}

export default function ExpenseDetail({expense}: ExpenseDetailProps) {
  const categoryInfo = useMemo(() => categories.find(cat => cat.id === expense.category), [expense])

  
  return (
    <div className="bg-white shadow-lg p-10 w-full border-b rounded-xl flex gap-8 border-gray-200 mb-3">
      <div>
        <img className="w-20" src={`/icono_${categoryInfo?.icon}.svg`} alt="icono gasto" />
      </div>

      <div className="flex-1 space-y-2">
        <p className="text-slate-500 text-sm font-bold uppercase"> {categoryInfo?.name} </p>
        <p>{expense.expenseName}</p>
        <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
      </div>
      <AmountDisplay
      amount={expense.amount}/>
    </div>
  )
}
