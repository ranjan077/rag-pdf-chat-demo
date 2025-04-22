"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import uploadFile from "../api/upload";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignInSection from "../components/SignInSection";

const ChatPage: React.FC = () => {
  const handleUpload = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.click();
    el.onchange = () => {
      const formData = new FormData();
      if (el.files?.length && el.files?.length > 0) {
        const files = [...el.files];
        console.log("files: ", files);
        formData.append("file", files[0]);
      }
      uploadFile(formData);
    };
  };
  return (
    <>
      <SignedOut>
        <SignInSection />
      </SignedOut>
      <SignedIn>
        <section className="h-screen flex">
          <div className="w-[30%] bg-sky-100 flex items-center justify-center min-h-screen">
            <Button onClick={handleUpload}>Upload PDF</Button>
          </div>
          <div className="w-[70%] bg-cyan-50 flex flex-col justify-end p-4">
            {/* Input area at the bottom */}
            <div className="flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 rounded-l-md border border-gray-300 focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
                Send
              </button>
            </div>
          </div>
        </section>
      </SignedIn>
    </>
  );
};

export default ChatPage;
