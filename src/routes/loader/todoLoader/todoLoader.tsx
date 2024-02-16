export const todoLoader = async () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('');
        }, 3000);
    });
}
