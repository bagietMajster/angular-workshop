module.exports = {
  name: 'angular-workshop',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-workshop',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
