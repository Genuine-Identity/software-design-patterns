import { ContentHeaderModule } from './content-header.module';

describe('ContentHeaderModule', () => {
  let contentHeaderModule: ContentHeaderModule;

  beforeEach(() => {
    contentHeaderModule = new ContentHeaderModule();
  });

  it('should create an instance', () => {
    expect(contentHeaderModule).toBeTruthy();
  });
});
