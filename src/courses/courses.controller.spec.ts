import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

describe('CoursesController', () => {
  let controller: CoursesController;
  const courseId = Date.now().toString();
  const testCourse = {
    id: courseId,
    name: 'Testing',
    description: 'Testing',
    tags: ['test tag', 'another test tag'],
    teacherId: '123',
  };
  const mockCoursesService = {
    findOne: jest.fn((id) => {
      return [
        {
          id,
          name: 'Testing',
          description: 'Testing',
          tags: ['test tag', 'another test tag'],
          teacherId: '123',
        },
      ];
    }),
    findAll: jest.fn(() => {
      return [
        {
          id: '1',
          name: 'Testing',
          description: 'Testing',
          tags: ['test tag', 'another test tag'],
          teacherId: '123',
        },
        {
          id: '2',
          name: 'Testing',
          description: 'Testing',
          tags: ['test tag', 'another test tag'],
          teacherId: '123',
        },
      ];
    }),
    create: jest.fn((dto) => {
      return {
        id: courseId,
        ...dto,
      };
    }),
    update: jest.fn((dto, id) => {
      return {
        id,
        ...dto,
      };
    }),
    delete: jest.fn((id) => {
      return {
        id,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
      providers: [CoursesService],
    })
      .overrideProvider(CoursesService)
      .useValue(mockCoursesService)
      .compile();

    controller = module.get<CoursesController>(CoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should fetch a course', async () => {
    expect(await controller.findOne(courseId)).toEqual([
      {
        id: courseId,
        ...testCourse,
      },
    ]);
    expect(mockCoursesService.findOne).toHaveBeenCalled();
  });

  it('should fetch all courses', async () => {
    const response = await controller.findAll();
    expect(response.length).toBeGreaterThan(0);
    expect(response).toBeInstanceOf(Array);
    expect(mockCoursesService.findAll).toHaveBeenCalled();
  });

  it('should create a course', async () => {
    expect(await controller.create(testCourse)).toEqual({
      id: expect.any(String),
      ...testCourse,
    });
    expect(mockCoursesService.create).toHaveBeenCalled();
  });

  it('should update a course', async () => {
    expect(await controller.update(courseId, testCourse)).toEqual({
      id: courseId,
      ...testCourse,
    });
    expect(mockCoursesService.update).toHaveBeenCalled();
  });

  it('should delete a course', async () => {
    expect(await controller.delete(courseId)).toEqual({
      id: courseId,
    });
    expect(mockCoursesService.delete).toHaveBeenCalled();
  });
});
