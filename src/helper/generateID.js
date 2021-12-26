export const genid = () => {
    const a = Date.now().toString(36)
    const b = Math.random().toString(36).substr(2)
    return a + b
}