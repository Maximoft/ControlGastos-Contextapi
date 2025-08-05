import DatePicker from "react-date-picker";
import { categories } from "../data/categories";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState, type ChangeEvent } from "react";
import { type DraftExpense} from "../types";
import type { Value } from "react-calendar/dist/esm/shared/types.js";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";



export default function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: '',
    category: '',
    date: new Date()
  })

  const [error, setError]=useState('')

  const {dispatch} = useBudget()

  const handleChange = (e:React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
    const {name, value} = e.target
    const isAmount = ['amount'].includes(name)

    setExpense({
      ...expense,
      [name]: isAmount ? +value : value
    })
  }

  const handleChangeDate = (value: Value) =>{
    setExpense ({
      ...expense,
      date:value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //validar
    if (Object.values(expense).includes('')) {
      setError('Todos los campos son obligatorios')
      return
      
    }
    //agregar un nuevo gasto
    dispatch({type: 'add-expense', payload: {expense}})
  
      //reiniciar el state
    setExpense({
      amount: 0,
      expenseName: '',
      category: '',
      date: new Date()
    })
  }

 

  return (
    <form action="" className="space-y-6" onSubmit={handleSubmit}>
      <legend className="uppercase text-center font-black text-2xl border-b-4 pb-2 border-b-pink-800/52">Nuevo Gasto</legend>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div>
        <label htmlFor="ExpenseName" className="block text-sky-900 font-medium">
          Nombre gasto:
        </label>
        <input
          type="text"
          id="expenseName"
          name="expenseName"
          className="w-full border border-gray-300 p-2 rounded-xl bg-slate-100"
          placeholder="Añade el nombre del gasto"
          onChange={handleChange}
          value={expense.expenseName}
        />
      </div>

      <div>
        <label htmlFor="amount" className="block text-sky-900 font-medium">
          Monto:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          className="w-full border border-gray-300 p-2 rounded-xl bg-slate-100"
          placeholder="Añade el monto del gasto ej. 300"
          onChange={handleChange}
          value={expense.amount}
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sky-900 font-medium">
          Categoria
        </label>
        <select
          id="category"
          name="category"
          className="w-full border border-gray-300 p-2 rounded-xl bg-slate-100"
          onChange={handleChange}
          value={expense.category}
        >
          <option value="">-- Seleccione --</option>
          {categories.map(category => (
            <option value={category.id} key={category.id}>{category.name}</option>
          ))}
        </select>
      </div>

       <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
        <label htmlFor="date" className="block text-sky-900 font-medium">
          Fecha gasto:
        </label>
        <DatePicker
          id="date"
          name="date"
          className="bg-slate-100"
          clearIcon={null}
          value={expense.date}
          calendarIcon={null}
          onChange={handleChangeDate}
          ></DatePicker>
      </div>

      <div className="flex justify-center">
          <button type="submit" className="bg-blue-600 hover:bg-blue-900 text-white p-2.5 rounded-2xl font-medium">
        Agregar Gasto
      </button>
      </div>
      
    </form>
  )
}
