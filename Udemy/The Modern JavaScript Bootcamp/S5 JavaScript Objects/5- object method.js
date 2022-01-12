let restaurant = {
    name: 'abdo restaurant',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) { // this function will take the party size and return true if partySize <= seatsLeft
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) { // adding the party seat to the guestcount of the restaurant 
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) { // this party finished 
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4)) // the result is false 
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4)) // the result is true