using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BridgePointsCounter.Enums;

namespace WebApplication.Models
{
    public class PointsCounterDto
    {
        /// <example>5</example>
        public int Bid { get; set; }
        /// <example>5</example>
        public int Scored { get; set; }
        /// <example>25</example>
        public int PointsInPair { get; set; }
        /// <example>0</example>
        public Colors Color { get; set; }
        /// <example>true</example>
        public bool AfterGame { get; set; }
        /// <example>false</example>
        public bool EnemyAfterGame { get; set; }
        /// <example>0</example>
        public Doubles Doubles { get; set; }

        public PointsCounterDto(int bid, int scored, int pointsInPair, Colors color, bool afterGame, bool enemyAfterGame, Doubles doubles)
        {
            Bid = bid;
            Scored = scored;
            PointsInPair = pointsInPair;
            Color = color;
            AfterGame = afterGame;
            EnemyAfterGame = enemyAfterGame;
            Doubles = doubles;
        }
    }
}
