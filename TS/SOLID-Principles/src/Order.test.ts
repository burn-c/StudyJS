import Order from "./Order";
import Beer from "./Beer";
import Whisky from "./Whisky";
import Water from "./Water";
import MessageDataFile from "./MessageDataFile";

test("Deve criar um pedido e calcular o total", () => {
  // Given
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer("Brahma", 10))
  order.addItem(new Whisky("Jack Daniels", 100))
  order.addItem(new Water("Crystal", 1))

  // When
  const total = order.getTotal()

  // then
  expect(total).toBe(111)
})

test("Deve criar um pedido e calcular os impostos", () => {
  // Given
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer("Brahma", 10))
  order.addItem(new Whisky("Jack Daniels", 100))
  order.addItem(new Water("Crystal", 1))

  // When
  const taxes =  order.getTaxes()

  // then
  expect(taxes).toBe(21)
})

test("Deve criar um pedido e imprimir uma mensagem em português", async () => {
  // Given
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer("Brahma", 10))
  order.addItem(new Whisky("Jack Daniels", 100))
  order.addItem(new Water("Crystal", 1))

  // When
  const message = await order.printMessage('pt')

  // then
  expect(message).toBe("O total foi de R$111, os impostos foram R$21. Obrigado pelo seu pedido!")
})

test("Deve criar um pedido e imprimir uma mensagem em inglês",  async () => {
  // Given
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer("Brahma", 10))
  order.addItem(new Whisky("Jack Daniels", 100))
  order.addItem(new Water("Crystal", 1))

  // When
  const message = await order.printMessage('en')

  // then
  expect(message).toBe("Total was R$111, the taxes was R$21. Thanks for your order!")
})
