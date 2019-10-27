import React, { Component } from 'react';
import { WebView, Modal, Share } from 'react-native';
import { Container, Header, Content, Body, Left, Icon, Right, Title, Button } from 'native-base';
import styles from './Modal.styles';
// create a component
class ModalComponent extends Component {

  constructor(props) {
    super(props);
    this.webViewRef = React.createRef();
  }

  handleBack = () => {
    this.webViewRef.current.goBack();
  }

  handleClose = () => {
    return this.props.onClose();
  }

  handleShare = () => {
    const { url, title } = this.props.articleData;
    message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  }

  render() {
    const { showModal, articleData } = this.props;
    const { url } = articleData;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >
          <Container style={styles.container}>
            <Header style={{ backgroundColor: '#009387' }}>
              <Left>
                <Button onPress={this.handleBack} transparent>
                  <Icon name="arrow-back" size={20} color='white' />
                </Button>
              </Left>
              <Body>
                <Title children={articleData.title} style={{ color: 'white' }} />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" size={20} color='white' />
                </Button>
                <Button onPress={this.handleClose} transparent>
                  <Icon name="close" size={20} color='white' />  
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{ flex: 1 }}>
              <WebView 
                source={{ uri: url }} 
                style={{ flex: 1 }}
                onError={this.handleClose} startInLoadingState
                scalesPageToFit
                ref={this.webViewRef}
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

//make this component available to the app
export default ModalComponent;