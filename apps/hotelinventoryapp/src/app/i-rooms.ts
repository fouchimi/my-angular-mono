export interface IRooms {
    totalRooms? : number;
    availableRooms?: number;
    bookedRooms?: number;
}

export interface RoomList {
    roomId: number,
    roomType: string,
    amenities: string,
    photo: string,
    price: number,
    checkingTime: Date,
    checkoutTime: Date
}
