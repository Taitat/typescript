type Reservation = unknown

type Reserve = {
    (from: Date, to: Date, destination: string): void
    (from: Date, destination: string): void
    (destination: string): void
}

let reserve: Reserve = (
    fromOrDestination: Date | string,
    toOrDestination?: Date | string,
    destination?: string
) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        // 宿泊
    } else if (typeof toOrDestination === 'string'){
        // 日帰り
    } else if (typeof fromOrDestination === 'string'){
        // 即出発
    }
}

function call <T extends [unknown, string, ...unknown[]], U, R> (
    f: (...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
}

call(fill, 10, 'a')

function is<T>(first: T, second: T): boolean{
    return first === second
}

function restIs<T>(...args: T[]): boolean{
    return args.every(v => v === args[0])
}
