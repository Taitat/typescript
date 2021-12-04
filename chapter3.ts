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