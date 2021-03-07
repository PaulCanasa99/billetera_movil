import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { RNCamera } from 'react-native-camera';

export default class QRCamera extends Component{

    barcodeRecognized = ({ barcodes }) => {
        barcodes.forEach(barcode => console.warn(barcode.data))
    };

    render (){
        return(
            <View>
                <RNCamera
                    ref={ref => {
                    this.camera = ref;
                    }}
                    style={{
                    flex: 1,
                    width: '100%',
                    }}
                    onGoogleVisionBarcodesDetected={this.barcodeRecognized}
                    >
                </RNCamera>
            </View>
        );
    }
}
