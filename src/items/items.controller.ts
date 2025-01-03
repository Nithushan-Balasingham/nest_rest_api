/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService : ItemsService){}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) : Promise<Item> {
        return this.itemsService.findOne(id);
    }
  

  @Post()
  create(@Body() createItemDro : CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDro);
  }

  @Delete(':id')
  delete(@Param('id') id) : Promise<Item>{
    return this.itemsService.delete(id);
  }

  @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id) :Promise<Item>{
        return this.itemsService.update(id, updateItemDto)
    }
  
}
