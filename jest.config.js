module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  testPathIgnorePatterns: ['__mocks__'],
  testRegex: '__tests__/.*\\.tsx?$',
}
