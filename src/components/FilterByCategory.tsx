import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterByCategory() {
  const {dispatch}=useBudget()

  const handleClick = (id:string) => {
    dispatch({type: 'add-filter-category', payload:{id:id}})
  }


  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-4 text-center">
      <label className="text-pink-800 font-medium text-xl" htmlFor="">Categorias</label>
      <div className="flex w-full justify-around items-center mt-2">

        <button
            // key={category.id}
            type="button"
            onClick={() => handleClick('')}
            
          >
            <img
              src="/todas.png"
              // alt={category.name}
              className="w-12 h-12 object-contain hover:p-1"
            />
          </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => handleClick(category.id)}
            
          >
            <img
              src={`/icono_${category.icon}.svg`}
              alt={category.name}
              className="w-12 h-12 object-contain hover:p-1"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
