<div align="center">
  <img src="../assets/image.png" width="200"/>

  # Potência Tech iFood - Desenvolvimento de Jogos
  **DESAFIO DE CÓDIGO:** <br> Academia de Magia | Aprenda a usar seus poderes
</div>

### 📚 Descrição
*Em um mundo de RPG, personagens utilizam diferentes tipos de magia em batalhas para vencer seus inimigos. Cada magia possui uma função específica: ataque, cura ou defesa.*

*Desenvolva um programa que permita ao usuário escolher o tipo de magia que deseja utilizar e quantas vezes deseja utilizá-la. Em seguida, o programa deverá executar a magia escolhida a quantidade de vezes especificada pelo usuário.*

---

### 🔄 Entrada
*O programa deve solicitar ao usuário que escolha um tipo de magia entre as opções ```"ataque"```, ```"cura"``` ou ```"defesa"```, utilizando a função ```io.read()```. Em seguida, o programa deve solicitar a quantidade de vezes que a magia escolhida será utilizada, também utilizando o ```io.read()```.*

---

### 🚪 Saída
*Após receber o tipo de magia e a quantidade de vezes que deseja usá-la, o programa deve exibir na tela a mensagem correspondente a cada uso da magia. As mensagens de saída devem seguir o seguinte formato:*

* ***"Usou magia de ataque!" (caso o tipo de magia escolhido seja ```"ataque"```)***
* ***"Usou magia de cura!" (caso o tipo de magia escolhido seja ```"cura"```)***
* ***"Usou magia de defesa!" (caso o tipo de magia escolhido seja ```"defesa"```)***
* ***"Tipo de magia inválido!" (caso o tipo de magia escolhido seja diferente de ```"ataque"```, ```"cura"``` ou ```"defesa"```)***

*O programa deve exibir uma mensagem para cada uso da magia, repetindo essa mensagem a quantidade de vezes que foi escolhida pelo usuário no início do programa.*

---

### 📋 Exemplos
*A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.*

| Entrada       | Saída                                                                 |
|---------------|-----------------------------------------------------------------------|
| defesa <br> 2 | Usou magia de defesa! <br> Usou magia de defesa!                      |
| cura <br> 3   | Usou magia de cura! <br> Usou magia de cura! <br> Usou magia de cura! |
| ataque <br> 1 | Usou magia de ataque!                                                 |