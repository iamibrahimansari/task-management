import styled from 'styled-components';
import {useContext} from 'react';
import {TodoContext} from '../store/TodoContext';

const Container = styled.header`

`

const Title = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
    color: #fff;
`

const Div = styled.div`
    height: 3rem;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 2rem;
`

const Input = styled.input`
    height: 100%;
    border-radius: 5px;
    border: none;
    width: 100%;
    padding-inline: 2rem;
    outline: none;
`

const Button = styled.button`
    background-color: #33D464;
    border-radius: 50%;
    border: none;
    width: 3rem;
    font-weight: bold;
    height: 100%;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
`

export const Header = () =>{
    const {todo, setTodo, inputText, setInputText, setAutoFocus, inputRef, nowDelete, setNowDelete, editListId} = useContext(TodoContext);
    const handleOnClick = (identifier) =>{
        if(!nowDelete){
            if(todo.length){
                setTodo([...todo, {id: todo[todo.length - 1].id + 1, text: inputText}])
            }else{
                setTodo([{id: 1, text: inputText}]);
            }
        }else{
            const temp = [...todo];
            temp[temp.findIndex(obj => obj.id === editListId)].text = inputText;
            setTodo(temp);
            setNowDelete(false);
        }
        setInputText('');
        setAutoFocus();
    }
    return(
        <Container>
            <Title>To-Do List</Title>
            <Div>
                <Input ref={inputRef} autoFocus onChange={event => setInputText(event.target.value)} value={inputText} type="text" placeholder="Write your todo" />
                <Button onClick={() => handleOnClick(nowDelete)} type="button">+</Button>
            </Div>            
        </Container>
    )
}