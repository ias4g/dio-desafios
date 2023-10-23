/*
 * 👨‍💻 DESAFIO: 👇
 * Você foi contratado por um banco para desenvolver um programa que auxilie seus clientes a realizar
 * depósitos em suas contas. O programa deve solicitar ao cliente o valor do depósito e verificar se o
 * valor é válido. Se o valor for maior do que zero, o programa deve adicionar o valor ao saldo da conta.
 * Caso contrário, o programa deve exibir uma mensagem de erro. O programa deve soliticar apenas uma vez
 * o valor de depósito.
 * 
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * 
 * ➕ ENTRADA: 👇
 * O programa deve utilizar o Scanner para receber o valor de depósito digitado pelo cliente.
 * Os valor pode ser decimal, representando valor em reais.
 * 
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * 
 * ➖ SAÍDA: 👇
 * O programa deve exibir uma mensagem de sucesso quando um valor de depósito válido for informado e o
 * saldo da conta for atualizado. Se o valor for "0", deverá imprimir uma mensagem encerrando o programa.
 * Caso um valor inválido seja digitado, o programa deve exibir uma mensagem de erro solicitando um novo
 * valor.
 * 
 * Exemplos:
 * A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas.
 * Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
 * 
 * |------------------------------------------------|
 * | ENTRADA    | SAÍDA                             |
 * |============|===================================|
 * | 500.50     | Deposito realizado com sucesso!   |
 * |            | Saldo atual: R$ 500.50            |
 * |------------|-----------------------------------|
 * | -100       | Valor invalido!                   |
 * |            | Digite um valor maior que zero.   |
 * |------------|-----------------------------------|
 * | 0          | Encerrando o programa...          |
 * |------------|-----------------------------------|
 */

import java.util.Scanner;

public class OGrandeDeposito {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor dodeposito: ");
        double valor = scanner.nextDouble();

        if (valor > 0) {
            // Imprimir a mensagem de sucesso, formatando o saldo atual (vide Exemplos).
            System.out.println("Deposito realizado com sucesso!");
            System.out.printf("Saldo atual: R$ %.2f", valor);
        } else if (valor == 0) {
            // Imprimir a mensagem de valor inválido.
            System.out.println("Encerrando o programa...");
        } else {
            // Imprimir a mensagem de encerrar o programa.
            System.out.println("Valor invalido! Digite um valor maior que zero.");
        }

        scanner.close();
    }
}
