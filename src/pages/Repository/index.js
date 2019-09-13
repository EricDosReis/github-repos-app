import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

import Loader from '../../components/Loader';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  handleLoading = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    const { navigation } = this.props;
    const { loading } = this.state;

    const uri = navigation.getParam('repository').html_url;

    return (
      <WebView
        source={{
          uri,
        }}
        startInLoadingState={loading}
        onLoad={this.handleLoading}
        renderLoading={() => <Loader />}
      />
    );
  }
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
