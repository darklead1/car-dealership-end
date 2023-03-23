import { v4 as uuid } from "uuid";
import { Car } from '../../cars/interfaces/car.interface';





export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: "toyota",
        model: "corolla",
    },
    {
        id: uuid(),
        brand: "Honda",
        model: "civic",
    },
    {
        id: uuid(),
        brand: "Jeep",
        model: "cheroke",
    }


]