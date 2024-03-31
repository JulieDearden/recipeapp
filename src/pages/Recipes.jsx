import React from "react"
import { useState, useEffect } from "react"

export default function Recipes() {
  
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState("");

  async function getMeals() {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal
      );
      const data = await res.json();
      setMeals(data.meals);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMeals();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    getMeals();
  }

  return (
    
      
    <div className="mx-24">
      <h1 className="flex text-white text-3xl pt-12 justify-center font-semibold">Start exploring delicious recipes now!</h1>

      <div>
      <form className="flex flex-wrap my-4 mx-24 justify-center" onSubmit={handleSubmit}>
        <input type="text" name="search" id="search" placeholder="Search for a food"  
          className="border-2 border-neutral-800 bg-neutral-100 text-neutral-600 rounded-full justify-center py-3 px-8 my-8" required
          style={{ width: "400px" }}
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
         <button type="submit" className="border-2 border-neutral-800 bg-neutral-100 font-normal text-neutral-600 py-3 px-8 my-8 ml-4 rounded-full">Submit</button>
      </form>
</div> 


      {meals ? (
        <div className="grid gap-10 px-16 bg-neutral-900 opacity-90 mx-24">
          {meals.map((meal) => (
            <article key={meal.idMeal}>
              
              <h2 className="flex flex-wrap items-center text-2xl lg:text-2xl text-white font-bold py-4 pr-4 opacity-90">
                {meal.strMeal}
                <span className="font-normal text-sm pl-10 pt-2">
                  {meal.strCategory}
                </span>{" "}
                <span className="font-normal text-sm px-4 pt-2">
                  {meal.strArea}
                </span>
              </h2>

              <div className="flex flex-wrap text-white justify-center opacity-90 mr-10">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "50%", height: "50%" }}
              />

              <div className="pl-2 pr-4 pt-4">
              <h3 className="text-2xl text-white font-bold pl-8">
                Ingredients
              </h3>
              <ul className="list-decimal list-inside text-white pl-8">
                {meal.strIngredient1 && meal.strMeasure1 && (
                  <li>
                    {meal.strMeasure1} {meal.strIngredient1}
                  </li>
                )}
                {meal.strIngredient2 && meal.strMeasure2 && (
                  <li>
                    {meal.strMeasure2} {meal.strIngredient2}
                  </li>
                )}
                {meal.strIngredient3 && meal.strMeasure3 && (
                  <li>
                    {meal.strMeasure3} {meal.strIngredient3}
                  </li>
                )}
                {meal.strIngredient4 && meal.strMeasure4 && (
                  <li>
                    {meal.strMeasure4} {meal.strIngredient4}
                  </li>
                )}
                {meal.strIngredient5 && meal.strMeasure5 && (
                  <li>
                    {meal.strMeasure5} {meal.strIngredient5}
                  </li>
                )}
                {meal.strIngredient6 && meal.strMeasure6 && (
                  <li>
                    {meal.strMeasure6} {meal.strIngredient6}
                  </li>
                )}
                {meal.strIngredient7 && meal.strMeasure7 && (
                  <li>
                    {meal.strMeasure7} {meal.strIngredient7}
                  </li>
                )}
                {meal.strIngredient8 && meal.strMeasure8 && (
                  <li>
                    {meal.strMeasure8} {meal.strIngredient8}
                  </li>
                )}
                {meal.strIngredient9 && meal.strMeasure9 && (
                  <li>
                    {meal.strMeasure9} {meal.strIngredient9}
                  </li>
                )}
                {meal.strIngredient10 && meal.strMeasure10 && (
                  <li>
                    {meal.strMeasure10} {meal.strIngredient10}
                  </li>
                )}
                {meal.strIngredient11 && meal.strMeasure11 && (
                  <li>
                    {meal.strMeasure11} {meal.strIngredient11}
                  </li>
                )}
                {meal.strIngredient12 && meal.strMeasure12 && (
                  <li>
                    {meal.strMeasure12} {meal.strIngredient12}
                  </li>
                )}
                {meal.strIngredient13 && meal.strMeasure13 && (
                  <li>
                    {meal.strMeasure13} {meal.strIngredient13}
                  </li>
                )}
                {meal.strIngredient14 && meal.strMeasure14 && (
                  <li>
                    {meal.strMeasure14} {meal.strIngredient14}
                  </li>
                )}
                {meal.strIngredient15 && meal.strMeasure15 && (
                  <li>
                    {meal.strMeasure15} {meal.strIngredient15}
                  </li>
                )}
                {meal.strIngredient16 && meal.strMeasure16 && (
                  <li>
                    {meal.strMeasure16} {meal.strIngredient16}
                  </li>
                )}
                {meal.strIngredient17 && meal.strMeasure17 && (
                  <li>
                    {meal.strMeasure17} {meal.strIngredient17}
                  </li>
                )}
                {meal.strIngredient18 && meal.strMeasure18 && (
                  <li>
                    {meal.strMeasure18} {meal.strIngredient18}
                  </li>
                )}
                {meal.strIngredient19 && meal.strMeasure19 && (
                  <li>
                    {meal.strMeasure19} {meal.strIngredient19}
                  </li>
                )}
                {meal.strIngredient20 && meal.strMeasure20 && (
                  <li>
                    {meal.strMeasure20} {meal.strIngredient20}
                  </li>
                )}
              </ul>
              </div>
              </div>

              <h3 className="text-2xl text-white font-bold pt-6">
                Instructions
              </h3>
              <p className="text-justify pt-4 pb-16 pr-4 text-white">{meal.strInstructions}</p>
            </article>
          ))}
        </div>
      ) : (
        <h2 className="text-4xl text-center text-white font-semibold bg-neutral-900 opacity-90 py-14">
          Sorry, we could not find {meal}
        </h2>
      )}
    </div>
    
  )
}