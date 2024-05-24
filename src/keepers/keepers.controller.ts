import { Controller } from '@nestjs/common';
import { KeepersService } from './keepers.service';

@Controller('keepers')
export class KeepersController {
    constructor(private keepersService: KeepersService) {}
}
