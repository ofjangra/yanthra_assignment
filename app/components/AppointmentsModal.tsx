import Image from "next/image"
import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux"
import { handleAppointmentsModal, handleConversationsModal } from "@/redux/slice"
import { useDispatch } from "react-redux"
import ArrowBack from "@/public/vector/ArrowBack.svg"
import SeerchIcon from "@/public/vector/Search.svg"
import "./AllChats.scss"
import { useState } from "react"
import { mockConversations, todaysAppointments } from "@/mock"
import "./AllAppointments.scss"
import { TodaysAppointment } from "@/types/types"
import Clock from "@/public/vector/Clock.svg"


const AppointmentCard = (props: TodaysAppointment) => {
    return (
        <>

            <div className="appointment_card_t flex flex-row items-start justify-between">
                <Image src={props.doctorProfilePhoto} alt="profilePhoto" height={80} width={80} className="doc_profile_photo" />
                <div className="appointment_info flex flex-col items-start justify-between">
                    <h2>Dr. {props.doctorName}</h2>
                    <p className="appointment_desc"><strong style={{ color: "#FF1616" }} > Description</strong>{props.description}</p>
                    <div className="client_time_info w-full flex flex-row items-center justify-between">
                        <p className="client_pet_info">Client {props.clientname} |{`${props.pet}(${props.petName})`}</p>
                        <span className="flex flex-row items-center justify-between">
                            <Image src={Clock} alt="clock" />
                            {`${props.appointmentStartTime} - ${props.appointmentEndTime} ${props.amOrPm}`}
                        </span>
                    </div>
                    <div className="action_buttons flex flex-row items-center">
                        <button type="button" className="button_filled">
                            Cancel
                        </button>
                        <button type="button" className="button_outlined">
                            Reschedule
                        </button>
                    </div>
                </div>
            </div >
        </>
    )
}


const AppointmentsSideBar = () => {
    const modalActive = useSelector<RootState>((state) => state.appSlice.appointmentsModalActive) as boolean
    const dispatch = useDispatch<AppDispatch>()
    const [searchItem, setSearchItem] = useState("")
    const data = todaysAppointments

    const [activeTabItem, setActiveTabItem] = useState(1)

    if (!modalActive) {
        return null
    }


    return (
        <>
            <div className="modal_container fixed top-0 left-0 w-full">
                <div className="s_appointments_container h-full  flex flex-col items-center justify-start absolute right-0 top-0 pt-6">
                    <div className="w-full h-auto title flex flex-row items-center justify-start px-6">
                        <span onClick={() => dispatch(handleAppointmentsModal(false))}>
                            <Image src={ArrowBack} alt="icon" className="mr-6 h-4" />
                        </span>
                        <h2>All Appointments</h2>
                    </div>
                    <div className="w-full px-6">
                        <div className="appointments_search w-full flex flex-row items-center justify-between relative mt-10">
                            <Image src={SeerchIcon} alt="icon" className="absolute left-3" />
                            <input type="text"
                                placeholder="Search..."
                                value={searchItem}
                                onChange={(e) => setSearchItem(e.target.value)} />
                        </div>
                    </div>


                    <div className="appointments_wrapper_t mt-10 w-full flex flex-col items-center justify-start">
                        <div className="navigations flex flex-row items-center justify-between w-full left-0 px-6">
                            <div className="flex flex-col items-center justify-between navigation_item" onClick={() => setActiveTabItem(1)}>
                                <span>Todays appointments</span>
                                <div className={activeTabItem === 1 ? "active" : ""}></div>
                            </div>
                            <div className="flex flex-col items-center justify-between navigation_item" onClick={() => setActiveTabItem(2)}>
                                <span>Pending appointments</span>
                                <div className={activeTabItem === 2 ? "active" : ""}></div>
                            </div>
                            <div className="flex flex-col items-center justify-between navigation_item" onClick={() => setActiveTabItem(3)}>
                                <span>Canceled appointments</span>
                                <div className={activeTabItem === 3 ? "active" : ""}></div>
                            </div>
                        </div>
                        <div className="appointments_t w-full p-6">
                            {
                                data.map((appointment, i) => (
                                    <AppointmentCard
                                        amOrPm={appointment.amOrPm}
                                        appointmentEndTime={appointment.appointmentEndTime}
                                        appointmentStartTime={appointment.appointmentStartTime}
                                        clientname={appointment.clientname}
                                        doctorName={appointment.doctorName}
                                        doctorProfilePhoto={appointment.doctorProfilePhoto}
                                        pet={appointment.pet}
                                        petName={appointment.petName}
                                        description={appointment.description}
                                        key={i}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentsSideBar