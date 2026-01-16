import React from "react";
import user from "@/assets/images/user_default.jpg";

const Index = () => {
    return (
        <div className="w-full h-screen flex bg-gray-100">

            {/* Left Panel - Conversation List */}
            <aside className="w-[320px] border-r bg-white flex flex-col">

                {/* Conversation List Header */}
                <div className="h-16 border-b flex items-center text-center px-4">
                    {/* Header placeholder */}
                    <h2>Messages</h2>
                </div>

                {/* Conversation List */}
                <div className="flex-1 overflow-y-auto">
                    {/* Conversation items placeholder */}
                    <li className="bg-red-500">
                        <ul>
                            <li className="p-2 text-center ">
                                <div className="flex space-x-6">
                                    <img src={user} height={10} width={50} alt="" />
                                    <div className="">
                                        <p className="font-bold">Friend_1</p>

                                        <div className="flex justify-between w-full text-sm text-gray-500">
                                            <p>Message</p>
                                            {/* <p>2h</p> */}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* <li>Friend_2</li> */}

                        </ul>
                    </li>
                </div>

            </aside>

            {/* Right Panel - Chat Window */}
            <main className="flex-1 flex flex-col bg-white">

                {/* Chat Header */}
                <div className="h-16 border-b flex items-center px-4">
                    {/* Chat header placeholder */}
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto px-4 py-2">
                    {/* Messages placeholder */}
                </div>

                {/* Message Composer */}
                <div className="h-20 border-t flex items-center px-4">
                    {/* Input + send button placeholder */}
                </div>

            </main>

        </div>
    );
};

export default Index;
