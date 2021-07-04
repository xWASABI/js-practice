// === - Equality Operator
// !== - Not Equal operator
// >, <, >=, <= - Works as well
// Logical AND Operator && - both sides are true
// Logical OR Operator || - either side is true
// { CODE BLOCK }

// Learning
// ========================================================================================
console.log('SECTION 4:32')
console.log('METHODS')
console.log('==== ==== ==== ==== ==== ==== ==== ====')
console.log(``)

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (checkSeats){
        this.guestCount = this.guestCount + checkSeats
        console.log(`Current guest count is: ${this.guestCount}.`)
    },
    removeParty: function (removeSeats){
        this.guestCount = this.guestCount - removeSeats
        console.log(`Current guest count is: ${this.guestCount}.`)
    }
}
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
console.log('')

restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

// ========================================================================================



















console.log('')