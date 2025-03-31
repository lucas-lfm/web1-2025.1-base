# Lista Prática de Exercícios 1 - Fundamentos de Programação com JavaScript

## Exercício 1 – Conversor de Moedas

Você deve criar um sistema que leia um valor em reais (R$) e o converta para dólares (US$). Para isso, o programa deve utilizar a cotação atual do dólar informada pelo usuário.  
O cálculo é feito através da fórmula:  
**Valor em US$ = Valor em R$ / Cotação do Dólar**

### Exemplo

| **Entrada** (dados: valor em R$, cotação do dólar) | **Saída**                   |
| --------------------------------------------------- | --------------------------- |
| 100.00                                              | Valor em US$: 20.00         |
| 5.00                                                |                             |

---

## Exercício 2 – Cálculo do Quadrado de um Número

Você deve criar um sistema que leia um valor inteiro e calcule o seu quadrado.  
O cálculo é feito multiplicando o número por ele mesmo.

### Exemplo

| **Entrada** (número inteiro) | **Saída**                   |
| ---------------------------- | --------------------------- |
| 7                            | Quadrado: 49                |

---

## Exercício 3 – Conversão de Polegadas para Centímetros

Crie um programa que converta um valor em polegadas para centímetros.  
Utilize a fórmula:  
**Centímetros = Polegadas × 2,54**

### Exemplo

| **Entrada** (valor em polegadas) | **Saída**                        |
| -------------------------------- | -------------------------------- |
| 10                               | Valor em centímetros: 25,40        |

---

## Exercício 4 – Cálculo da Circunferência de um Círculo

Desenvolva um programa que calcule o perímetro (circunferência) de um círculo, dado o valor do raio.  
Utilize a fórmula:  
**Perímetro = 2 × π × Raio**  
*Obs.: Utilize o valor de π disponível na linguagem JavaScript (Math.PI).*

### Exemplo

| **Entrada** (valor do raio) | **Saída**                                |
| --------------------------- | ---------------------------------------- |
| 5.0                         | Perímetro: 31.42 (aproximadamente)        |

---

## Exercício 5 – Cálculo do Salário do Professor

Crie um programa que calcule o salário de um professor.  
O salário é obtido multiplicando o valor da hora-aula pela quantidade de horas trabalhadas.

### Exemplo

| **Entrada** (dados: valor da hora e horas trabalhadas) | **Saída**                            |
| -------------------------------------------------------- | ------------------------------------ |
| 40.0                                                     | Salário: R$ 800.00                    |
| 20                                                       |                                      |

---

## Exercício 6 – Média Ponderada e Situação do Aluno

Você deve criar um sistema que leia as notas de duas etapas de um semestre (N1 e N2) e calcule a média ponderada.  
Os pesos são:  
- N1: peso 2  
- N2: peso 3  

A média é calculada por:  
**Média = (N1 × 2 + N2 × 3) / 5**  
Ao final, o programa deve informar a nota final e se o aluno está aprovado (nota ≥ 6.0) ou reprovado.

### Exemplo

| **Entrada** (dados: N1 e N2) | **Saída**                             |
| ---------------------------- | ------------------------------------- |
| 7.0                          | Nota final: 7.40 – Aprovado             |
| 8.0                          |                                       |

---

## Exercício 7 – Cálculo do IMC e Classificação do Peso

Crie um programa que calcule o Índice de Massa Corporal (IMC) do usuário a partir dos dados de peso (kg) e altura (m) e, em seguida, informe em qual faixa de peso ele se encontra.  
Utilize a seguinte classificação básica (valores exemplificativos):  
- **Abaixo de 18.5:** Abaixo do peso  
- **Entre 18.5 e 24.9:** Peso normal  
- **Entre 25.0 e 29.9:** Sobrepeso  
- **30.0 ou mais:** Obesidade

### Exemplo

| **Entrada** (dados: peso e altura) | **Saída**                                         |
| ---------------------------------- | ------------------------------------------------- |
| 70.0 kg e 1.75 m                   | IMC: 22.86 – Peso normal                           |

---

## Exercício 8 – Soma dos Números Primos

Elabore um programa que receba *n* números inteiros positivos e exiba a soma daqueles que são primos.  
*Dica:* Um número primo é aquele que possui exatamente dois divisores (1 e ele mesmo).

### Exemplo

| **Entrada** (lista de números)       | **Saída**                     |
| ------------------------------------ | ----------------------------- |
| 2, 4, 5, 8, 11                       | Soma dos primos: 18           |

---

## Exercício 9 – Números Ímpares Entre Dois Valores

Modifique o programa do exercício anterior para que ele identifique e exiba todos os números ímpares existentes entre dois valores quaisquer informados pelo usuário.  
O programa deve ler os dois valores e listar os números ímpares entre eles (inclusive se algum dos extremos for ímpar).

### Exemplo

| **Entrada** (dados: valor inicial e final) | **Saída**                        |
| ------------------------------------------ | -------------------------------- |
| 3 e 11                                     | Números ímpares: 3, 5, 7, 9, 11    |

---

## Exercício 10 – Sistema de Cálculo de Gorjeta

Você deve criar um sistema para calcular a gorjeta de um restaurante, utilizando o valor total da conta e a porcentagem de gorjeta a ser aplicada. Porém, o sistema deve incluir uma estrutura de decisão que aplique a seguinte regra:

- **Se o valor da conta for inferior a R$ 50.00,** a gorjeta deve ser calculada automaticamente usando **10%**, independente da porcentagem informada pelo usuário.
- **Caso contrário,** o cálculo da gorjeta deve utilizar a porcentagem informada.

### Funcionamento do Sistema

1. **Entrada dos dados:**  
   - Valor total da conta (em R$)  
   - Porcentagem da gorjeta a ser aplicada

2. **Processamento:**  
   - Verificar se o valor da conta é inferior a R$ 50.00.
     - Se sim, calcular a gorjeta como **10%** do valor da conta.
     - Se não, calcular a gorjeta utilizando a porcentagem informada.
   - Calcular o valor total a pagar, somando o valor da conta com o valor da gorjeta.

3. **Saída:**  
   - Exibir o valor da conta, o valor calculado da gorjeta e o total a pagar.

#### Exemplo 1

| **Entrada** (dados: valor da conta e porcentagem informada) | **Saída**                                                       |
| ----------------------------------------------------------- | ----------------------------------------------------------------- |
| 45.00                                                       | Valor da conta: R$ 45.00<br>Gorjeta (10% aplicada): R$ 4.50<br>Total a pagar: R$ 49.50 |
| 15.0                                                        |                                                                   |

#### Exemplo 2

| **Entrada** (dados: valor da conta e porcentagem informada) | **Saída**                                                       |
| ----------------------------------------------------------- | ----------------------------------------------------------------- |
| 120.00                                                      | Valor da conta: R$ 120.00<br>Gorjeta (15% informada): R$ 18.00<br>Total a pagar: R$ 138.00 |
| 15.0                                                        |                                                                   |