import logo from "@/public/vector/Logo.svg"
import Image from "next/image"
import "./nav.scss"
import HomeIcon from "@/public/vector/Home.svg"
import MessageIcon from "@/public/vector/Message.svg"
import PawOutlined from '@/public/vector/PawOutlined.svg'
import SubscriptionIcon from "@/public/vector/Subscription.svg"
import NotoficationBellIcon from "@/public/vector/NotificationBell.svg"
import Hamburger from "@/public/vector/Hamburger.svg"
import ProfileImage from "@/public/img/ProfileImage.png"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux"
import { handleAppointmentsModal, handleConversationsModal } from "@/redux/slice"

const Nav = () => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            <nav className="w-full flex navbar items-center justify-between">
                <Image src={logo} alt="logo" />
                <div className="flex flex-row items-center justify-between">
                    <ul className="nav-items flex flex-row items-center justify-between">
                        <li className="flex flex-row items-center justify-around">
                            <Image src={HomeIcon} alt="Home" />
                            <span>Home</span>
                        </li>

                        <li className="flex flex-row items-center justify-around" onClick={() => dispatch(handleConversationsModal(true))}>
                            <Image src={MessageIcon} alt="message" />
                            <span>Chats</span>
                            <small className="flex items-center justify-center">14</small>
                        </li>
                        <li className="flex flex-row items-center justify-around" onClick={() => dispatch(handleAppointmentsModal(true))}>
                            <Image src={PawOutlined} alt="message" />
                            <span>All Appointments</span>
                            <div className="flex items-center justify-center notification">2 new</div>
                        </li>
                        <li className="flex flex-row items-center justify-around">
                            <Image src={SubscriptionIcon} alt="message" />
                            <span>Subscription</span>
                        </li>
                        <li className="flex flex-row items-center justify-around">
                            <Image src={NotoficationBellIcon} alt="message" />
                            <span>Notification</span>
                            <small className="flex items-center justify-center">10</small>
                        </li>
                    </ul>
                    <div className="flex flex-row items-center justify-between nav-menu">
                        <Image src={Hamburger} alt="menu" />
                        <Image src={ProfileImage} alt="profile photo" />
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Nav