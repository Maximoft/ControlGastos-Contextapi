import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpensiveModal";
import ExpenseList from "./components/ExpenseList";
import FilterByCategory from "./components/FilterByCategory";



function App() {
  const { state} = useBudget()
  const isValidBudget = useMemo (() => state.budget > 0 , [state.budget])

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state])

  return (
    <>
      <header className="bg-blue-600 pb-32 pt-12 max-h-72">
        <h1 className="text-4xl text-center text-white font-bold">
          Control de Gastos
        </h1>
        <p className="text-center text-white mt-1">
          Administra tus gastos mensuales con facilidad
        </p>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl -mt-20 p-10">
        {isValidBudget ?  <BudgetTracker /> : <BudgetForm />}
      </div>

      

      {isValidBudget && (
        <main className="max-w-3xl mx-auto  border-t-2 m-4 border-pink-700">
          <FilterByCategory/>
          <ExpenseList/>
          <ExpenseModal/>
        </main>
        
      )}
      
    </>
  )
}

export default App
