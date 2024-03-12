import Image from "next/image"

import { Notification } from "@/types/types"
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux";
import { handleNotificationsModal } from "@/redux/slice";
import { notificatons } from "@/mock";
import { useSelector } from "react-redux";



const NotificationCard = (prps: Notification) => {


    return (
        <>
            <div className="flex flex-row items-center justify-between notification">
                <div className="nt_content">
                    <Image src={prps.profileImage} alt="user" width={48} height={48} />
                    <div className="nt-text">
                        {
                            prps.class === "appointment_decline" ?
                                <p><span>{prps.docName}</span> {prps.text}</p> :
                                prps.class === "new_appointment" ?
                                    <p>{prps.text} <span>{prps.docName}</span></p> :
                                    <p>{prps.text}</p>
                        }

                        <span>{prps.date}</span>
                    </div>
                </div>
            </div>
        </>
    )
}



const Notifications = () => {
    const modalActive = useSelector<RootState>((state) => state.appSlice.notificationsActive) as boolean
    const dispatch = useDispatch<AppDispatch>()

    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                dispatch(handleNotificationsModal(false))
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dispatch]);

    if (!modalActive) {
        return null
    }


    return (
        <>
            <div className="modal_container fixed top-0 left-0 w-full">
                <div className="notifications" ref={popupRef}>
                    <div className="notifications_header">
                        <span>Notifications</span>
                        <span>See All</span>
                    </div>
                    <div className="notifications_wrapper">
                        {
                            notificatons.map((item, i) => {
                                return (
                                    <NotificationCard
                                        class={item.class}
                                        date={item.date}
                                        profileImage={item.profileImage}
                                        text={item.text}
                                        docName={item.docName}
                                        key={i} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notifications