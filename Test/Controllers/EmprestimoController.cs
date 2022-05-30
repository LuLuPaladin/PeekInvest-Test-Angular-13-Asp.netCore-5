using Microsoft.AspNetCore.Mvc;
using Test.Domain.Entities;
using Test.Application.Services;

namespace Test.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmprestimoController : ControllerBase
    {
        
        private readonly IServiceCalculo _serviceCalculo;

        public EmprestimoController(IServiceCalculo serviceCalculo)
        {
            _serviceCalculo = serviceCalculo;

        }

        [HttpPost]
        public ActionResult<Emprestimo> CalculaEmprestimo([FromBody] Emprestimo emprestimo)
        {
            decimal resultado = _serviceCalculo.CalculoPeekInvest(emprestimo);
            return Ok(resultado);
        }

    }
}
