# SOLID principles com TypeScript com Rodrigo Branas

### Projeto de estudo

#### referências

- [Youtube](https://www.youtube.com/watch?v=GVo7KzO2agg&t)

# SOLID

## 5 principles

## 1 - SRP - Single Responsibility Principe

- Separar coisas que MUDAM POR MOTIVOS DIFERENTES
- Mover responsabildiades

## 2 - OCP - Open/Closed Principle

- Devemos estar fechados para modificação e abertos para extensão

## 3 - Liskov Substitution Principles

- Se **S** (Beer, Whisky, Water) é subclasse de **T** ( Item ), em um programa deve ser possível substituir instânias de **T** por instâncias de **S**, SEM QUEBRAR O FUNCIONAMENTO DO PROGRAMA.

- Pré-condições não podem ser fortalecidas
  Deixando de aceitar ENTRADAS que a superclasse considera válida

- Pós-condições não podem ser enfraquecidas
  Aceitando saídas mais AMPLAS
  Deixando as saídas diferentes da expectavia de quem está chamando o método

- Invariantes devem se manter consistentes
  Se uma subclasse permitir que o estado conceitual da hierarquia de classes fique inválido
  import Item from "./Item";

## 4 - ISP - Interface Segregation Principles

- Cuidado com interfaces MUITO ABRANGENTES, não obrigue subclasses a implementar métodos que elas não precisam

## 5 - DIP - Dependency Inversion Principle

- Modulos de alto nivel não podem depender de modulos de baixo nível
- Ambos tem que depender de abstrações
