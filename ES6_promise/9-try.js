export default function guardrail(mathFunction) {
    const queue = [];
    try {
        queue.push(mathFunction());  // Calls the arrow function defined in main
    } catch (err) {
        queue.push(`Error: ${err.message}`);
    } finally {
        queue.push('Guardrail was processed');
    }
    return queue;
}