import React, { useState } from 'react';

import './App.css';
import Dropzone from "./dropzone/Dropzone";

function App() {
    const [inputFile, setInputFile] = useState('');
    console.log("TCL: App -> inputFile", inputFile);
    return (
        <div>
            <div className="content">
                <Dropzone ondata={(data: string) => setInputFile(data)} />
            </div>
        </div>
    );
}

export default App;