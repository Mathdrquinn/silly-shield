export const convertBlobToBase64URL = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        if (!(blob instanceof Blob)) {
            reject(new Error('Unable to encode argument. It is not a Blob'));
        }

        reader.onload = (event: FileReaderEvent): any => {
            event.target
                ? resolve(event.target.result)
                : reject(new Error('Failed to base64 encode input'));
        };
        reader.onerror = error => reject(error);
        reader.readAsDataURL(blob);
    });
};
