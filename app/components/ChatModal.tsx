import Image from "next/image"
import GreenEllipse from "@/public/vector/EllipseGreen.svg"
import Cross from "@/public/vector/Cross.svg"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux"
import { AppState, handleChatModal } from "@/redux/slice"
import { useDispatch } from "react-redux"
import SmileEmoji from "@/public/vector/Smile.svg"
import Attachments from "@/public/vector/Attachment.svg"
import Mic from "@/public/vector/Mic.svg"
import { useEffect, useRef } from "react"

const ChatModal = () => {
    const state = useSelector<RootState>((state) => state.appSlice) as AppState

    const dispatch = useDispatch<AppDispatch>()

    const chatsData = state.chats
    const userId = state.userID

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                dispatch(handleChatModal(false))
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dispatch]);

    if (!state.chatModalActive) {
        return null
    }
    return (
        <>
            <div className="modal_container fixed top-0 left-0 w-full">
                <div className="Chat_container flex flex-col items-center justify-between" ref={popupRef}>
                    <div className="chat_title flex flex-row items-center justify-between">
                        <div className="chat_user_info flex flex-row items-center justify-between">
                            <Image src={chatsData.senderProfileImage} alt="user" width={40} height={40} className="sender_title_image" />
                            <div className="sender_name_status">
                                <strong>{chatsData.senderName}</strong>

                                <span className="flex flex-row items-center justify-between">
                                    {
                                        chatsData.senderStatus === "online" ?
                                            <Image src={GreenEllipse} alt="user" /> : null
                                    }
                                    {
                                        chatsData.senderStatus === "online" ?
                                            "online" : "offline"
                                    }
                                </span>

                            </div>
                        </div>
                        <span onClick={() => dispatch(handleChatModal(false))}>
                            <Image src={Cross} alt="close" />
                        </span>
                    </div>
                    <div className="chat_messages">
                        {

                            chatsData.messages.map((message) => {

                                return (
                                    <>
                                        <div className={message.senderId === userId ? "message_text_continer flex flex-row items-center sent" : "message_text_continer flex flex-row items-center recieved"} key={message.messageId}>

                                            {
                                                message.senderId === userId ?
                                                    <Image src={chatsData.recieverProfileImage} height={16} width={16} alt="user" /> :
                                                    <Image src={chatsData.senderProfileImage} height={16} width={16} alt="user" />
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
                        <div className="write_message flex flex-row items-center justify-between">
                            <input type="text"
                                placeholder="Type Message" />
                            <div className="message_actions flex flex-row items-center justify-around">
                                <Image src={SmileEmoji} alt="emoji" />
                                <Image src={Attachments} alt="attachment" />
                                <Image src={Mic} alt="mic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatModal