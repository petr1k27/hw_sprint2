import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

export const pureAddUser = (name: string, setError: any, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    name
        ? addUserCallback(name)
        : setError("Ошибка! Введите имя!")
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    setName("");
}

export const pureOnBlur = (name: string, setError: any,) => {
    if(name.trim() === "") {
        setError("Ошибка! Введите имя!")
    }

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут

    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: React.KeyboardEvent<HTMLDivElement>, addUser: any) => {
    if (e.key === "Enter") {
        addUser();
    }

    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName(e.currentTarget.value);
        error && setError('');
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser);
    }

    let totalUsers = users.length; // need to fix
    let lastUserName = users.length ? users[users.length - 1].name : ""// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
