export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
        throw new RangeError('Position outside range');
    }

    const buffer = new ArrayBuffer(length);
    const int8arr = new Int8Array(buffer);

    int8arr[position] = value;

    let result = {
        Dataview: {
            byteLength: buffer.byteLength,
            byteOffset: buffer.byteOffset,
            buffer: buffer
        }
    }

    return result;
}
