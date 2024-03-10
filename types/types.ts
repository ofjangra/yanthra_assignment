import { StaticImageData } from "next/image"

export type TodaysAppointment = {
    doctorName: string,
    doctorProfilePhoto: StaticImageData,
    clientname: string,
    pet: string,
    petName: string,
    appointmentStartTime: string,
    appointmentEndTime: string,
    amOrPm: "AM" | "PM"
}