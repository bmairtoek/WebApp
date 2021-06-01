using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication.Models;
using BridgePointsCounter.Enums;

namespace BridgePointsCounter
{
    class PointsCounter
    {
        private readonly int bid;
        private readonly int scored;
        private readonly int pointsInPair;
        private readonly Colors color;
        private readonly bool afterGame;
        private readonly bool enemyAfterGame;
        private readonly Doubles doubles;

        public PointsCounter(int bid, int scored, int pointsInPair, Colors color, bool afterGame, bool enemyAfterGame, Doubles doubles)
        {
            this.bid = bid;
            this.scored = scored;
            this.pointsInPair = pointsInPair;
            this.color = color;
            this.afterGame = afterGame;
            this.enemyAfterGame = enemyAfterGame;
            this.doubles = doubles;
        }

        public PointsCounter(PointsCounterDto dto): 
            this(
                dto.Bid, 
                dto.Scored, 
                dto.PointsInPair, 
                dto.Color, 
                dto.AfterGame, 
                dto.EnemyAfterGame, 
                dto.Doubles
            )
        { }

        public int Calculate()
        {
            if (bid == 0)
                return IMPScore(0, ExpectedResult());
            int scoreForTricks = CalculateScoreForTricks();
            int expectedResult = ExpectedResult();
            int score = scoreForTricks + BonusPoints();
            return IMPScore(score, expectedResult);
        }

        private int BonusPoints()
        {
            if (scored >= bid)
            {
                if (bid == 7)
                {
                    if (afterGame)
                        return 1500 + 500;
                    else
                        return 750 + 300;
                }
                else if (bid == 6)
                {
                    if (afterGame)
                        return 1000 + 500;
                    else
                        return 500 +300;
                }
                else if (PointsForTricksWithDoubles(bid)>=100)
                {
                    if (afterGame)
                        return 500;
                    else
                        return 300;
                }
                else
                    return 50;
            }
            return 0;
        }

        private int IMPScore(int score, int expectedScore)
        {
            int difference = Math.Abs(score - expectedScore);
            int result;
            if (difference <= 10)
            {
                result = 0;
            } else if (difference <= 40)
            {
                result = 1;
            }
            else if (difference <= 80)
            {
                result = 2;
            }
            else if (difference <= 120)
            {
                result = 3;
            }
            else if (difference <= 160)
            {
                result = 4;
            }
            else if (difference <= 210)
            {
                result = 5;
            }
            else if (difference <= 260)
            {
                result = 6;
            }
            else if (difference <= 310)
            {
                result = 7;
            }
            else if (difference <= 360)
            {
                result = 8;
            }
            else if (difference <= 420)
            {
                result = 9;
            }
            else if (difference <= 490)
            {
                result = 10;
            }
            else if (difference <= 590)
            {
                result = 11;
            }
            else if (difference <= 740)
            {
                result = 12;
            }
            else if (difference <= 890)
            {
                result = 13;
            }
            else if (difference <= 1090)
            {
                result = 14;
            }
            else if (difference <= 1290)
            {
                result = 15;
            }
            else if (difference <= 1490)
            {
                result = 16;
            }
            else if (difference <= 1740)
            {
                result = 17;
            }
            else if (difference <= 1990)
            {
                result = 18;
            }
            else if (difference <= 2240)
            {
                result = 19;
            }
            else if (difference <= 2490)
            {
                result = 20;
            }
            else if (difference <= 2990)
            {
                result = 21;
            }
            else if (difference <= 3490)
            {
                result = 22;
            }
            else if (difference <= 3990)
            {
                result = 23;
            }
            else
            {
                result = 24;
            }
            if (score < expectedScore)
                result = -result;
            return result;
        }

        private int CalculateScoreForTricks()
        {
            int result = 0;
            if (bid <= scored) {
                if (doubles == Doubles.Undoubled)
                {
                    result = PointsForTricks(scored);
                }
                else if (doubles == Doubles.Doubled)
                {
                    if (afterGame)
                        result = 2 * PointsForTricks(bid) + (scored - bid) * 200 + 50;
                    else
                        result = 2 * PointsForTricks(bid) + (scored - bid) * 100 + 50;
                }
                else if (doubles == Doubles.Redoubled)
                {
                    if (afterGame)
                        result = 4 * PointsForTricks(bid) + (scored - bid) * 400 + 100;
                    else
                        result = 4 * PointsForTricks(bid) + (scored - bid) * 200 + 100;
                }
            }
            else
            {
                if (doubles == Doubles.Undoubled)
                {
                    if (afterGame)
                        result = (scored - bid) * 100;
                    else
                        result = (scored - bid) * 50;
                }
                else if (doubles == Doubles.Doubled)
                {
                    if (afterGame)
                        result = -200 + (scored - (bid - 1)) * 300;
                    else
                        result = -100 + (scored - (bid - 1)) * 200;
                }
                else if (doubles == Doubles.Redoubled)
                {
                    if (afterGame)
                        result = -400 + (scored - (bid - 1)) * 500;
                    else
                        result = -200 + (scored - (bid - 1)) * 300;
                }
            }
            return result;
        }

        private int PointsForTricks(int amount)
        {
            int result=0;
            switch (color)
            {
                case Colors.Clubs:
                case Colors.Diamonds:
                    result = amount * 20;
                    break;
                case Colors.Hearts:
                case Colors.Spades:
                    result = amount * 30;
                    break;
                case Colors.NoTrumps:
                    result = amount * 30 + 10;
                    break;
            }
            return result;
        }

        private int PointsForTricksWithDoubles(int amount)
        {
            switch (doubles)
            {
                case Doubles.Undoubled:
                    return PointsForTricks(amount);
                case Doubles.Doubled:
                    return 2*PointsForTricks(amount);
                case Doubles.Redoubled:
                    return 4*PointsForTricks(amount);
            }
            throw new ArgumentException();
        }

        private int ExpectedResult()
        {
            return pointsInPair >= 20 ?
                ExpectedResulTable(pointsInPair, afterGame) :
                -ExpectedResulTable(40 - pointsInPair, enemyAfterGame);
        }

        private int ExpectedResulTable(int points, bool isAfterGame)
        {
            if (afterGame)
            {
                switch (points)
                {
                    case 20:
                        return 0;
                    case 21:
                        return 50;
                    case 22:
                        return 70;
                    case 23:
                        return 110;
                    case 24:
                        return 290;
                    case 25:
                        return 440;
                    case 26:
                        return 520;
                    case 27:
                        return 600;
                    case 28:
                        return 630;
                    case 29:
                        return 660;
                    case 30:
                        return 690;
                    case 31:
                        return 800;
                    case 32:
                        return 1050;
                    case 33:
                        return 1350;
                    case 34:
                        return 1500;
                    case 35:
                        return 1650;
                    case 36:
                        return 1800;
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        return 2100;
                }
            }
            else
            {
                switch (points)
                {
                    case 20:
                        return 0;
                    case 21:
                        return 50;
                    case 22:
                        return 70;
                    case 23:
                        return 110;
                    case 24:
                        return 200;
                    case 25:
                        return 300;
                    case 26:
                        return 350;
                    case 27:
                        return 400;
                    case 28:
                        return 430;
                    case 29:
                        return 460;
                    case 30:
                        return 490;
                    case 31:
                        return 600;
                    case 32:
                        return 700;
                    case 33:
                        return 900;
                    case 34:
                        return 1000;
                    case 35:
                        return 1100;
                    case 36:
                        return 1200;
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                        return 1400;
                }
            }
            throw new ArgumentException();
        }
    }
}
