"use client"
import Image from "next/image"
import { Vet } from "@/types/types"
import EllipseGreen from "@/public/vector/EllipseGreen.svg"
import ClockBreak from "@/public/vector/BreakClock.svg"
import DirectWhite from "@/public/vector/Direct_white.svg"
import BlueEllipse from "@/public/vector/EllipseBlue.svg"
import AddIcon from "@/public/vector/Plus.svg"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux"
import { handleChatModal, handleChats } from "@/redux/slice"
type VetsDataProps = {
    vets: Vet[]
}
const VetCard = (props: Vet) => {
    const dispatch = useDispatch<AppDispatch>()
    const handleChat = (id: number | String) => {
        dispatch(handleChatModal(true))
        dispatch(handleChats(id))
    }
    return (
        <>
            <div className="vet_card flex flex-col items-center justify-between w-full">
                <div className="flex flex-row items-center  doctor_info w-full">
                    <Image src={props.doctorProfilePhoto} alt="Doctor Profile Photo" className="doctor-profile-photo" />
                    <div className="doctor_info_text h-full w-full flex flex-col items-start justify-between relative">
                        <span className="vet_status absolute flex flex-row items-center" style={{ color: props.status === "online" ? "#008E44" : props.status === "onbreak" ? "#FF4B4B" : "#000" }}>
                            <Image src={props.status === "online" ? EllipseGreen : props.status === "onbreak" ? ClockBreak : ""} alt="icon" />
                            {props.status === "online" ? "online" : props.status === "onbreak" ? "On break" : ""}
                        </span>
                        <div className="gap-2 flex flex-col items-start justify-between">
                            <h2>Dr. {props.name}</h2>
                            <p>{props.about}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end w-full mt-4">
                    <button type="button" className="slots_button flex flex-row items-center justify-between">
                        <Image src={BlueEllipse} alt="ellipse" />
                        {props.slotsAvailable} Slots Available
                    </button>
                    <button type="button" className="button_filled flex items-center ml-3" onClick={() => handleChat(props.id!)}>
                        <Image src={DirectWhite} alt="icon" />
                        Message
                    </button>
                </div>

            </div>
        </>
    )
}


const Vets = (props: VetsDataProps) => {
    return (
        <>
            <div className="vets">
                <div className="container_title flex items-center justify-between w-full vets_title">
                    <h2>All Vets</h2>
                    <h2>{props.vets.length}</h2>
                </div>
                <div className="flex flex-col items-center justify-around overflow-scroll vets_cards_wrapper w-full">
                    {
                        props.vets.length > 0 ?
                            props.vets.map((card, i) => (
                                <VetCard
                                    id={card.id}
                                    key={i}
                                    name={card.name}
                                    doctorProfilePhoto={card.doctorProfilePhoto}
                                    about={card.about}
                                    slotsAvailable={card.slotsAvailable}
                                    status={card.status}
                                />
                            ))
                            : <h2>No Vets</h2>
                    }
                </div>
                <div className="add_vet w-full flex flex-row items-center justify-center">
                    <Image src={AddIcon} alt="add" />
                    Add New Vet
                </div>
            </div>
        </>
    )
}

export default Vets