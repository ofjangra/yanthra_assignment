import Image from "next/image"
import GreenEllipse from "@/public/vector/EllipseGreen.svg"
import Cross from "@/public/vector/Cross.svg"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux"
import { AppState, handleChatModal } from "@/redux/slice"
import { useDispatch } from "react-redux"


const ChatModal = () => {
    const state = useSelector<RootState>((state) => state.appSlice) as AppState

    const dispatch = useDispatch<AppDispatch>()

    const chatsData = state.chats
    const userId = state.userID

    if (!state.chatModalActive) {
        return null
    }
    return (
        <>
            <div className="modal_container fixed top-0 left-0 w-full">
                <div className="Chat_container flex flex-col items-center justify-between">
                    <div className="chat_title flex flex-row items-center justify-between">
                        <div className="chat_user_info flex flex-row items-center justify-between">
                            <Image src={chatsData.senderProfileImage} alt="user" width={40} height={40} className="sender_title_image" />
                            <div className="sender_name_status">
                                <strong>{chatsData.senderName}</strong>
                                {
                                    chatsData.senderStatus === "online" ?
                                        <span className="flex flex-row items-center justify-between">
                                            <Image src={GreenEllipse} alt="user" />
                                            online
                                        </span> : <span>offline</span>
                                }
                            </div>
                        </div>
                        <span onClick={() => dispatch(handleChatModal(false))}>
                            <Image src={Cross} alt="close" />
                        </span>
                    </div>
                    <div className="chat_messages">
                        {

                            chatsData.messages.map((message) => {
                                const allSenderMessages = chatsData.messages.filter((m) => m.senderId !== userId)
                                const allReciverMessages = chatsData.messages.filter((m) => m.recieverId === userId)
                                const lastSenderMessage = allSenderMessages[allSenderMessages.length - 1]
                                const lastRecieverMessage = allReciverMessages[allReciverMessages.length - 1]

                                return (
                                    <>
                                        <div className={message.senderId === userId ? "message_text_continer flex flex-row items-center sent" : "message_text_continer flex flex-row items-center recieved"} key={message.messageId}>

                                            {
                                                message.senderId === userId ?
                                                    <Image src={chatsData.recieverProfileImage} height={16} width={16} alt="user"  /> :
                                                    <Image src={chatsData.senderProfileImage} height={16} width={16} alt="user"/>
                                            }

                                            <p>{message.message}
                                            </p>

                                        </div>
                                    </>
                                )
                            }
                            )
                        }
                    </div>
                    <div className="send_message_area relative">

                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatModal