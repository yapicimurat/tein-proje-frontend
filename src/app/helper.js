const dateFormatter = (date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`;
};


export {
    dateFormatter
};