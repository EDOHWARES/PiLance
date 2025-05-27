// import { Test, TestingModule } from '@nestjs/testing';
// import { getModelToken } from '@nestjs/mongoose';
// import { FreelancerProfileService } from './freelancer-profile.service';
// import { FreelancerProfile } from './schemas/freelancer-profile.schema';
// import { NotFoundException } from '@nestjs/common';

// const mockProfile = {
//   _id: 'mockId',
//   firstName: 'Jane',
//   lastName: 'Doe',
//   title: 'Developer',
// };

// describe('FreelancerProfileService', () => {
//   let service: FreelancerProfileService;
//   let model: any;

//   beforeEach(async () => {
//     // Mock the model as a constructor function
//     const mockProfileModel = jest.fn().mockImplementation(() => ({
//       save: jest.fn().mockResolvedValue(mockProfile),
//     }));

//     mockProfileModel.find = jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockProfile]) });
//     mockProfileModel.findById = jest.fn().mockResolvedValue(mockProfile);
//     mockProfileModel.findByIdAndUpdate = jest.fn().mockResolvedValue(mockProfile);
//     mockProfileModel.findByIdAndDelete = jest.fn().mockResolvedValue(mockProfile);

//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         FreelancerProfileService,
//         { provide: getModelToken(FreelancerProfile.name), useValue: mockProfileModel },
//       ],
//     }).compile();

//     service = module.get<FreelancerProfileService>(FreelancerProfileService);
//     model = module.get(getModelToken(FreelancerProfile.name));
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   it('should create a profile', async () => {
//     const result = await service.create(mockProfile as any);
//     expect(result).toEqual(mockProfile);
//   });

//   it('should update a profile', async () => {
//     const result = await service.update('mockId', mockProfile as any);
//     expect(result).toEqual(mockProfile);
//   });

//   it('should throw NotFoundException on update if not found', async () => {
//     model.findByIdAndUpdate.mockResolvedValueOnce(null);
//     await expect(service.update('badId', mockProfile as any)).rejects.toThrow(NotFoundException);
//   });

//   it('should get a profile by id', async () => {
//     const result = await service.getById('mockId');
//     expect(result).toEqual(mockProfile);
//   });

//   it('should throw NotFoundException on getById if not found', async () => {
//     model.findById.mockResolvedValueOnce(null);
//     await expect(service.getById('badId')).rejects.toThrow(NotFoundException);
//   });

//   it('should find all profiles', async () => {
//     const result = await service.findAll();
//     expect(result).toEqual([mockProfile]);
//   });

//   it('should delete a profile', async () => {
//     const result = await service.delete('mockId');
//     expect(result).toEqual({ message: 'Profile deleted successfully' });
//   });

//   it('should throw NotFoundException on delete if not found', async () => {
//     model.findByIdAndDelete.mockResolvedValueOnce(null);
//     await expect(service.delete('badId')).rejects.toThrow(NotFoundException);
//   });
// });






import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { FreelancerProfileService } from './freelancer-profile.service';
import { FreelancerProfile } from './schemas/freelancer-profile.schema';
import { NotFoundException } from '@nestjs/common';

const mockProfile = {
  _id: 'mockId',
  firstName: 'Jane',
  lastName: 'Doe',
  title: 'Developer',
};

class MockProfileModel {
  constructor(dto?: any) {
    Object.assign(this, dto);
  }
  save = jest.fn().mockResolvedValue(mockProfile);

  static find = jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockProfile]) });
  static findById = jest.fn().mockResolvedValue(mockProfile);
  static findByIdAndUpdate = jest.fn().mockResolvedValue(mockProfile);
  static findByIdAndDelete = jest.fn().mockResolvedValue(mockProfile);
}

describe('FreelancerProfileService', () => {
  let service: FreelancerProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FreelancerProfileService,
        { provide: getModelToken(FreelancerProfile.name), useValue: MockProfileModel },
      ],
    }).compile();

    service = module.get<FreelancerProfileService>(FreelancerProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a profile', async () => {
    const result = await service.create(mockProfile as any);
    expect(result).toEqual(mockProfile);
  });

  it('should update a profile', async () => {
    jest.spyOn(MockProfileModel, 'findByIdAndUpdate').mockResolvedValueOnce(mockProfile);
    const result = await service.update('mockId', mockProfile as any);
    expect(result).toEqual(mockProfile);
  });

  it('should throw NotFoundException on update if not found', async () => {
    jest.spyOn(MockProfileModel, 'findByIdAndUpdate').mockResolvedValueOnce(null);
    await expect(service.update('badId', mockProfile as any)).rejects.toThrow(NotFoundException);
  });

  it('should get a profile by id', async () => {
    jest.spyOn(MockProfileModel, 'findById').mockResolvedValueOnce(mockProfile);
    const result = await service.getById('mockId');
    expect(result).toEqual(mockProfile);
  });

  it('should throw NotFoundException on getById if not found', async () => {
    jest.spyOn(MockProfileModel, 'findById').mockResolvedValueOnce(null);
    await expect(service.getById('badId')).rejects.toThrow(NotFoundException);
  });

  it('should find all profiles', async () => {
    const result = await service.findAll();
    expect(result).toEqual([mockProfile]);
  });

  it('should delete a profile', async () => {
    jest.spyOn(MockProfileModel, 'findByIdAndDelete').mockResolvedValueOnce(mockProfile);
    const result = await service.delete('mockId');
    expect(result).toEqual({ message: 'Profile deleted successfully' });
  });

  it('should throw NotFoundException on delete if not found', async () => {
    jest.spyOn(MockProfileModel, 'findByIdAndDelete').mockResolvedValueOnce(null);
    await expect(service.delete('badId')).rejects.toThrow(NotFoundException);
  });
});