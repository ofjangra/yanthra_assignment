import { Chats } from "@/mock";
import { Chat } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";




export type AppState = {
    userID: number | string
    chatModalActive: boolean
    chats: Chat
    conversationsModalActive: boolean
    appointmentsModalActive: boolean
    notificationsActive: boolean
}

const appState: AppState = {
    userID: 2,
    chatModalActive: false,
    chats: {
        senderId: 0,
        recieverProfileImage: "",
        senderName: "",
        senderProfileImage: "",
        senderStatus: "offline",
        messages: []
    },
    conversationsModalActive: false,
    appointmentsModalActive: false,
    notificationsActive: false
}

const appSlice = createSlice({
    name: "app",
    initialState: appState,
    reducers: {
        handleChatModal(state, action) {
            state.chatModalActive = action.payload
            if (action.payload === false) {
                state.chats = {
                    senderId: 0,
                    recieverProfileImage: "",
                    senderName: "",
                    senderProfileImage: "",
                    senderStatus: "offline",
                    messages: []
                }
            }
        },
        handleChats(state, action) {
            const userIndex = Chats.findIndex((item) => item.senderId === action.payload)
            state.chats = Chats[userIndex]
        },
        handleConversationsModal(state, action) {
            state.conversationsModalActive = action.payload
        },
        handleAppointmentsModal(state, action) {
            state.appointmentsModalActive = action.payload
        },
        handleNotificationsModal(state, action) {
            state.notificationsActive = action.payload
        },
    }
})



export const { handleChatModal, handleChats, handleConversationsModal, handleAppointmentsModal, handleNotificationsModal } = appSlice.actions

export default appSlice.reducer