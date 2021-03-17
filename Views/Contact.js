import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Info from '.components/Info';


export default function App() {
    return (

        <View style={StyleSheet.container}>

            {/* Today's Tasks */}
            <View style={StyleSheet.tasksWrapper}>
                <Text style={styles.sectionTitle}>Contact Us</Text>
    
            <View style={styles.items}>
                {/* Where info will be moved to */}
                <Info text={'Facebook: '} /> 
                <a href= "https://www.facebook.com/SUNYNewPaltzSoB"></a>
                <Info text={'Instagram: '} />
                <a href= "www.instagram/npbusiness"></a>
                <Info text={'LinkedIn: '} />
                <a href= "https://www.linkedin.com/company/12634419/admin/"></a>
                <Info text={'Class groups with CircleIn: '} />
                <a href=  "https://app.circleinapp.com/"></a>
            </View>

        </View>
        </View>

    );
}

{/*
<View>
    <text>Contact Us</text>
    <text>Facebook: </text> 
    <a href= "https://www.facebook.com/SUNYNewPaltzSoB"></a>
    <text>Instagram: </text>
    <a href= "www.instagram/npbusiness"></a>
    <text>LinkedIn: </text>
    <a href= "https://www.linkedin.com/company/12634419/admin/"></a>
    <text>Class groups with CircleIn: </text>
    <a href=  "https://app.circleinapp.com/"></a>
</View>
*/}