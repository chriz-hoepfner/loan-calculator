const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

module.exports = createJestConfig({
  modulePaths: ['src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  roots: ['./'],
  testMatch: ['**/?(*.)+(spec).ts?(x)'],
  collectCoverage: true,
  coverageReporters: ['lcov', 'json', 'html'],
  coverageDirectory: 'reports/jest-coverage',
  collectCoverageFrom: ['src/services/**/*.ts'],
  transformIgnorePatterns: ['"<rootDir>/node_modules/"'],
});
