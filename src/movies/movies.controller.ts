import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get() 
    getAll() {
        return "This will return all movies";
    }

    @Get("search")
    search(@Query("year") searchingYear: number) {
        return `We are searching after year: ${searchingYear}`
    }

    @Get("/:id")
    getOne(@Param("id") movieId: string) {
        return `This will return One movie with the id: ${movieId}`
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData)
        return movieData
    }

    @Delete(":id")
    remove(@Param("id") movieId: string) {
        return `This will delete a movie ${movieId}`
    }

    @Patch("/:id")
    patch(@Param("id") movieId: string, @Body() updateData) {
        return {
            updateData: movieId,
            ...updateData
        };
    }

}
