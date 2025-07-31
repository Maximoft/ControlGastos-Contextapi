import BudgetForm from "./components/BudgetForm"

function App() {


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
        <BudgetForm />
      </div>
    </>
  )
}

export default App
