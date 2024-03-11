import Image from "next/image"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux"
import { handleConversationsModal } from "@/redux/slice"
import { useDispatch } from "react-redux"
import ArrowBack from "@/public/vector/ArrowBack.svg"
import SeerchIcon from "@/public/vector/Search.svg"
import "./AllChats.scss"
import { useState } from "react"
import { mockConversations } from "@/mock"
import ConversationsIcon from "@/public/vector/ChatsCircle.svg"
import SettingsIcon from "@/public/vector/settings.svg"
import AddCircle from "@/public/vector/PlusCircled.svg"





const ChatsSideBar = () => {
    const modalActive = useSelector<RootState>((state) => state.appSlice.conversationsModalActive) as boolean
    const dispatch = useDispatch<AppDispatch>()
    const [searchItem, setSearchItem] = useState("")
    const [activeFooterItem, setActiveFooterItem] = useState(1)

    if (!modalActive) {
        return null
    }

    return (
        <>
            <div className="modal_container fixed top-0 left-0 w-full ">
                <div className="conversations_container h-full w-1/3 flex flex-col items-center justify-start absolute right-0 top-0 p-6">
                    <div className="w-full h-auto title flex flex-row items-center justify-start">
                        <span onClick={() => dispatch(handleConversationsModal(false))}>
                            <Image src={ArrowBack} alt="icon" className="mr-6 h-4" />
                        </span>
                        <h2>All Chats</h2>
                    </div>
                    <div className="conversations_search w-full flex flex-row items-center justify-between relative mt-10">
                        <Image src={SeerchIcon} alt="icon" className="absolute left-3" />
                        <input type="text"
                            placeholder="Search..."
                            value={searchItem}
                            onChange={(e) => setSearchItem(e.target.value)} />
                    </div>

                    <div className="conversations mt-10 w-full">
                        {
                            mockConversations.map((cnv) => (
                                <div className="conversation flex flex-row items-center justify-between w-full" key={cnv.id} >
                                    <div className="flex flex-row items-center ">
                                        <Image src={cnv.profileImage} alt="user" width={64} height={64} />
                                        <div className="conv_info flex flex-col items-start">
                                            <strong>{cnv.name}</strong>
                                            <span>{cnv.lastMessage}</span>
                                        </div>
                                    </div>
                                    <span>{cnv.time}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="conversations_footer flex flex-row items-center justify-start gap-8 p-6">
                        <div className={activeFooterItem === 1 ? "cnv_footer_icon flex items-center justify-center relative active" :
                            "cnv_footer_icon flex items-center justify-center relative"} onClick={() => setActiveFooterItem(1)}>
                            <Image src={ConversationsIcon} alt="icons" />
                            <small className="absolute">10</small>
                        </div>
                        <div className={activeFooterItem === 2 ? "cnv_footer_icon flex items-center justify-center active" :
                            "cnv_footer_icon flex items-center justify-center"} onClick={() => setActiveFooterItem(2)}>
                            <Image src={SettingsIcon} alt="icons" />
                        </div>
                        <div className={activeFooterItem === 3 ? "cnv_footer_icon flex items-center justify-center active" :
                            "cnv_footer_icon flex items-center justify-center"} onClick={() => setActiveFooterItem(3)}>
                            <Image src={AddCircle} alt="icons" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatsSideBar