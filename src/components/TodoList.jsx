import React, { Fragment, useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import { TodoItem } from './TodoItem';

const KEY = "todolist-todos"


export function TodoList(){

    const [todos, setTodos] = useState([]);

    const titRef = useRef();
    const descripRef = useRef();
    const impoRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos){
            setTodos(storedTodos);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos])

    const agregarTarea = () => {
        console.log("AGREGANDO TAREA");

        
        const titulo = titRef.current.value;
        const descripcion = descripRef.current.value;
        const importancia = impoRef.current.checked;

       
        if (descripcion === '')
                   
        return alert("Debe ingresar una descripción");
       
         
        setTodos((prevTodos) => {
            const newTask = {
                id: uuid(),
                titulo: titulo,
                descripcion: descripcion,
                importancia:0

               
            }

            return [...prevTodos, newTask]
        })
        titRef.current.value=null
        descripRef.current.value = null
        impoRef.current.value=null
    }

    const ResumenTareas = () => {
        const cant = cantidadTareas()
        if (cant === 0){
            return (
                <div className="alert alert-success mt-3">
                    Felicitaciones no tienes tareas pendientes! :)
                </div>
            )
        }

        if (cant === 1){
            return (
                <div className="alert alert-info mt-3">
                    Te queda solamente una tarea pendiente!
                </div>
            )
        }

        return (
            <div className="alert alert-info mt-3">
                Te quedan {cant} tareas pendientes!
            </div>
        )
    }

    const cantidadTareas = () => {
        return todos.filter((todo) => !todo.completed).length;
    }

    const cambiarEstadoTarea = (id) => {
        console.log(id)
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id)
        todo.completed = !todo.completed;
        setTodos(newTodos)
    }

    const eliminarTareasCompletadas = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    } 
    return (

        <Fragment>
            <h1>Post it Simulator</h1>

            <div className="input-group mb-3">
                <input ref={titRef} placeholder='Título' className="form-control" type="text"></input>
                <input ref={descripRef} placeholder='Descripción' className="form-control" type="text"></input>
                <input ref={impoRef} type="checkbox" className="form-check-input me-2" id="importancia"></input>Importante
                
       
                <button onClick={agregarTarea} className="btn btn-info ms-1">Ingresar Post it<i className="bi bi-plus-circle"></i></button>
                
            </div>
            <div className="row col-lg-4">
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id}></TodoItem>
                ))}
            </div>

          
        </Fragment>

    );
}
