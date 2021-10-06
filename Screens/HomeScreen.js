import React from 'react';
import { Button, Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableHighlight, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {createStackNavigator} from '@react-navigation/stack';



class HomeScreen extends React.Component {


   


    componentDidMount = async () => {
        console.log("\n\nHomeScreen component Did mount called")

        const { route } = this.props
        const USERNAME = route.params.user
        const PASSWORD = route.params.pass

        this.setState({
            userName: USERNAME,
            password: PASSWORD
        })

        console.log("\n\nParams USERNAME passed from Login Screen : " + USERNAME)

        fetch('https://api.coindesk.com/v1/bpi/currentprice.json', { method: 'GET' })

            .then(async (response) => {

                const data = await response.json()
                const USD = await data.bpi.USD

                await this.setState({
                    chartname: data.chartName,
                    USD_data: USD,
                    loading: true
                })

            })

            .catch(error => console.log("Error from fetch : " + error))


        // this.successResponse()
    }

    successResponse = () => {
        setTimeout(() => this.setState({ loading: false }), 5000)
    }

    loginCheck = () => {
        console.log("\n\nLogin Check function called")
        if (this.state.userName.length > 0) {

            this.setState({ loginStatus: true, loading: false }, () => { console.log("\n\nLogin Status state changed to True ") })
        }
        else
            this.setState({ loginStatus: false }, () => { console.log("\n\nLogin Status state changed to False ") })
    }

    listItemBox = (item) => {
        <View>
            {item.title}
        </View>
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };

    render() {

        return (
            <KeyboardAwareScrollView
                contentContainerStyle={styles.container}
                extraHeight={10}
            // enableOnAndroid={true}
            >
                <View style={styles.mainLoginContainer}>
                    <View style={{ height: '90%', width: '85%', flexDirection: 'row', backgroundColor: 'black', top: 40 }}>

                        <View style={{ width: '34%', flexDirection: 'column', backgroundColor: 'white' }}>
                            <View style={styles.WidthStyle}>
                                <Text>Title1</Text>
                            </View>
                            <View style={styles.WidthStyle}>
                                <Text>Symbol</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Rate</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Desc</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Rate_float</Text>
                            </View>
                        </View>

                        <View style={{ width: '33%', flexDirection: 'column', backgroundColor: 'white' }}>
                            <View style={{ width: '100%', height: '20%', backgroundColor: 'yellow' }}>
                                <Text>Title2</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Symbol</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Rate</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Desc</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Rate_float</Text>
                            </View>
                        </View>

                        <View style={{ width: '33%', flexDirection: 'column', backgroundColor: 'white' }}>
                            <View style={{ width: '100%', height: '20%', backgroundColor: 'yellow' }}>
                                <Text>Title3</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Symbol</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Rate</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Desc</Text>
                            </View>
                            <View style={{ width: '100%', height: '20%', borderBottomWidth: 1, borderColor: 'black' }}>
                                <Text>Rate_float</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </KeyboardAwareScrollView>
        )

    }

}



export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white'
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    mainLoginContainer: {
        flex: 9,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    WidthStyle:{
        width: '100%', 
        height: '20%', 
        backgroundColor: 'white' ,
         borderColor:'grey', 
         borderRadius:10, 
         borderWidth:6,
         borderTopWidth:20,
         borderBottomWidth:20

    },
 
})