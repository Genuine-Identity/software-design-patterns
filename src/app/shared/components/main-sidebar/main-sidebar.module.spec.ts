import { MainSidebarModule } from './main-sidebar.module';

describe('MainSidebarModule', () => {
  let mainSidebarModule: MainSidebarModule;

  beforeEach(() => {
    mainSidebarModule = new MainSidebarModule();
  });

  it('should create an instance', () => {
    expect(mainSidebarModule).toBeTruthy();
  });
});
