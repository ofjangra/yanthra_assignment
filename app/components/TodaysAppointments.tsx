import Image from "next/image"
import Clock from "@/public/vector/Clock.svg"
import Direct from "@/public/vector/Direct.svg"
import { TodaysAppointment } from "@/types/types"



type TodaysAppointmentDataProps = {
    appointments: TodaysAppointment[]
}
const TodaysAppointmentCard = (props: TodaysAppointment) => {
    return (
        <>
            <div className="appointment_card flex flex-col items-center justify-between w-full">
                <div className="flex flex-row items-center  appointment_info w-full">
                    <Image src={props.doctorProfilePhoto} alt="Doctor Profile Photo" className="doctor-profile-photo" />
                    <div className="appointment_info_text h-full flex flex-col items-start justify-between">
                       <div className="gap-2 flex flex-col items-start justify-between">
                       <h2>Dr. {props.doctorName}</h2>
                        <p>Client {props.clientname} |{`${props.pet}(${props.petName})`}</p>
                       </div>
                        <span className="flex items-center justify-between gap-1">
                            <Image src={Clock} alt="Clock Icon" />
                            {props.appointmentStartTime} - {props.appointmentEndTime} {props.amOrPm}
                        </span>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end w-full mt-4">
                    <button type="button" className="button_filled">
                        Cancel
                    </button>
                    <button type="button" className="button_outlined flex items-center ml-3">
                        <Image src={Direct} alt="icon" />
                        Message
                    </button>
                </div>

            </div>
        </>
    )
}


const TodaysAppointments = (props: TodaysAppointmentDataProps) => {
    return (
        <>
            <div className="appointments">
                <div className="container_title flex items-center justify-between w-full todays_appointments">
                    <h2>Todays Appointments</h2>
                    <h2>{props.appointments.length}</h2>
                </div>
                <div className="flex flex-col items-center justify-around overflow-scroll appointment_cards_wrapper w-full">
                    {
                        props.appointments.length > 0 ?
                            props.appointments.map((card, i) => (
                                <TodaysAppointmentCard
                                    key={i}
                                    doctorName={card.doctorName}
                                    doctorProfilePhoto={card.doctorProfilePhoto}
                                    clientname={card.clientname}
                                    pet={card.pet}
                                    petName={card.petName}
                                    appointmentStartTime={card.appointmentStartTime}
                                    appointmentEndTime={card.appointmentEndTime}
                                    amOrPm={card.amOrPm} />
                            ))
                            : <h2>No Appointments for today</h2>
                    }
                </div>
            </div>
        </>
    )
}

export default TodaysAppointments