import imageCompression, { type Options } from 'browser-image-compression';

interface CompressionOptions {
    maxSizeMB?: number;
    maxWidthOrHeight?: number;
    useWebWorker?: boolean;
}

/**
 * Compress a file image on the client side.
 * @param file The original file of type File.
 * @param options Optional compression settings.
 * @returns A promise resolving to the compressed file.
 */
export async function compressImage(
    file: File,
    options: CompressionOptions = {}
): Promise<File> {
    const defaultOptions: Options = {
        maxSizeMB: options.maxSizeMB ?? 1,
        maxWidthOrHeight: options.maxWidthOrHeight ?? 1920,
        useWebWorker: options.useWebWorker ?? true,
    };

    try {
        const compressedBlob = await imageCompression(file, defaultOptions);

        return new File([compressedBlob], file.name, {
            type: file.type,
            lastModified: Date.now(),
        });
    } catch (error) {
        console.error('Error compression under the hood:', error);
        throw new Error('Failed to compress image');
    }
}