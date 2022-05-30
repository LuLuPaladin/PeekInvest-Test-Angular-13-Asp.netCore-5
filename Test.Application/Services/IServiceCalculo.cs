using Test.Domain.Entities;

namespace Test.Application.Services
{
    public interface IServiceCalculo
    {
        decimal CalculoPeekInvest(Emprestimo emprestimo);
    }
}
