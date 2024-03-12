"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import ProfileImage from "@/public/img/ProfileImage.png"
import { format } from 'date-fns';
import "./page.scss"
import Stack from "@/public/vector/Stack.svg"
import Stethoscope from "@/public/vector/Stethoscope.svg"
import PawFilled from "@/public/vector/PawFilled.svg"
import TodaysAppointments from "./components/TodaysAppointments";
import DrRahul from "@/public/img/rahul.png"
import { TodaysAppointment, Vet } from "@/types/types";
import { PendingAppointment } from '../types/types';
import PendingAppointments from "./components/PendingAppointments";
import Vets from "./components/Vets";
import DrJuhi from "@/public/img/Juhi.png"
import store from "../redux"
import { Provider } from "react-redux";
import ChatModal from "./components/ChatModal";
import { VetsMockData, todaysAppointments } from "@/mock";
import Nav from "./components/Nav";
import ChatsSideBar from "./components/AllChats";
import AppointmentsSideBar from "./components/AppointmentsModal";
import Notifications from "./components/Notifications";


const ProfileStats = () => {
  return (
    <>

      <div className="stats flex flex-row items-center justify-between">
        <div className="flex flex-row items-start justify-between stat_card">
          <Image src={Stack} alt="stack" />
          <div className="flex flex-col items-start justify-between">
            <span>Remaining Appointments</span>
            <h2>10 appt.</h2>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between stat_card">
          <Image src={Stethoscope} alt="stack" />
          <div className="flex flex-col items-start justify-between">
            <span>Doctore Present</span>
            <h2>04 Doctors</h2>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between stat_card">
          <Image src={PawFilled} alt="stack" />
          <div className="flex flex-col items-start justify-between">
            <span>Total Patient</span>
            <h2>22 Patient</h2>
          </div>
        </div>
      </div>
    </>
  )
}


export default function Home() {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      setTimeOfDay('morning');
    } else if (currentTime >= 12 && currentTime < 17) {
      setTimeOfDay('afternoon');
    } else if (currentTime >= 17 && currentTime < 20) {
      setTimeOfDay('noon');
    } else {
      setTimeOfDay('evening');
    }
  }, []);

  const renderGreeting = () => {
    switch (timeOfDay) {
      case 'morning':
        return {
          greeting: `Good morning, Mrs. Jane`,
          quote: `Wishing you a day full of joy and productivity.`
        };
      case 'afternoon':
        return {
          greeting: `Good afternoon, Mrs. Jane`,
          quote: `A quick lunch break to recharge, then back to take charge! 💪`
        };
      case 'noon':
        return {
          greeting: `Good noon, Mrs. Jane`,
          quote: `Enjoy a peaceful moment of stillness in the middle of the day.`
        };
      case 'evening':
        return {
          greeting: `Good evening, Mrs. Jane`,
          quote: `Unwind, relax, and recharge for a restful night ahead.`
        };
      default:
        return {
          greeting: `Hello, Mrs. Jane`,
          quote: `Have a good day`
        };
    }
  };
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'EEE, MMM dd, yyyy');
  const greetings = renderGreeting()



  const pendingAppointments: PendingAppointment[] = [
    {
      doctorName: "Rahul",
      doctorId:4,
      doctorProfilePhoto: DrRahul,
      clientname: "Alice",
      pet: "Cat",
      petName: "Oggy",
      appointmentStartTime: "10",
      appointmentEndTime: "11",
      amOrPm: "AM",
      appointmentDate: "Sun, 06 June"
    }
  ]



  return (
    <Provider store={store}>
      <Nav />
      <main className="flex flex-col items-center justify-between">
        <div className="profile-and-stats w-full flex flex-row items-center justify-between">
          <div className="user_profile flex flex-row items-center">
            <Image src={ProfileImage} alt="profile photo" className="profile_photo" />
            <div className="flex flex-col items-start justify-between h-full profile_info ml-6">
              <span>
                {formattedDate}
              </span>
              <h2>{greetings.greeting}</h2>
              <p>{greetings.quote}</p>
            </div>
          </div>
          <ProfileStats />
        </div>
        <div className="appointments_container">
          <TodaysAppointments
            appointments={todaysAppointments}
          />
          <PendingAppointments
            appointments={pendingAppointments} />
          <Vets
            vets={VetsMockData} />
        </div>
      </main>
      <ChatModal />
      <ChatsSideBar />
      <AppointmentsSideBar />
      <Notifications />
    </Provider>

  );
}
