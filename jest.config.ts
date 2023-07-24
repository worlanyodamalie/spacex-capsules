export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    // testEnvironment: 'jsdom',
    transform: {
    //   "^.+\\.tsx?$": "ts-jest",
    '^.+\\.ts?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest"
      
    },
    
     "transformIgnorePatterns": [
          "node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
        ]
     ,
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/mocks/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    
  }