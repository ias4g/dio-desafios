/*
 * DESCRIÇÃO: 👇
 * Para esse desafio, considere que você foi contratado por uma empresa bancária para auxiliar
 * nas implementações e melhorias do sistema empresarial. Em uma análise inicial, foi identificado
 * pela equipe financeira a necessidade de desenvolver uma solução que permita ao cliente equilibrar
 * seu saldo bancário. Dessa forma, o programa deve solicitar uma entrada que representa o saldo atual
 * do funcionário, e após, seja informado o valor de duas transações, sendo elas: um depósito e um saque.
 * O programa deve atualizar o saldo com base nas transações e exibir o saldo final.
 * 
 * #
 * 
 * INFORMAÇÕES: 👇
 * As transações de depósito e retirada devem ser tratadas como valores positivos e negativos, respectivamente,
 * para garantir que o cálculo do saldo final seja realizado corretamente.
 * 
 * #
 * 
 * ENTRADA: 👇
 * saldoAtual: um número decimal representando o saldo atual da conta bancária.
 * valorDeposito: um número decimal representando o valor a ser depositado na conta.
 * valorRetirada: um número decimal representando o valor a ser retirado da conta.
 * 
 * Regra de Formatação: Considere apenas uma casa decimal para esse desafio.
 * 
 * #
 * 
 * SAÍDA: 👇
 * Um número decimal que representa o saldo atualizado na conta bancária após o processamento das transações.
 * 
 * Exemplos
 * A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas.
 * Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
 * 
 * --------------------------------------------------
 * | Entrada  | Saída                               |
 * -----------|--------------------------------------
 * | 1000     | Saldo atualizado na conta: 1300.0   |
 * | 500      |                                     |
 * | 200	  |                                     |
 * |------------------------------------------------|
 * | 100      | Saldo atualizado na conta: 60.0     |
 * | 10       |                                     |
 * | 50	      |                                     |
 * -------------------------------------------------|
 * | 4000     | Saldo atualizado na conta: 5300.0   |
 * | 1500     |                                     | 
 * | 200 	  |                                     |
 * |------------------------------------------------|
 */

import java.util.Scanner;

public class EquilibrandoSaldo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite seu saldo atual: ");
        double saldoAtual = scanner.nextDouble();

        System.out.print("Digite o valor do deposito: ");
        double valorDeposito = scanner.nextDouble();

        System.out.print("Digite o valor da retirada: ");
        double valorRetirada = scanner.nextDouble();

        scanner.close();

        try {
            double saldo = saldo(saldoAtual, valorDeposito, valorRetirada);
            System.out.printf("Saldo atualizado na conta: %.1f%n", saldo);
        } catch (ParametrosInvalidosException e) {
            System.out.println(e.getMessage());
        }
    }

    static double saldo(double saldoAtual, double valorDeposito, double valorRetirada)
            throws ParametrosInvalidosException {
        double saldo = saldoAtual + valorDeposito;

        if (valorRetirada > saldo) {
            throw new ParametrosInvalidosException(
                    "Saldo insuficiente para retirada! o valor da retirada é superior ao saldo atual.");
        }

        return saldo - valorRetirada;
    }
}