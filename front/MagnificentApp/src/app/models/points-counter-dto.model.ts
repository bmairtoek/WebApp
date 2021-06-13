
export class PointsCounterDto {
    public bid: number = 0;
    public scored: number = 0;
    public pointsInPair: number = 20;
    public color: Colors = 0;
    public afterGame: boolean = false;
    public enemyAfterGame: boolean = false;
    public doubles: Doubles = 0;
}

export enum Colors {
    Clubs, 
    Diamonds, 
    Hearts, 
    Spades, 
    NoTrumps 
}

export enum Doubles {
    Undoubled, 
    Doubled, 
    Redoubled 
}