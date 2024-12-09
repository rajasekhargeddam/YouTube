import React, { useEffect, useState } from "react";
import { nameGenerator, stringGenerator } from "../utils/helper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addMsg } from "../utils/liveChatSlice";

const LiveChat = () => {
  const [liveMessege , setLiveMessege] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const time = setInterval(() => {
      dispatch(addMsg({ name: nameGenerator(), messege: stringGenerator(15) }));
    }, 1000);

    return () => clearInterval(time);
  }, [dispatch]);

  const liveChat = useSelector((store) => store.liveChat.liveMesseges);

  return (
    <div className="aspect-video m-4 px-4 md:w-1/3 border border-gray-400 rounded-md bg-gray-100 flex flex-col-reverse overflow-auto">
      <form className="w-full" onSubmit={(e) => {
        e.preventDefault();
        liveMessege && dispatch(addMsg({ name: "Raja", messege: liveMessege }));
        setLiveMessege("");
      } }>
        <input
          className="h-8 px-2 border w-8/12"
          type="text"
          placeholder="Type a message..."
          value={liveMessege}
          onChange={(e) => setLiveMessege(e.target.value)}
        />
        <button className="w-3/12 bg-green-500 rounded-md h-8 mb-2 mx-2">
          Send
        </button>
      </form>
      {liveChat.map((item, index) => (
        <div key={index} className="flex text-sm my-1">
          <p className="items-center break-words">
            <b className="font-semibold mx-1">👤 {item.name} </b>
            {item.messege}
          </p>
        </div>
      ))}
    </div>
  );
};

export default LiveChat;
