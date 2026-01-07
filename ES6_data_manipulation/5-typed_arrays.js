export default function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);
    const int8arr = new Int8Array(buffer);
    int8arr.fill(value, position, position + 1);
    return buffer;
}
