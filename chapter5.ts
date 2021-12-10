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

// Type of Factory
type ShoeCreator = {
    create(type: 'balletFlat'): BalletFlat
    create(type: 'boot'): Boot
    create(type: 'sneaker'): Sneaker
}

let Shoe: ShoeCreator = {
    create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
        switch (type) {
            case 'balletFlat': return new BalletFlat()
            case 'boot': return new Boot()
            case 'sneaker': return new Sneaker()
        }
    }
}

let shoes = Shoe.create('boot')

// Builder Pattern

class RequestBuilder {
    protected url: string | null = null
    protected data: object | null = null
    protected method: 'get' | 'post' | null = null

    setData(data: object): this {
        this.data = data
        return this
    }

    setMethod(method: 'get' | 'post'): RequestBuilderWithMethod {
        return new RequestBuilderWithMethod().setMethod(method).setData(this.data)
    }
}

class RequestBuilderWithMethod extends RequestBuilder {
    setMethod(method: 'get' | 'post' | null): this {
        this.method = method
        return this
    }
    setURL(url: string): RequestBuilderWithMethodAndURL {
        return new RequestBuilderWithMethodAndURL()
            .setMethod(this.method)
            .setURL(url)
            .setData(this.data)
    }
}

class RequestBuilderWithMethodAndURL extends RequestBuilderWithMethod {
    setURL(url: string): this {
        this.url = url
        return this
    }
    send(){
    }
}

new RequestBuilder()
    .setMethod('get')
    .setData({})
    .setURL('foo.com')
    .send()