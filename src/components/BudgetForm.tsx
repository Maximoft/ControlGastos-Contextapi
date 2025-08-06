import { useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"


export default function BudgetForm() {
  
  const [budget, setBudget] = useState(0)
  const { dispatch } = useBudget()

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type: 'add-budget', payload: {budget}})
    
  }

  const isValid = useMemo (() => {
    return !isNaN(budget) && budget > 0
    
  }, [budget])
  return (
    <form action="" className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col spa-y-5">
        <label htmlFor="budget" className="text-4xl text-blue-500 font-bold text-center m-3">
          Definir Presupuesto</label>
          <input type="number" 
          id="budget" 
          className="w-full bg-blue-100/50 border border-gray-300 rounded-2xl p-2 text-center"
          placeholder="Definir presupuesto"
          name="budget"
          value={budget}
          onChange={handleBudgetChange}
          />
      </div>

      <div className="flex justify-center">
        <input type="submit" 
      value="Guardar" 
      className="w-40  bg-blue-500  text-white font-bold py-2 rounded-xl
        hover:bg-blue-900 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" 
      disabled={!isValid}
      />
      </div>
      
    </form>
  )
}
