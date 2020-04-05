var adress = {
    street: "First avenue",
    number: 123,
    neighborhood: "Center",
    city: "São Paulo",
    state: "SP"
  };

  function completeAdress({street, number, neighborhood, city, state}) {
    console.log(`The user lives in ${city}/${state}, on the neighborhood ${neighborhood}, in the street ${street}, Nº ${number}. `)
  }