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
    description?: string
}

export type PendingAppointment = {
    doctorName: string,
    doctorProfilePhoto: StaticImageData,
    clientname: string,
    pet: string,
    petName: string,
    appointmentDate: string
    appointmentStartTime: string,
    appointmentEndTime: string,
    amOrPm: "AM" | "PM"
}
export type Vet = {
    id: number | string
    name: string,
    doctorProfilePhoto: StaticImageData,
    about: string,
    status: "online" | "onbreak" | "offline"
    slotsAvailable: number
}

export type Chat = {
    senderId: number | string,
    senderProfileImage: string,
    recieverProfileImage: string,
    senderStatus: "online" | "offline"
    senderName: string
    messages: {
        messageId: number | string
        senderId: number | string,
        recieverId: number | string,
        message: string,
        time: string
    }[]
}

export type Conversation = {
    id: number | string
    profileImage: string
    name: string,
    lastMessage: string,
    time: string
}
