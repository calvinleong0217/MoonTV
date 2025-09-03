// next.config.js
const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
  projectRoot: __dirname,
  transpilePackages: ['lucide-react-native', 'react-native-qrcode-svg'],
});
