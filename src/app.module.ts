import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import envValidationSchema from './config/env.config';
import throttleConfig from './config/throttle.config';
import { ListsModule } from './modules/lists/lists.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [throttleConfig],
      isGlobal: true,
      cache: false,
      validationSchema: envValidationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
      expandVariables: true,
    }),
    ListsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
