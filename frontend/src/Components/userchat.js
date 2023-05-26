import React, {useEffect, useState} from 'react';
import userImage from '../../images/user.png';

export default function ServiceProvider() {
    const contacts = [
        { name: "User1", id: "1", messages: [
            { sender: "1", receiver: "2", message: "Hello" },
            { sender: "2", receiver: "1", message: "Hi" },
            { sender: "1", receiver: "2", message: "How are you?" },
            { sender: "2", receiver: "1", message: "I'm fine" }
        ] },
        { name: "User2", id: "2" , messages: [
            { sender: "1", receiver: "2", message: "Hello" },
            { sender: "2", receiver: "1", message: "Hi" },
            { sender: "1", receiver: "2", message: "How are you?" },
            { sender: "2", receiver: "1", message: "I'm fine" }
        ] },
        { name: "User3", id: "3" 
        , messages: [
            { sender: "1", receiver: "2", message: "Hello" },
            { sender: "2", receiver: "1", message: "Hi" },
            { sender: "1", receiver: "2", message: "How are you?" },
            { sender: "2", receiver: "1", message: "I'm fine" }
        ] },
        { name: "User4", id: "4" 
        , messages: [
            { sender: "1", receiver: "2", message: "Hello" },
            { sender: "2", receiver: "1", message: "Hi" },
            { sender: "1", receiver: "2", message: "How are you?" },
            { sender: "2", receiver: "1", message: "I'm fine" }
        ] },
        { name: "User5", id: "5" 
        , messages: [
            { sender: "1", receiver: "2", message: "Hello" },
            { sender: "2", receiver: "1", message: "Hi" },
            { sender: "1", receiver: "2", message: "How are you?" },
            { sender: "2", receiver: "1", message: "I'm fine" }
        ] },
    ];
    const [converations, setConversations] = useState([]); 
    const [sender, setSender] = useState("");
    const [receiver, setReceiver] = useState("");
    const [message, setMessage] = useState("");
            
    // const getConversationsRoute = "http://localhost:5000/api/conversations/";

    // useEffect(() => {
    //     const logginUser = JSON.parse(localStorage.getItem("userDetails"));
    //     const fetchConversations = async () => {
    //         try {
    //             const res = await fetch(getConversationsRoute + logginUser.phone, {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //             });
    //             const data = await res.json();
    //             setConversations(data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };
    //     fetchConversations();
    // }, []);

    //const [user, setUser] = useState(JSON.parse(localStorage.getItem('userDetails')));
    const [user, setUser] = useState(
        {
            name: "Aurchey",
            phone: "1234567890",
        }

    );

    // const fetchMessages = async (receiver) => {
    //     try {
    //         const res = await fetch("http://localhost:5000/api/messages/" + user.phone + "/" + receiver, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         body: JSON.stringify({
    //             sender: loggedinuser.phone,
    //             receiver: receiver,
    //             message : message,
    //         });
    //         const data = await res.json();
    //         setConversations(data);
    //         setMessage("data.message");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const fetchMessages = (receiver) => {
        try {
            const res = contacts.filter((contact) => contact.name === receiver);
            setConversations(res[0].messages);
            console.log(converations);

        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="w-screen flex flex-column">
            <div className="w-{23%} h-screen bg-gray-200">
                <div>
                    <img src={userImage} alt="profile" className="border border-primary rounded-full" 
                        style={{width: 50, height: 50}}
                    />
                </div>
                <div className='ml-8'>
                    <h3 className="text-2xl font-bold">{user.name}</h3>
                    <p className="text-gray-500">My account</p>
                </div>
            </div>
            <div className="w-{23%} h-screen bg-gray-200 mx-14 mt-10">
                <div className="text-primary text-lg">Messages</div>
                <div>
                    {contacts.map((contacts) => (
                        <div className="flex items-center py-8 border-b border-gray-300">
                            <div className="cursor-pointer flex item-center" onClick={()=>{ fetchMessages(contacts.name)}}>
                                <div className="ml-6"><h3 className="text-lg font-bold">{contacts.name}</h3></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-full w-{74%} overflow-scroll shadow-sm">
                <div className="p-14"> 
                    <div className="max-w-{40%} bg-blue text-white rounded-b-xl rounded-tl-xl p-4 mb-6">hii</div>
                    <div className="max-w-{40%} bg-gray-300 text-black rounded-b-xl rounded-tr-xl p-4 mx-auto">hello</div>
                </div>
                {/* {converations.map((converation) => (
                        if(converation.sender === user.phone){
                            <div className="max-w-{40%} bg-blue rounded-b-xl rounded-tl-xl p-4 mb-6">{converations.message}</div>
                        }else{
                            <div className="max-w-{40%} bg-gray-300 rounded-b-xl rounded-tr-xl p-4 mb-6">{converations.message}</div>
                        }
                ))}  */}
            </div>
        </div>
    );
}
