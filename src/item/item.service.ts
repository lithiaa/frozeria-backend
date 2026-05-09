import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  
  constructor(private prisma: PrismaService) {}
  
  async create(createItemDto: CreateItemDto, filename?: string) {
    return this.prisma.item.create({
      data: {
        ...createItemDto,
        item_picture: filename,
      },
    });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.prisma.item.findUnique({
      where: { id },
    });

    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return this.prisma.item.update({
      where: { id },
      data: updateItemDto,
    });
  }

  async remove(id: number) {
    const item = await this.prisma.item.findUnique({
      where: { id },
    });

    if (!item) {
      throw new NotFoundException('Item not found');
    }

    return this.prisma.item.delete({
      where: { id },
    });
  }

  async findAll() {
    return this.prisma.item.findMany();
  }

  async findOne(id: number) {
    return this.prisma.item.findUnique({
      where: { id },
    });
  }

  async findByCategory(categoryId: number) {
  return this.prisma.item.findMany({
    where: {
      categoryId,
    },

    include: {
      category: true,
    },
  });
}
}
