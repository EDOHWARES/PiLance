import { Test, TestingModule } from '@nestjs/testing';
import { ClientProfileController } from './client-profile.controller';
import { ClientProfileService } from './client-profile.service';

const mockProfile = {
  _id: 'mockId',
  companyName: 'Acme Corp',
  industry: 'Tech',
};

describe('ClientProfileController', () => {
  let controller: ClientProfileController;
  let service: ClientProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientProfileController],
      providers: [
        {
          provide: ClientProfileService,
          useValue: {
            create: jest.fn().mockResolvedValue(mockProfile),
            update: jest.fn().mockResolvedValue(mockProfile),
            getById: jest.fn().mockResolvedValue(mockProfile),
            findAll: jest.fn().mockResolvedValue([mockProfile]),
            delete: jest.fn().mockResolvedValue({ message: 'Profile deleted successfully' }),
          },
        },
      ],
    }).compile();

    controller = module.get<ClientProfileController>(ClientProfileController);
    service = module.get<ClientProfileService>(ClientProfileService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a profile', async () => {
    const result = await controller.create(mockProfile as any);
    expect(result).toEqual(mockProfile);
  });

  it('should update a profile', async () => {
    const result = await controller.update('mockId', mockProfile as any);
    expect(result).toEqual(mockProfile);
  });

  it('should get a profile by id', async () => {
    const result = await controller.get('mockId');
    expect(result).toEqual(mockProfile);
  });

  it('should find all profiles', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([mockProfile]);
  });

  it('should delete a profile', async () => {
    const result = await controller.delete('mockId');
    expect(result).toEqual({ message: 'Profile deleted successfully' });
  });
});