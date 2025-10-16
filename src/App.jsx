import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
    const [bg, setBg] = useState("#000");
    function bgChange(bg) {
        setBg(() => bg);
    }
    return (
        <div className='relative min-h-screen' style={{ backgroundColor: bg }}>
            <div className='w-[80%] mx-auto'>
                <Navbar />
                <Header send={bgChange} />
            </div>
        </div>
    );
}

export default App;
