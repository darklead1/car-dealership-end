import { Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';
import { Body, Delete, Patch, Post, UsePipes } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';



@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {


    constructor(
        private readonly carsService: CarsService
    ) { }


    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(":id")
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        console.log({ id })
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);

    }

    //cuando son muchos se van dejando hacia abajo 
    @Patch(":id")
    updateCar(@Param("id", ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto) {
        return this.carsService.update(id, updateCarDto);

    }

    @Delete(":id")
    daleteCar(@Param("id", ParseUUIDPipe) id: string) {
        return this.carsService.delete(id)
    }




}
