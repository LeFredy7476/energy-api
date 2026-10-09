export class Room {
    id: string;
    code: string;
    buildingId: string;
    floor: number;
    type?: string;
    capacity?: number;
    createdAt: Date;
    updatedAt: Date;
}