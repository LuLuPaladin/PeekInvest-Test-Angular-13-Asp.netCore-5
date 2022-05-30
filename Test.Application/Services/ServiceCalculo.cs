using Test.Domain.Entities;
using System;
using System.Globalization;

namespace Test.Application.Services
{
    public class ServiceCalculo : IServiceCalculo
    {
        
        public decimal CalculoPeekInvest(Emprestimo emp)
        {
            decimal result = (emp.Valor / emp.QntParcelas);
            result += result * 0.05M;
            return result;
        }
    }
}
