module.exports = function (api) {
  api.cache(true);
  return {
  presets: [
    'module:@react-native/babel-preset',
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@': './src/',
          '@screens': 'presentation/screens',
          '@main': 'main',
          '@data': 'data',
          '@domain': 'domain',
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'optional-require',
  ],
};
};

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['module:@react-native/babel-preset'],
//     plugins: [
//       [
//         'module-resolver',
//         {
//           root: ['./src'],
//           extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
//           alias: {
//             '@': './src/*',
//             '@screens': './src/presentation/screens',
//           },
//         },
//       ],
//       ['@babel/plugin-proposal-decorators', { legacy: true }],
//       'optional-require',
//     ],
//   };
// };
