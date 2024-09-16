import React from 'react'
import Message, {MessagePropsType} from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
type UserType = {
    avatar: string,
    name: string,
}

type msType = {
    text: string,
    time: string,
}

export type MessageType = {
    id: number,
    user: UserType,
    message: msType,
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Obi-Wan Kenobi',  // можно менять
    },
    message: {
        text: 'Hello there!', // можно менять
        time: '07:05', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'General Grievous', // можно менять
    },
    message: {
        text: 'General Kenobi!', // можно менять
        time: '07:06', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={"hw1"} className={s2.hwBlock}>
            <div className={s2.hwTitle}>Hometask № 1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
