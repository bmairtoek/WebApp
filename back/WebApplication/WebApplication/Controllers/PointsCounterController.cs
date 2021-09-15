using BridgePointsCounter;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PointsCounterController : ControllerBase
    {
        //private readonly ILogger<PointsCounterController> _logger;

        //public PointsCounterController(ILogger<PointsCounterController> logger)
        //{
        //    _logger = logger;
        //}

        /// <summary>
        /// Calculates score for sent dto
        /// </summary>
        /// <response code="200">Score</response>
        [HttpGet]
        [ProducesResponseType(typeof(int), 200)]
        public int Get([FromQuery] PointsCounterDto dto)
        {
            int score = new PointsCounter(dto).Calculate();
            return score;
        }
    }
}
