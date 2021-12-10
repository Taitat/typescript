// Chess engine

type Color = 'Black' | 'White'
type Files = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8


class Game {
    private pieces = Game.makePieces()
    private static makePieces() {
        return [
            new King('White', 'E', 1),
            new King('Black', 'E', 8)
        ]
    }
}

abstract class Piece {
    protected position: Position
    constructor(
        private readonly color: Color,
        file: Files,
        rank: Rank
    ) {
        this.position = new Position(file, rank)
    }
    moveTo(position: Position) {
        this.position = position
    }
    abstract canMoveTo(position: Position): boolean
}

class Position {
    constructor(
        private file: Files,
        private rank: Rank
    ) {}
    distanceFrom(postion: Position) {
        return {
            rank: Math.abs(postion.rank - this.rank),
            file: Math.abs(postion.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}


class King extends Piece {
    canMoveTo(position: Position){
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}

// Interface or Intersection Types

interface A {
    good(x: number): string
    bad(x: number): string
}

interface B extends A {
    good(x: string | number): string
    bad(x: number): string
}

type C = {
    good(x: number): string
    bad(x: number): string
}

type D = C & {
    good(x: string | number): string
    bad(x: string): string
}

// Factory Pattern

type Shoe = {
    purpose: string
}

class BalletFlat implements Shoe {
    purpose = 'dancing'
}

class Boot implements Shoe {
    purpose = 'woodcutting'
}

class Sneaker implements Shoe {
    purpose = 'walking'
}

let Shoe = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
        switch (type) {
            case 'balletFlat': return new BalletFlat
            case 'boot': return new Boot
            case 'sneaker': return new Sneaker
        }
    }
}

// Builder Pattern

class RequestBuilder {
    private url: string | null = null
    private data: object | null = null
    private method: 'get' | 'post' | null = null

    setURL(url: string): this {
        this.url = url
        return this
    }

    setData(data: object): this {
        this.data = data
        return this
    }

    setMethod(method: 'get' | 'post'): this {
        this.method = method
        return this
    }
}