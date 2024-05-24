import { Controller } from '@nestjs/common';
import { PetServicesService } from './pet-services.service';

@Controller('pet-services')
export class PetServicesController {
    constructor(private petServicesService: PetServicesService) {}
}
