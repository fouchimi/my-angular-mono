export interface IRooms {
    totalRooms? : number;
    availableRooms?: number;
    bookedRooms?: number;
}

export interface RoomList {
    roomId: number,
    roomType: string,
    ameniites: string,
    photo: string,
    price: number,
    checkingTime: Date,
    checkoutTime: Date
}
