import React from 'react';
import "./style/style.css";
import { useState } from "react";
{/* 
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> */}

const TDlist = () => {

    const [text, setText] = useState("");

    let id = 0;
    const addTodo = () => {
        let data = document.getElementById("item").value;
        setText(data);
        let d = document.getElementById("item");
        const deleteItem = document.createElement("button");
        deleteItem.setAttribute("id", `${id}`);
        deleteItem.className = "btnR px-3 ml-1 text-red-600 border border-red-500 rounded text-sm";
        document.getElementById("addedItems").value += data + "\n";
        if (text === d) {
            id = 0;
        }
        deleteItem.textContent = `REMOVE ${id + 1}`;
        deleteItem.type = "button";
        deleteItem.addEventListener("click", () =>
            removeTodo(id - 1)
        )
        d.value = "";
        ++id;
        const div = document.getElementsByClassName("Remove")[0];
        if (div) {
            div.appendChild(deleteItem);
        }
        alert("Item is added");
    }
    let ele = [];
    const removeTodo = (id) => {
        ele.push(document.getElementById("addedItems"));
        console.log("array=" + ele);
        const deleteItem = document.getElementById(id);
        let value = ele[id].innerHTML.split(",");

        console.log("V=" + value);
        var res = confirm(`Do you want to remove ${value}`);
        if (res === true) {
            if (text !== "") {
                setText("");
            }
            value.forEach((_, index) => {
                if (deleteItem) {
                    console.log("index=", index, "Value=" + _);
                    deleteItem.addEventListener('click', () => {
                        deleteItem.remove();
                        value.splice(index, 1);
                        ele.value = value.join('\n');
                    });
                }
            });
            // setRemove(true);
            // let id = deleteItem.getAttribute("id");
        }
    }
    //     setShow(!show);
    //         alert("Item is Removed");
    // } else {
    // alert("The Todo List is Empty.");
    // document.getElementById("delete").getAttribute("ref").current.disabled = true;
    // }
    //     const del= document.getElementsByClassName("btnR");
    //     if(del[0]){
    //     del[0].removeEventListener();
    // }
    // else{
    // console.log("closed");
    // }
    // <button type="button" className="btnRemove p-4 text-red-500 border hover:border-blue-500 rounded" onClick={removeTodo} ref={removeRef}>REMOVE</button>

    return (
        <div>
            <h3 className="absolute top-10"> To Do List App</h3>
            <div className="item flex gap-20">
                <span> Enter an item</span>
                <input id="item" className="border border-blue-500 text text-gray-900 font-bold bg-white-400" type="text" onChange={(e) => e.target.value} ></input>
                <button type="button" onClick={addTodo} className="btnAdd p-4 text-green-500 border border-green-500 border hover:border-2 border-green-500 rounded">ADD</button>
            </div>
            <span>List Items are</span>
            <form id="form" className="font-bold flex justify-evenly">
                <textarea rows={5} cols={20} id="addedItems" className="my-4 p-2 text text-gray-900"></textarea>
                <div id="buttonContainer" className="flex flex-col Remove mt-4">
                </div>
            </form>
        </div>
    )
}

export default TDlist;