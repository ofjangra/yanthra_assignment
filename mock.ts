import { Chat, Conversation, TodaysAppointment, Vet } from "./types/types";
import Kanishk from "@/public/img/kanishk.svg"
import ProfileImage from "@/public/img/ProfileImage.png"
import DrJuhi from "@/public/img/Juhi.png"
import DrRahul from "@/public/img/rahul.png"


export const VetsMockData: Vet[] = [
    {
        id: 1,
        name: "Dr Kanishk",
        about: "Specialist as Veterinary orthopaedic, diagnose and treat musculoskeletal injuries and diseases for Dogs",
        doctorProfilePhoto: Kanishk,
        slotsAvailable: 3,
        status: "onbreak"
    },
    {
        id: 3,
        name: "Dr Juhi",
        about: "Specialist as Veterinary orthopaedic, diagnose and treat musculoskeletal injuries and diseases for Dogs ",
        doctorProfilePhoto: DrJuhi,
        slotsAvailable: 3,
        status: "online"
    }
]

export const Chats: Chat[] = [
    {
        senderName: 'Kanishk',
        senderId: 1,
        messages: [
            {
                messageId: 1,
                message: "Hi doctor Kanishk",
                recieverId: 1,
                senderId: 2,
                time: "June 5, 05:36 PM",
            },
            {
                messageId: 2,
                message: "Hi Reena",
                recieverId: 2,
                senderId: 1,
                time: "June 5, 05:38 PM",
            },
        ],
        recieverProfileImage: "/img/ProfileImage.png",
        senderProfileImage: "/img/kanishk.svg",
        senderStatus: "online"
    }
]


export const mockConversations: Conversation[] = [
    {
        id: 1,
        profileImage: "/img/kanishk.svg",
        name: "Dr. Kanishk",
        lastMessage: "Hello",
        time: "17:50"
    },
    {
        id: 2,
        profileImage: "/img/Juhi.png",
        name: "Dr. Juhi",
        lastMessage: "Where are the new leads",
        time: "14:45"
    },
    {
        id: 3,
        profileImage: "/img/rahul.png",
        name: "Dr. Rahul",
        lastMessage: "How are you doing",
        time: "12:23"
    },
    {
        id: 4,
        profileImage: "/img/bobby_sawyer.png",
        name: "Dr. Bobby Sawyer",
        lastMessage: "Hello",
        time: "10:34"
    },
    {
        id: 5,
        profileImage: "/img/kanishk.svg",
        name: "Dr. Kanishk",
        lastMessage: "Hello",
        time: "17:50"
    },
    {
        id: 6,
        profileImage: "/img/Juhi.png",
        name: "Dr. Juhi",
        lastMessage: "Where are the new leads",
        time: "14:45"
    },
    {
        id: 7,
        profileImage: "/img/rahul.png",
        name: "Dr. Rahul",
        lastMessage: "How are you doing",
        time: "12:23"
    },
    {
        id: 8,
        profileImage: "/img/bobby_sawyer.png",
        name: "Dr. Bobby Sawyer",
        lastMessage: "Hello",
        time: "10:34"
    }
]

export const todaysAppointments: TodaysAppointment[] = [
    {
        doctorName: "Rahul",
        doctorProfilePhoto: DrRahul,
        clientname: "Ramesh",
        pet: "Cat",
        petName: "Tom",
        appointmentStartTime: "09",
        appointmentEndTime: "11",
        amOrPm: "AM",
        description: "I have observed some swelling around the affected area experiencing some difficulty with his leg. Yesterday, he yelped in pain during our evening walk, and since then, he has been favoring one of his hind legs, avoiding putting weight on it."
    },
    {
        doctorName: "Juhi",
        doctorProfilePhoto: DrJuhi,
        clientname: "Ramesh",
        pet: "Cat",
        petName: "Tom",
        appointmentStartTime: "09",
        appointmentEndTime: "11",
        amOrPm: "AM",
        description: "I have observed some swelling around the affected area experiencing some difficulty with his leg. Yesterday, he yelped in pain during our evening walk, and since then, he has been favoring one of his hind legs, avoiding putting weight on it."
    },
    {
        doctorName: "Juhi",
        doctorProfilePhoto: DrJuhi,
        clientname: "Ramesh",
        pet: "Cat",
        petName: "Tom",
        appointmentStartTime: "09",
        appointmentEndTime: "11",
        amOrPm: "AM",
        description: "I have observed some swelling around the affected area experiencing some difficulty with his leg. Yesterday, he yelped in pain during our evening walk, and since then, he has been favoring one of his hind legs, avoiding putting weight on it."
    },
]