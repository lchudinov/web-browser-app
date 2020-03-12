import { BrowserModule } from './browser.module';

describe('BrowserModule', () => {
  let browserModule: BrowserModule;

  beforeEach(() => {
    browserModule = new BrowserModule();
  });

  it('should create an instance', () => {
    expect(browserModule).toBeTruthy();
  });
});
