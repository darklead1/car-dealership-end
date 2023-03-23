import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid"
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {

    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: "Toyota",
        //     model: "Corolla"
        // } 
    ]


    findAll() {
        return this.cars
    }

    findOneById(gato: string) {
        const car = this.cars.find(perro => perro.id === gato)
        if (!car) {
            throw new NotFoundException(`Car with id ${gato} not found`);
        }
        console.log("id ", gato)
        return car

    }

    create(createCarDto: CreateCarDto) {

        const car: Car = {
            id: uuid(),
            //aquí van las propiedades, pero puedo poner el operador spreed
            ...createCarDto
        }
        this.cars.push(car)
        return car
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let carDB = this.findOneById(id);

        if (updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`car id is not valid`);

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = { ...carDB, ...updateCarDto, id }
                return carDB;
            }

            return car;
        })

        return carDB;

    }


    delete(id: string) {

        const car = this.findOneById(id);

        this.cars = this.cars.filter(car => car.id !== id);
    }


    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }



}