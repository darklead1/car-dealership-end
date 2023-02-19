import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Patch, Post } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';


@Controller('cars')
export class CarsController {


    constructor(
        private readonly carsService: CarsService
    ) { }


    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(":id")
    getCarById(@Param('id', ParseIntPipe) id: number) {
        console.log({ id })
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() body: any) {
        return body;

    }

    //cuando son muchos se van dejando hacia abajo 
    @Patch(":id")
    updateCar(@Param("id", ParseIntPipe) id: number,
        @Body() body: any) {
        return body;

    }

    @Delete(":id")
    daleteCar(@Param("id", ParseIntPipe) id: number) {
        return {
            method: "delete",
            id
        }
    }



}
