const items = {
    "pin": {
        code: "pin",
        name: "Значок",
        outPrice: 150,
        inPrice: 40
    },
    "list": {
        code: "list",
        name: "Стикерлист",
        outPrice: 150,
        inPrice: 18
    },
    "singl": {
        code: "singl",
        name: "Синглкарта",
        outPrice: 50,
        inPrice: 10
    },
    "book": {
        code: "book",
        name: "Закладка",
        outPrice: 105,
        inPrice: 8
    },
    "card": {
        code: "card",
        name: "Открытка",
        outPrice: 100,
        inPrice: 15
    }
};


const app = Vue.createApp({
    data() {
      return { 
          toShelter: 0,
          toArters: {},
            //----------------------------------------------------------------
            codeNameArter: '',
            nameArter: '',
            newItem: '',
            itemsTypes: items,
            itemsList: [],
            balanceToShop: 0
       }
    }
  })
  
  const vm = app.mount('#app')