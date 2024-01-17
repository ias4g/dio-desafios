/*
 * 👨‍💻 DESAFIO: 👇
 * Imagine que você está desenvolvendo um aplicativo para um banco que deseja calcular os juros compostos de um
 * investimento. Seu objetivo é criar uma função que receba três parâmetros: o valor inicial do investimento,
 * a taxa de juros anual e o período de tempo em anos. A função deve calcular e retornar o valor final do
 * investimento após o período determinado, levando em consideração os juros compostos.
 * 
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * 
 * ➕ ENTRADA: 👇
 * A função deve receber os seguintes parâmetros:
 * - valor_inicial: um número inteiro ou decimal representando o valor inicial do investimento.
 * - taxa_juros: um número decimal representando a taxa de juros anual. Por exemplo, se a taxa for de 5%, o valor
 *   passado será 0.05.
 * - periodo: um número inteiro representando a quantidade de anos do investimento.
 * 
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * 
 * ➖ SAÍDA: 👇
 * A função deve retornar o valor final do investimento após o período determinado, considerando os juros
 * compostos. O valor final deve ser arredondado para duas casas decimais.
 * 
 * Exemplos:
 * A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas.
 * Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
 * 
 * |------------|-----------------------------------|
 * | Entrada    | Saída                             |
 * |============|===================================|
 * | 5000       | Valor final do investimento:      |
 * | 0.08       | R$ 7346.64                        |    
 * | 5          |                                   |
 * |------------|-----------------------------------|
 * | 1000       | Valor final do investimento:      |
 * | 0.06       | R$ 1191.02                        |
 * | 3          |                                   |
 * |------------|-----------------------------------|
 * | 20000      | Valor final do investimento:      |
 * | 0.04       | R$ 29604.89                       |
 * | 10         |                                   |
 * |------------|-----------------------------------|
 */

import java.text.DecimalFormat;
import java.util.Scanner;

public class JurosCompostos {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        DecimalFormat df = new DecimalFormat();

        System.out.print("Digite o valor do seu investimento: ");
        double valorInicial = scanner.nextDouble();

        System.out.print("Digite o valor da atxa de juro do seu investimento: ");
        double taxaJuros = scanner.nextDouble();

        System.out.print("Digite o período que durará seu investimento: ");
        int periodo = scanner.nextInt();

        scanner.close();

        double valorFinal = calcularValorFinalInvestimento(valorInicial, taxaJuros, periodo);

        System.out.println("\n\nValor final do investimento: R$ " + df.format(valorFinal));
        // System.out.printf("\n\nValor final do investimento: R$ %.2f", valorFinal);
    }

    static double calcularValorFinalInvestimento(double valorInicial, double taxaJuros, int periodo) {
        // Formula: valorFinal = valorInicial * (taxaJuros + 1) ^ periodo
        double valorFinal = valorInicial * Math.pow(taxaJuros + 1, periodo);
        return valorFinal;
    }
}