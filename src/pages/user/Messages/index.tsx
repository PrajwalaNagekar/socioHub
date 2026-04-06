import React, { use, useState } from "react";
import userImg from "@/assets/images/user_default.jpg";
import { getMessages } from "@/api/chat";
type Messages = {
    text: string;
    sender: "me" | "other"
}
type Chat = {
    conversationId: any;
    avatar: {
        userImg: string;
    };
    message: string;
    time: any;
    messages: Messages[];

    user: string
}
const chatList: Chat[] = [
    {
        conversationId: "69d0eecec93371c1f30ee327",
        avatar: { userImg },
        user: "Friend_1",
        message: "Hello",
        time: "just now",
        messages: [
            { text: "hi", sender: "other" },
            { text: "hello", sender: "me" },
            { text: "how are you", sender: "other" },
        ],
    },
    {
        conversationId: 2,
        avatar: { userImg },
        user: "Friend_2",
        message: "Reached!!",
        time: "3m",
        messages: [
            { text: "Come to walk", sender: "other" },
            { text: "yes lets go", sender: "me" },
            { text: "Okay", sender: "other" },
        ],
    },
];



const Index = () => {
    const [selectedUser, setSelectedUser] = useState<any>(null)
    const [messages, setMessages] = useState<any[]>([])
    const [inputText, setInputText] = useState("")
    const handleSendMessages = () => {
        if (!selectedUser) return;
        console.log("selectedUser", selectedUser);
        const newMessage: Messages = {
            text: inputText,
            sender: "me",
        };

        const updatedUser = {
            ...selectedUser,
            messages: [...selectedUser.messages, newMessage]
        }
        setSelectedUser(updatedUser)
        setInputText("")
    }
    const handleSelectUser = async (chat: any) => {
        setSelectedUser(chat);

        try {
            const res = await getMessages(chat.conversationId); // 🔥 IMPORTANT
            setMessages(res.data.data);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };
    return (
        <div className="w-full h-screen flex flex-col bg-gray-100">

            {/* Top Profile Stories Row */}
            <div className="h-24 bg-white border-b flex items-center px-4 overflow-x-auto space-x-4">
                {chatList.map((chat) => (
                    <div
                        key={chat.conversationId}
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => setSelectedUser(chat)}
                    >
                        <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-pink-500 to-yellow-400">
                            <img
                                src={chat.avatar.userImg}
                                alt=""
                                className="w-full h-full rounded-full object-cover border-2 border-white"
                            />
                        </div>
                        <p className="text-xs mt-1 truncate w-16 text-center">
                            {chat.user}
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex flex-1">
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
                        {chatList.map((chat, index) => (
                            <li key={index} className="" >
                                <ul>
                                    <li className="p-2 text-center hover:bg-gray-200" onClick={() => handleSelectUser(chat)}>
                                        <div className="flex space-x-6">
                                            <img src={userImg} height={10} width={50} alt="" />
                                            <div className="">
                                                <p className="font-bold">{chat.user}</p>

                                                <div className="flex justify-between w-full text-sm text-gray-500">
                                                    <p>{chat.message}</p>
                                                    {/* <p>2h</p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* <li>Friend_2</li> */}

                                </ul>
                            </li>
                        ))}
                    </div>

                </aside>

                {/* Right Panel - Chat Window */}
                <main className="flex-1 flex flex-col bg-white">

                    {/* Chat Header */}
                    <div className="h-16 border-b flex items-center px-4">
                        {selectedUser ? (
                            <div className="flex items-center gap-3">
                                <img
                                    src={selectedUser.avatar.userImg}
                                    className="w-10 h-10 rounded-full"
                                    alt=""
                                />
                                <p className="font-semibold">{selectedUser.user}</p>
                            </div>
                        ) : (
                            <p>Select a conversation</p>
                        )}
                    </div>


                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto px-4 py-2">
                        {/* Messages placeholder */}
                        {selectedUser ? (
                            <div>
                                {
                                    messages.map((msg: any) => (
                                        <div
                                            key={msg._id}
                                            className={`mb-2 flex ${msg.isSender ? "justify-end" : "justify-start"
                                                }`}
                                        >
                                            <p
                                                className={`px-4 py-2 rounded-lg max-w-xs ${msg.isSender
                                                        ? "bg-blue-500 text-white"
                                                        : "bg-gray-200 text-black"
                                                    }`}
                                            >
                                                {msg.message}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <p>No user selected</p>
                        )}
                    </div>

                    {/* Message Composer */}
                    <div className="h-20 border-t flex items-center px-4 bg-white">
                        {selectedUser ? (
                            <div className="flex items-center w-full gap-3">
                                {/* Emoji / Icon placeholder */}
                                <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer">
                                    +
                                </div>

                                {/* Text Input */}
                                <input
                                    type="text"
                                    placeholder="Type anything to send"
                                    onChange={(e) => setInputText(e.target.value)}
                                    className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />

                                {/* Send Button */}
                                <button className="text-blue-500 font-semibold hover:text-blue-600" onClick={handleSendMessages}>
                                    Send
                                </button>
                            </div>
                        ) : (
                            <p className="text-gray-400 text-center w-full">
                                Select a conversation to start chatting
                            </p>
                        )}
                    </div>


                </main>
            </div>
        </div>
    );
};

export default Index;