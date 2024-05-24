import { Controller } from '@nestjs/common';
import { PetServicesService } from 'src/pet-services/pet-services.service';

@Controller('pets')
export class PetsController {
    constructor(private petsService: PetServicesService) {}
}
