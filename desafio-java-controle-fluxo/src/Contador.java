import java.util.Scanner;

public class Contador {
    public static void main(String[] args) {

        Scanner terminal = new Scanner(System.in);

        System.out.print("Digite o primeiro parâmetro: ");
        int parametroUm = terminal.nextInt();

        System.out.print("Digite o primeiro parâmetro: ");
        int parametroDois = terminal.nextInt();

        terminal.close();

        try {
            contar(parametroUm, parametroDois);
        } catch (ParametrosInvalidosException e) {
            System.out.println("Error: O segundo parâmetro deve ser maior que o primeiro");
        }

    }

    private static void contar(int parametroUm, int parametroDois) throws ParametrosInvalidosException {

        if (parametroUm > parametroDois) {
            throw new ParametrosInvalidosException();
        }

        int contagem = parametroDois - parametroUm;

        for (int i = 1; i <= contagem; i++) {
            if (i < 10) {
                System.out.println("Imprimindo o número 0" + i);
            } else {
                System.out.println("Imprimindo o número " + i);
            }
        }

    }
}
