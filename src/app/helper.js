const dateFormatter = (date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0')

    return `${year}-${month}-${day}`;
};

const dateLocaleFormatter = (date) => {
    return new Date(date).toLocaleDateString()
};



/*
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");

*/
//LOCALSTORAGE'E KULLANICININ GİRİŞ BİLGİLERİ SAKLANACAK, FAKAT HER GIRDIGINDE
//KONTROL EDİLME GİBİ BİR DURUM OLABİLİR... BUNU DÜŞÜN...
const setLocalStorage = () => {
    //localStorage
};

export {
    dateFormatter,
    dateLocaleFormatter
};