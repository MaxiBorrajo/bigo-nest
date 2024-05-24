import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { QrModule } from './qr/qr.module';
import { PetServicesModule } from './pet-services/pet-services.module';
import { PetsModule } from './pets/pets.module';
import { OrdersModule } from './orders/orders.module';
import { OpinionsModule } from './opinions/opinions.module';
import { KeepersModule } from './keepers/keepers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, QrModule, PetServicesModule, PetsModule, OrdersModule, OpinionsModule, KeepersModule, AuthModule],
  controllers: [],
})
export class AppModule {}
