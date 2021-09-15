using NUnit.Framework;
using WebApplication.Models;
using BridgePointsCounter;
using BridgePointsCounter.Enums;
using System.Collections.Generic;

namespace WebApplicationTests
{
    [TestFixture]
    public class PointsCounterTests
    {
        public static IEnumerable<TestCaseData> IMPScoreTestSource
        {
            get
            {
                yield return new TestCaseData(new PointsCounterDto(3, 5, 24, Colors.Diamonds, true, false, Doubles.Undoubled), -4).SetArgDisplayNames("1");
                yield return new TestCaseData(new PointsCounterDto(4, 2, 25, Colors.Spades, true, false, Doubles.Undoubled), -12).SetArgDisplayNames("2");
                yield return new TestCaseData(new PointsCounterDto(4, 4, 26, Colors.Hearts, true, false, Doubles.Undoubled), 3).SetArgDisplayNames("3");
                yield return new TestCaseData(new PointsCounterDto(3, 4, 23, Colors.NoTrumps, false, false, Doubles.Undoubled), 8).SetArgDisplayNames("4");
                yield return new TestCaseData(new PointsCounterDto(5, 5, 31, Colors.NoTrumps, false, false, Doubles.Undoubled), -4).SetArgDisplayNames("5");
            }
        }

        [TestCaseSource(nameof(IMPScoreTestSource))]
        public void IsIMPScoreCorrect(PointsCounterDto dto, int expectedValue)
        {
            int result = new PointsCounter(dto).Calculate();
            Assert.AreEqual(expectedValue, result);
        }
    }
}