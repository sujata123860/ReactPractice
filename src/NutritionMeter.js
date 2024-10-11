import React, { useState, useEffect } from "react";
import "./NutritionMeter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faUtensils,
  faPlus,
  faMinus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const NutritionMeter = () => {
  const defaultItemsDisplayed = [
    {
      id: 1,
      name: "Apple",
      calories: 52,
      protein: 0.26,
      carbs: 14,
      fat: 1,
      quantity: 1,
    },
    {
      id: 2,
      name: "Banana",
      calories: 89,
      protein: 1.09,
      carbs: 23,
      fat: 5,
      quantity: 1,
    },
    {
      id: 3,
      name: "Grapes",
      calories: 40,
      protein: 0.2,
      carbs: 20,
      fat: 2,
      quantity: 1,
    },
    {
      id: 4,
      name: "Orange",
      calories: 35,
      protein: 0.15,
      carbs: 25,
      fat: 4,
      quantity: 1,
    },
  ];

  const [nutritionItems, setNutritionItems] = useState(defaultItemsDisplayed);
  const [newItem, setNewItem] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  const [editItem, setEditItem] = useState(null);
  const [totalCalories, setTotalCalories] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    const calculateTotalCalories = nutritionItems.reduce(
      (total, item) => total + parseFloat(item.calories) * item.quantity,
      0
    );

    setTotalCalories(calculateTotalCalories);

    if (calculateTotalCalories > 1000) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [nutritionItems]);

  const addNutritionItem = () => {
    if (
      newItem.name &&
      newItem.calories >= 0 &&
      newItem.protein >= 0 &&
      newItem.carbs >= 0 &&
      newItem.fat >= 0
    ) {
      setNutritionItems([
        ...nutritionItems,
        { ...newItem, id: Date.now(), quantity: 1 },
      ]);
      setNewItem({
        name: "",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
      });
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  const removeAllItems = () => {
    setNutritionItems([]);
  };

  const editItemFunction = (item) => {
    setEditItem(item.id);
    setNewItem({ ...item });
  };

  const updateItemFunction = () => {
    if (
      newItem.name &&
      newItem.calories >= 0 &&
      newItem.protein >= 0 &&
      newItem.carbs >= 0 &&
      newItem.fat >= 0
    ) {
      const updatedItems = nutritionItems.map((item) =>
        item.id === newItem.id ? newItem : item
      );
      setNutritionItems(updatedItems);
      setNewItem({
        name: "",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
      });
      setEditItem(null);
      setInputError(false);
    } else {
      setInputError(true);
    }
  };

  const deleteItemFunction = (id) => {
    const updatedItems = nutritionItems.filter((item) => item.id !== id);
    setNutritionItems(updatedItems);
  };

  const inputErrorStyle = {
    borderColor: "red",
  };

  const updateItemQuantity = (id, change) => {
    const updatedItems = nutritionItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + change, 1) }
        : item
    );
    setNutritionItems(updatedItems);
  };

  const totalProtein = () => {
    return nutritionItems.reduce(
      (total, item) => total + parseFloat(item.protein) * item.quantity,
      0
    );
  };

  const totalCarbs = () => {
    return nutritionItems.reduce(
      (total, item) => total + parseFloat(item.carbs) * item.quantity,
      0
    );
  };

  const totalFat = () => {
    return nutritionItems.reduce(
      (total, item) => total + parseFloat(item.fat) * item.quantity,
      0
    );
  };

  return (
    <div className="bg-green-200 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Nutrition Meter
        </h1>
        {showWarning && (
          <div className="bg-red-500 text-white p-2 rounded-md text-center mb-4">
            <FontAwesomeIcon icon={faTimes} className="mr-2" />
            Total calories exceed recommended limit (1000 calories)!
          </div>
        )}
        <div className="mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Item Name"
                className={`w-full py-2 px-3 border rounded-md focus:outline-none 
                focus:ring focus:border-blue-300 ${
                  inputError && !newItem.name ? "border-red-500" : ""
                }`}
                style={inputError && !newItem.name ? inputErrorStyle : {}}
                value={newItem.name}
                onChange={(e) =>
                  setNewItem({ ...newItem, name: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Calories"
                className={`w-full py-2 px-3 border rounded-md 
                focus:outline-none focus:ring focus:border-blue-300 ${
                  inputError && newItem.calories < 0 ? "border-red-500" : ""
                }`}
                style={
                  inputError && newItem.calories < 0 ? inputErrorStyle : {}
                }
                value={newItem.calories}
                onChange={(e) =>
                  setNewItem({ ...newItem, calories: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Protein (g)"
                className={`w-full py-2 px-3 border rounded-md focus:outline-none 
                focus:ring focus:border-blue-300 ${
                  inputError && newItem.protein < 0 ? "border-red-500" : ""
                }`}
                style={inputError && newItem.protein < 0 ? inputErrorStyle : {}}
                value={newItem.protein}
                onChange={(e) =>
                  setNewItem({ ...newItem, protein: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Carbs (g)"
                className={`w-full py-2 px-3 border rounded-md focus:outline-none 
                focus:ring focus:border-blue-300 ${
                  inputError && newItem.carbs < 0 ? "border-red-500" : ""
                }`}
                style={inputError && newItem.carbs < 0 ? inputErrorStyle : {}}
                value={newItem.carbs}
                onChange={(e) =>
                  setNewItem({ ...newItem, carbs: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Fat (g)"
                className={`w-full py-2 px-3 border rounded-md focus:outline-none 
                focus:ring focus:border-blue-300 ${
                  inputError && newItem.fat < 0 ? "border-red-500" : ""
                }`}
                style={inputError && newItem.fat < 0 ? inputErrorStyle : {}}
                value={newItem.fat}
                onChange={(e) =>
                  setNewItem({ ...newItem, fat: e.target.value })
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1"></div>
          </div>
          <div className="mt-3 flex justify-between">
            {editItem ? (
              <button
                className="buttonmeter bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 mb-4 
                  font-semibold focus:outline-none text-xs"
                onClick={updateItemFunction}
              >
                Update Item
              </button>
            ) : (
              <button
                className="buttonmeter bg-green-600 text-white p-3 rounded-md hover:bg-green-700 mb-4 
                  font-semibold focus:outline-none text-xs"
                onClick={addNutritionItem}
              >
                Add Item
              </button>
            )}
            <button
              className="buttonmeter bg-red-600 text-white p-3 rounded-md font-semibold mb-4 hover:bg-red-700 
                focus:outline-none text-xs"
              onClick={removeAllItems}
            >
              Clear All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {nutritionItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-md shadow-md border-2 border-blue-400 
              hover:border-blue-500 hover:shadow-lg transition transform hover:scale-105"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <ul className="mt-3">
                <li>Calories: {item.calories * item.quantity}</li>
                <li>Protein: {item.protein * item.quantity}g</li>
                <li>Carbs: {item.carbs * item.quantity}g</li>
                <li>Fat: {item.fat * item.quantity}g</li>
                <li className="flex items-center mt-2">
                  <button
                    className="buttonmeter bg-green-500 text-white hover:bg-green-600 p-2 rounded-md font-semibol"
                    onClick={() => updateItemQuantity(item.id, 1)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-red-500 text-white hover:bg-red-600 p-2 rounded-md font-semibol"
                    onClick={() => updateItemQuantity(item.id, -1)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </li>
              </ul>
              <div className="mt-3 flex justify-between">
                <button
                  className="buttonmeter bg-blue-500 text-white pd-2 rounded-md hover:bg-blue-600 
                  font-semibold focus:outline-none text-xs"
                  onClick={() => editItemFunction(item)}
                >
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button
                  className="buttonmeter bg-red-500 text-white pd-2 rounded-md hover:bg-red-600 
                  font-semibold focus:outline-none text-xs"
                  onClick={() => deleteItemFunction(item.id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl font-semibold">
            Total Calories: {totalCalories}{" "}
            <span id="nutrition-icon">
              <FontAwesomeIcon icon={faUtensils} size="lg" />
            </span>
          </p>
          <p className="text-xl font-semibold">
            Total Protein: {totalProtein()}g
          </p>
          <p className="text-xl font-semibold">Total Carbs: {totalCarbs()}g</p>
          <p className="text-xl font-semibold">Total Fat: {totalFat()}g</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionMeter;
