/**
 * Created by harelg on 29/01/2018.
 */

import io from "socket.io-client";

// Connecting to Spot.IM Socket.IO chat server.
const socket = io("https://spotim-demo-chat-server.herokuapp.com");
socket.on("connect", function() { console.log("Connected to chat server!");});
socket.on("disconnect", function() { console.log("Disconnected from chat server!");});

class ChatApi {
  static sendMessage(message) {
    message.timestamp = Date.now();
    socket.emit('spotim/chat',message);

  }

  static registerMessageHandler(messageHandler){
    socket.on('spotim/chat',messageHandler);
  }
}

export default ChatApi;