export const config = {
 
    specs: [
           './test/**/*.spec.ts'
       ],
    capabilities: [{
           browserName: 'chrome', 
           maxInstances: 1,       
       }],    
       framework: 'Mocha',  
       MochaOpts: {
           defaultTimeoutInterval: 120000,
       },
       autoCompileOpts: {
           autoCompile: true,
           // for all available options
           tsNodeOpts: {
               transpileOnly: true,
               project: 'tsconfig.json'
           }
       },
       baseURL: 'http://localhost',
   }