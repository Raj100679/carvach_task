"use client";
import Image from "next/image";
import Header from "./Components/Header";
import Sidebar from "./Components/SideBar";
import Form from "./Components/Form";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: "1" }}>
        <Sidebar />
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form />
        </div>
      </div>

      <style jsx>{`
        @media screen and (max-width: 680px) {
          div {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
