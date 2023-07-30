import {createContext, useRef, useState} from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({children}) =>{
    const [inputText, setInputText] = useState('');
    const [todo, setTodo] = useState([]);
    const inputRef = useRef(null);
    const [nowDelete, setNowDelete] = useState(false);
    const [editListId, setEditListId] = useState(null);
    const setAutoFocus = () =>{
        inputRef.current?.focus();
    }
    const contextValue = {
        todo,
        setTodo,
        inputText,
        setInputText,
        setAutoFocus,
        inputRef,
        nowDelete,
        setNowDelete,
        editListId,
        setEditListId
    }
    return(
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
    )
}