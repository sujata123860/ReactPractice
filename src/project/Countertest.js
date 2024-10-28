import React, { useState } from "react";
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
  const displayItem = [
    {
      id: 1,
      itemname: "Apple",
      calories: 52,
      protein: 0.26,
      carbs: 14,
      fat: 1,
      quantity: 1,
    },
    {
      id: 2,
      itemname: "Banana",
      calories: 89,
      protein: 1.09,
      carbs: 23,
      fat: 5,
      quantity: 1,
    },
  ];
  const [nutritionItems, setNutritionItems] = useState(displayItem);
  const [Item, setItem] = useState({
    itemname: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });
  const [editableItem, setEditableItem] = useState(null);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  const addItem = () => {
    if (
      Item.itemname &&
      Item.calories &&
      Item.protein &&
      Item.carbs &&
      Item.fat
    ) {
      setNutritionItems((prevItems) => [
        ...prevItems,
        { ...Item, id: nutritionItems.length + 1, quantity: 1 },
      ]);
      setItem({
        itemname: "",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
        quantity: 1,
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleEdit = (item) => {
    setEditableItem(item);
    setItem({
      itemname: item.itemname,
      calories: item.calories,
      protein: item.protein,
      carbs: item.carbs,
      fat: item.fat,
      quantity: item.quantity,
    });
  };
  const updateItem = () => {
    const updatedItems = nutritionItems.map((item) =>
      item.id === editableItem.id
        ? { ...editableItem, ...Item, name: Item.itemname }
        : item
    );
    setNutritionItems(updatedItems);
    setEditableItem(null);
    setItem({
      itemname: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
      quantity: 1,
    });
  };
  const handleQuantityChange = (id, change) => {
    const updatedItems = nutritionItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + change } : item
    );
    setNutritionItems(updatedItems);
  };
  const deleteItem = (id) => {
    const updatedItems = nutritionItems.filter((item) => item.id !== id);
    setNutritionItems(updatedItems);
  };

  return (
    <div>
      <div className="app">
        <h1>Nutrition Meter</h1>

        <div>
          <FontAwesomeIcon icon={faTimes} />
          Total calories exceed recommended limit (1000 calories)!
        </div>

        <div>
          <div className="grid gap-4">
            <div>
              <input
                type="text"
                placeholder="Item Name"
                name="itemname"
                value={Item.itemname}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Calories"
                name="calories"
                value={Item.calories}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Protein (g)"
                name="protein"
                value={Item.protein}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Carbs (g)"
                name="carbs"
                value={Item.carbs}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Fat (g)"
                name="fat"
                value={Item.fat}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="space-x-4">
            {editableItem ? (
              <button onClick={updateItem}>Update Item</button>
            ) : (
              <button onClick={addItem}>Add Item</button>
            )}
            <button
              onClick={() =>
                setItem({
                  itemname: "",
                  calories: "",
                  protein: "",
                  carbs: "",
                  fat: "",
                  quantity: 1,
                })
              }
            >
              Clear Form
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-1">
          {nutritionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md border-2 border-blue-400 
              hover:border-blue-500 hover:shadow-lg transition transform hover:scale-105"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {item.itemname}
              </h2>
              <ul className="mt-3">
                <li>Calories: {item.calories}</li>
                <li>Protein: {item.protein}g</li>
                <li>Carbs: {item.carbs}g</li>
                <li>Fat: {item.fat}g</li>
                <li className="flex items-center mt-2">
                  <button
                    className="buttonmeter bg-green-500 text-white hover:bg-green-600 p-2 rounded-md font-semibol"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-red-500 text-white hover:bg-red-600 p-2 rounded-md font-semibol"
                    onClick={() =>
                      item.quantity > 1 && handleQuantityChange(item.id, -1)
                    }
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </li>
              </ul>
              <div className="mt-3 flex justify-between">
                <button
                  className="buttonmeter bg-blue-500 text-white pd-2 rounded-md hover:bg-blue-600 
                  font-semibold focus:outline-none text-xs"
                  onClick={() => handleEdit(item)}
                >
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button
                  className="buttonmeter bg-red-500 text-white pd-2 rounded-md hover:bg-red-600 
                  font-semibold focus:outline-none text-xs"
                  onClick={() => deleteItem(item.id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p>
            Total Calories: 100{" "}
            <span>
              <FontAwesomeIcon icon={faUtensils} size="lg" />
            </span>
          </p>
          <p>Total Protein: 10g</p>
          <p>Total Carbs: 20g</p>
          <p>Total Fat: 30g</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionMeter;
