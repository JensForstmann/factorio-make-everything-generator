import React, { DragEvent, useRef } from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';

import './Dropzone.css';

type Props = {
    ondata: (data: string) => void,
}

const Dropzone = (props: Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const preventDefault = (e: DragEvent) => {
        e.preventDefault();
    };

    const dragOver = (e: DragEvent) => {
        preventDefault(e);
    };

    const dragEnter = (e: DragEvent) => {
        preventDefault(e);
    };

    const dragLeave = (e: DragEvent) => {
        preventDefault(e);
    };

    const fileDrop = (e: DragEvent) => {
        preventDefault(e);
        if (e.dataTransfer !== null) {
            const files = e.dataTransfer.files;
            if (files.length) {
                handleFiles(files);
            }
        }
    };

    const filesSelected = () => {
        if (fileInputRef.current?.files?.length) {
            handleFiles(fileInputRef.current.files);
        }
    };

    const fileInputClicked = () => {
        fileInputRef.current?.click();
    };

    const handleFiles = (files: FileList) => {
        files[0].text().then((text) => {
            props.ondata(text);
        });
    };

    return (
        <div className="container">
            <div className="drop-container"
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
                onClick={fileInputClicked}
            >

                <div className="drop-message">
                    <div><GetAppIcon fontSize="large" /></div>
                    Drag & Drop file here or click to select file
                </div>
                <input
                    ref={fileInputRef}
                    className="file-input"
                    type="file"
                    onChange={filesSelected}
                />
            </div>
        </div>
    );
}

export default Dropzone;
