import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './schemas/contact.schema';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
    
    constructor(private contactService: ContactService){}

    @Get()
    async getAllContacts(): Promise<Contact[]>{
        return this.contactService.findAll()
    }

    @Post('new')
    async createContact(
        @Body()
        contact: CreateContactDto,
         
    ): Promise<Contact>{
        return this.contactService.create(contact);
    }

    @Get(':id')
    async getBook(
        @Param('id')
        id: string ,
    ): Promise<Contact>{
        return this.contactService.findById(id);
    }



   @Put(':id')
   async updateBook(
      @Param('id')
      id: string, 
      @Body()
      contact: UpdateContactDto,
   ): Promise<Contact> {
      return this.contactService.updateById(id, contact);
   }


   @Delete(':id')
   async deleteBook(
     @Param('id')
     id: string, 
   ): Promise<Contact> {
      return this.contactService.deleteById(id);
   }


}  

