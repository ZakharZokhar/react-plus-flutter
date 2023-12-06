import { Box, Button } from "@mui/material";
import React, { ChangeEvent } from "react";

interface ImageUploaderProps {
    onImageUpload: (imageData: Uint8Array) => void;
}

class ImageUploader extends React.Component<ImageUploaderProps> {
    handleButtonClick = () => {
        // Создание элемента input для выбора файла
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        // Обработка изменения файла
        fileInput.addEventListener('change', (event) => {
            const inputElement = event.target as HTMLInputElement;

            if (inputElement.files && inputElement.files.length > 0) {
                const selectedFile = inputElement.files[0];

                // Чтение содержимого файла в Uint8Array
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target && e.target.result) {
                        const arrayBuffer = e.target.result as ArrayBuffer;
                        const uint8Array = new Uint8Array(arrayBuffer);

                        // Передача данных в родительский компонент
                        this.props.onImageUpload(uint8Array);
                    }
                };
                reader.readAsArrayBuffer(selectedFile);
            }
        });

        // Запуск окна выбора файла
        fileInput.click();
    };


    render() {
        return (
            <Box>
                <Button onClick={this.handleButtonClick}>Upload Image</Button>
            </Box>
        );
    }
}

export default ImageUploader;