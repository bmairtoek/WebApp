using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BridgePointsCounter.Enums;

namespace WebApplication.Models
{
    public class PointsCounterDto
    {
        public int Bid { get; set; }
        public int Scored { get; set; }
        public int PointsInPair { get; set; }
        public Colors Color { get; set; }
        public bool AfterGame { get; set; }
        public bool EnemyAfterGame { get; set; }
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
