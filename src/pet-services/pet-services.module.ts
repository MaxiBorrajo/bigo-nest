import { Module } from '@nestjs/common';
import { PetServicesController } from './pet-services.controller';
import { PetServicesService } from './pet-services.service';

@Module({
  controllers: [PetServicesController],
  providers: [PetServicesService]
})
export class PetServicesModule {}
