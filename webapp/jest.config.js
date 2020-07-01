module.exports = {
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageDirectory: './coverage',
  collectCoverageFrom: ['app/**/*.{js,jsx,ts,tsx}'],
  // coverageThreshold: {
  //   global: {
  //     statements: 60,
  //     branches: 60,
  //     lines: 60,
  //     functions: 60,
  //   }
  // },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'less', 'css'],
  moduleDirectories: ['node_modules', 'app', 'share'],
  moduleNameMapper: {
    '^app/(.*)$': '<rootDir>/app/$1',
    '^utils/(.*)$': '<rootDir>/app/utils/$1',
    '^assets/fonts/iconfont': '<rootDir>/__mocks__/styleMock',
    '^assets/(.*)$': '<rootDir>/app/assets/$1',
    '^components/(.*)$': '<rootDir>/app/components/$1',
    // '^containers/Background/Loadable': '<rootDir>/__mocks__/jsxMock',
    '^\\./Canvas': '<rootDir>/__mocks__/jsxMock',
    '^containers/(.*)$': '<rootDir>/app/containers/$1',
    '^libs/(.*)$': '<rootDir>/libs/$1',
    '^.+\\.(css|less)$': 'identity-obj-proxy',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": 'test-file-stub',
    'antd/es/locale/zh_CN': '<rootDir>/__mocks__/styleMock',
    'moment/src/locale/zh-cn': '<rootDir>/__mocks__/styleMock',
    '!file-loader': '<rootDir>/__mocks__/styleMock',
    'file-loader': '<rootDir>/__mocks__/styleMock'
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.tsx?$': 'ts-jest',
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    '^.+\\.svg$': 'jest-svg-transformer'
  },
  transformIgnorePatterns: [
    "/node_modules/(?!three).+\\.js$"
  ],
  testPathIgnorePatterns: [
    'node_modules/',
    'internals/',
    'e2e/'
  ],
  setupFiles: [
    'jest-webgl-canvas-mock',
    'jest-localstorage-mock'
  ]
}
