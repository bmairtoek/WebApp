using BridgePointsCounter;
using Microsoft.AspNetCore.Mvc;
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
        /// <summary>
        /// Calculates score for sent dto
        /// </summary>
        /// <remarks>
        /// Sample request:
        /// 
        ///     POST /PointsCounter
        ///     {
        ///         "bid": 3,
        ///         "scored": 4,
        ///         "pointsInPair": 24,
        ///         "color": 4,
        ///         "afterGame": false,
        ///         "enemyAfterGame": true,
        ///         "doubles": 0
        ///     }
        ///     
        /// </remarks>
        /// <response code="200">Score</response>
        [HttpPost]
        [ProducesResponseType(typeof(int), 200)]
        public int Post([FromBody] PointsCounterDto dto)
        {
            int score = new PointsCounter(dto).Calculate();
            return score;
        }
    }
}
