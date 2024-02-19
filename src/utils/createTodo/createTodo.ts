export const createTodo = () => {
    const todoMax = Math.floor(Math.random() * (10 - 100 + 1) + 100);

    const data = [];

    for(let i = 1; i <= todoMax; i++) {
        const isChecked =  Math.random() < 0.5;
        data.push(    {
            id: i,
            checked: Boolean(isChecked),
            message: `message ${i}`,
            time: Date.now(),
            title: `message-title ${i}`,
          });
    }

    return data;
}
