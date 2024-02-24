module.exports = {
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/**/index.ts',
    '!**/*.d.ts',
    '!<rootDir>/src/presentation/modules/app/**/*',
  ],
  preset: 'jest-expo',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules',
    '/ios',
    'android',
    '/src/presentation/modules/app/',
  ],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)(\\?inline)?$':
      'jest-transform-stub',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
    '@/tests/(.*)': '<rootDir>/tests/$1',
  },
};
