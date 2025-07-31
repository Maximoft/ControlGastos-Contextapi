import { useMemo } from "react";
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpensiveModal";



function App() {
  const { state} = useBudget()

  const isValidBudget = useMemo (() => state.budget > 0 , [state.budget])

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="text-4xl text-center text-white font-bold">
          Control de Gastos
        </h1>
        <p className="text-center text-white mt-3">
          Administra tus gastos mensuales con facilidad
        </p>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl mt-10 p-10">
        {isValidBudget ?  <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseModal/>
        </main>
        
      )}
      
    </>
  )
}

export default App
