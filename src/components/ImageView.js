import PropTypes from 'prop-types';
import { NativeModules, requireNativeComponent, View } from 'react-native';

var iface = {
  name: 'ImageView',
  propTypes: {
    src: PropTypes.string,
    borderRadius: PropTypes.number,
    resizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch']),
    ...View.propTypes // include the default view properties
  },
};

module.exports = requireNativeComponent('RCTImageView', iface);
