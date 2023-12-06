import { Box, Typography } from "@mui/material";
import React from "react";

interface ImageDisplayProps {
    imageData: Uint8Array | null;
}

class ImageDisplay extends React.Component<ImageDisplayProps> {
    render() {
        const { imageData } = this.props;

        return (
            <Box marginTop={'16px'}>
                {imageData ? (
                    <img
                        height={100}
                        width={100}
                        src={`data:image/png;base64,${btoa(
                            String.fromCharCode.apply(null, Array.from(imageData))
                        )}`}
                        alt="Uploaded"
                    />
                ) : (
                    <Typography>No images uploaded</Typography>
                )}
            </Box>
        );
    }
}

export default ImageDisplay;