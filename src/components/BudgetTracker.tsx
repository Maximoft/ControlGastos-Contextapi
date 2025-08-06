import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
export default function BudgetTracker() {
  
const {state, raimingBudget, totalExpenses, dispatch}=  useBudget()

const percentage = +((totalExpenses / state.budget) * 100).toFixed(2)
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
        value={percentage}
        styles={buildStyles({
          pathColor: percentage === 100 ? '#DC2626' : '#3B82F6',
          trailColor: '#F5F5F5',
          textColor: percentage === 100 ? '#DC2626' : '#3B82F6',
          textSize: 8
        })}
        text={`${percentage}% Gastado`}/>
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button onClick={() => dispatch({type: 'reset-app'})} type="button" className="bg-pink-600 w-full p-2 text-white font-bold rounded-xl uppercase hover:bg-pink-800">
          Resetear App
        </button>

        <AmountDisplay 
          label="Presupuesto"
          amount={state.budget}
        />

        <AmountDisplay 
          label="Disponible"
          amount={raimingBudget}
        />
      

        <AmountDisplay 
          label="Gastado"
          amount={totalExpenses}
        />
      </div>

      
    </div>
  )
}
 