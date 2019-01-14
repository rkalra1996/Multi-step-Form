import { MultiStepModuleModule } from './multi-step-module.module';

describe('MultiStepModuleModule', () => {
  let multiStepModuleModule: MultiStepModuleModule;

  beforeEach(() => {
    multiStepModuleModule = new MultiStepModuleModule();
  });

  it('should create an instance', () => {
    expect(multiStepModuleModule).toBeTruthy();
  });
});
