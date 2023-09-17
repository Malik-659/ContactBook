import React, { useState } from "react";
import "./BookList.css";

const BookList = () => {
  const [items, setItems] = useState([]);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (
      inputValue1.trim() !== "" &&
      inputValue2.trim() !== "" &&
      inputValue3.trim() !== ""
    ) {
      if (editIndex !== null) {
        const updatedItems = [...items];
        updatedItems[editIndex] = {
          inp1: inputValue1,
          inp2: inputValue2,
          inp3: inputValue3,
        };
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        setItems([
          ...items,
          { inp1: inputValue1, inp2: inputValue2, inp3: inputValue3 },
        ]);
      }
      setInputValue1("");
      setInputValue2("");
      setInputValue3("");
    }
  };

  const handleEdit = (index) => {
    const itemToEdit = items[index];
    setEditIndex(index);
    setInputValue1(itemToEdit.inp1);
    setInputValue2(itemToEdit.inp2);
    setInputValue3(itemToEdit.inp3);
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Contact Book</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={inputValue1}
          onChange={(e) => setInputValue1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={inputValue3}
          onChange={(e) => setInputValue3(e.target.value)}
        />
        <button onClick={handleAdd}>
          {editIndex !== null ? "Изменить" : "Добавить"}
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {item.inp1}
            </div>
            <div>
              <strong>Image:</strong> {item.inp2}
            </div>
            <div>
              <strong>Phone:</strong> {item.inp3}
            </div>
            <button onClick={() => handleEdit(index)}>Редактировать</button>
            <button onClick={() => handleDelete(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
