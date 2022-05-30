using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Test.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {


        // GET api/<ClienteController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            try
            {
                var lista = new List<KeyValuePair<int, string>>
            {
                new KeyValuePair<int, string>(1,"ana"),
                new KeyValuePair<int, string>(2,"joao"),
                new KeyValuePair<int, string>(3,"luciano")

            };

                return lista.First(x => x.Key == id).Value;
            }
            catch (Exception)
            {

                throw new ArgumentException("ERRO: Digite apenas de 1 a 3 e apenas numeros");
                
            }
        }




    }
}
