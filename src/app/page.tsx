"use client";

import { useMainLoadingStore } from "@/store/loadingStore";
import Loading from "./Loading";
import Dailybonus from "@/components/mainpage/Dailybonus";
import Tasks from "@/components/mainpage/Tasks";
import Offers from "@/components/mainpage/Offers";
import PopUp from "@/components/popupnotification/PopUp";
// import Header from "@/layout/header/Header";
import Footer from "./Footer";
// import Footer from "@/layout/footer/Footer";
import Header from "./Header";

export default function Home() {
  const mainLoading = useMainLoadingStore((state) => state.mainLoading);
  if (mainLoading) {
    return <Loading />;
  }
  return (
    <>
      <Header/>
      <main className="overflow-hidden pb-[18%]">
        <Dailybonus />
        <Tasks/>
        <Offers/>
      </main>
      <Footer/>
      <PopUp/>
    </>
  );
}
