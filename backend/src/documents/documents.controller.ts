import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { QueryDto } from './dto/query.dto';
import { GenerateResponse } from './dto/response.dto';

@Controller('api')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post('generate')
  async generate(@Body() queryDto: QueryDto): Promise<GenerateResponse> {
    try {
      if (!queryDto.query || queryDto.query.trim().length === 0) {
        throw new HttpException(
          'Query cannot be empty',
          HttpStatus.BAD_REQUEST,
        );
      }

      const result = await this.documentsService.searchDocuments(
        queryDto.query,
      );
      return result;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      throw new HttpException(
        'Internal server error while processing query',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
