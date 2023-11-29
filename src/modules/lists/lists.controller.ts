import {
  Controller,
  Get,
  Param,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Get()
  async findAll(): Promise<Array<object>> {
    return await this.listsService.findAll();
  }

  @Get(':list_name_encoded')
  async findOne(
    @Param('list_name_encoded') listName: string,
  ): Promise<Array<object>> {
    if (!listName) {
      throw new UnprocessableEntityException('List name must not be empty');
    }
    return await this.listsService.findOne(listName);
  }
}
