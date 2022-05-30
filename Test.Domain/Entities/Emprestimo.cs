namespace Test.Domain.Entities
{
    public class Emprestimo
    {
        public decimal Valor { get; set; }
        public int QntParcelas { get; set; }

        public Emprestimo(decimal valor, int qntParcelas)
        {
            Valor = valor;
            QntParcelas = qntParcelas;
        }
    }
}
