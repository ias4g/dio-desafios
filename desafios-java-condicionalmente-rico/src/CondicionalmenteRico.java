/*
 * DESCRIÇÃO: 👇
 * Uma nova feature para um sistema bancário foi analisada pela equipe de desenvolvimento e será uma das tarefas
 * a serem trabalhadas durante a sprint, como desenvolvedor da empresa você recebeu os requisitos para a nova
 * implementação que consiste em uma solução algorítmica que permita aos clientes realizarem saques em caixas
 * eletrônicos. No entanto, existem algumas regras a serem seguidas para garantir que um saque possa ser
 * realizado com sucesso.
 * 
 * Regras do saque:
 * - Cada cliente digitará o valor do seu saldoTotal de sua conta bancária e o valorSaque.
 * - Um saque só pode ser realizado se o saldoDisponível na conta for igual ou superior ao valor solicitado.
 * - Se o saldo for suficiente, o valor solicitado deve ser subtraído do saldo disponível,
 * - indicando que o saque foi realizado.
 * - Se o saldo for insuficiente, o saque não deve ser realizado e uma mensagem adequada deve ser exibida.
 * 
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * 
 * ENTRADA: 👇
 * A entrada consiste em dois valores inteiros que representam o total do saldo da conta e o valor do saque.
 * 
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * 
 * SAÍDA: 👇
 * Se o saque for realizado com sucesso, exibir a mensagem "Saque realizado com sucesso! Novo saldo: {saldo}",
 * onde {saldo} é o novo saldo disponível na conta.
 * 
 * Se o saque não for possível devido a saldo insuficiente,
 * exibir a mensagem "Saldo insuficiente. Saque nao realizado!"
 * 
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * 
 * Exemplos:
 * A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas.
 * Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
 * 
 * |---------------------------------------------------------|
 * |    Entrada         |       Saída                        |
 * |--------------------|------------------------------------|
 * |    1000            |       Saque realizado com sucesso. |
 * |    200             |       Novo saldo: 800              |
 * |--------------------|------------------------------------|
 * |    1500            |       Saldo insuficiente.          |
 * |    1800            |       Saque nao realizado!         |
 * |--------------------|------------------------------------|
 * |    300             |       Saque realizado com sucesso. |
 * |    200             |       Novo saldo: 100              |
 * |---------------------------------------------------------|
 */

import java.util.Scanner;

public class CondicionalmenteRico {
    public static void main(String[] args) throws Exception {

        // Entrada de dados
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o seu saldo total da conta: ");
        int saldoTotal = scanner.nextInt();

        System.out.print("Digite o valor do seu saque: ");
        int valorSaque = scanner.nextInt();

        scanner.close();

        // Criar as condições necessárias para impressão da saída,
        // vide tabela de exemplos.
        if (valorSaque <= saldoTotal) {
            int saldoDisponível = saldoTotal - valorSaque;
            System.out.printf("Saque realizado com sucesso! Novo saldo: %d", saldoDisponível);
        } else {
            System.out.println("Saldo insuficiente. Saque nao realizado!");
        }
    }
}