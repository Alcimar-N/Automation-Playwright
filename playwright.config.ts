import { defineConfig, devices } from '@playwright/test';
export default defineConfig({

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'off',
   // screenshot: 'only-on-failure',
    
  },
  reporter: [['html', { open: 'always' }]],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

   /*  {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }, */

  // {
  //   name: 'webkit',
  //   use: { ...devices['Desktop Safari'] },
  // },

  //   /* Test against mobile viewports. */
  //   {
  //     name: 'Mobile Chrome',
  //     use: { ...devices['Pixel 5'] },
  //   },
  //   {
  //     name: 'Mobile Safari',
  //     use: { ...devices['iPhone 12'] },
  //   },

  //   /* Test against branded browsers. */
   /*  {
      name: 'Microsoft Edge',
      use: { 
        ...devices['Desktop Edge'], 
        channel: 'msedge' 
      },
    },
    {
      name: 'Google Chrome',
      use: { 
        ...devices['Desktop Chrome'], 
        channel: 'chrome' 
      },
    }, */
    ]
   
});