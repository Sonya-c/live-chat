import socketClient from "socket.io-client";

const SERVER = "localhost:8080";

function App() {
    var socket = socketClient (SERVER);
    
    return (
        <div>Bueno, a trabajar</div>
  );
}

export default App;
