import styled from 'styled-components';
import {BiEdit} from 'react-icons/bi';
import {RxCross2} from 'react-icons/rx';
import {useContext} from 'react';
import {TodoContext} from '../store/TodoContext';

const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    `
    
    const Li = styled.li`
    background-color: #A05B3B;
    padding: 1rem;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`

const Para = styled.p`
    flex-wrap: wrap;
    text-wrap: wrap;
`

const Div = styled.div`
    display: flex;
    gap: 1rem;
`

const btnStyle = {
    cursor: 'pointer',
}

export const List = () =>{
    const {todo, setTodo, setInputText, setAutoFocus, inputRef, setNowDelete, setEditListId} = useContext(TodoContext);
    const todoListDelete = id =>{
        setTodo(todo.filter(obj => obj.id !== id));
    }

    const todoListEdit = id =>{
        setInputText(todo.find(obj => obj.id === id).text);
        setAutoFocus();
        setNowDelete(true);
        setEditListId(id);
    }
    return(
        <Ul>
            {
                todo.map(obj => {
                    return(
                        <Li key={obj.id}>
                            <Para>{obj.text}</Para>
                            <Div>
                                <BiEdit style={{color: 'red', cursor: 'pointer'}} onClick={() => todoListEdit(obj.id)} />
                                <RxCross2 style={{color: 'lightgreen', cursor: 'pointer'}} onClick={() => todoListDelete(obj.id)} />
                            </Div>
                        </Li>
                    )
                })
            }
        </Ul>
    )
}