import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Info from '.components/Info';

export default function App() {
    return (

        <View style={StyleSheet.container}>

            {/* Today's Tasks */}
            <View style={StyleSheet.tasksWrapper}>
                <Text style={styles.sectionTitle}>Resources</Text>
    
            <View style={styles.items}>
                {/* Where info will be moved to */}
                <Info text={'Events Tab: '} /> 
                <a href= "https://newpaltz.campuslabs.com/engage/events"></a>
                <Info text={'Networking: '} />
                <a href= "www.newpaltz.edu/careers/"></a>
                <Info text={'Workshops: '} />
                <a href= "www.newpaltz.edu/careers/"></a>
                <Info text={'Internship/Job Application: '} />
                <a href=  "www.newpaltz.edu/careers/"></a>
                <Info text={'Club Announcements: '} />
                <a href=  "https://newpaltz.campuslabs.com/engage/organizations"></a>
                <Info text={'Academic Resources: '} />
                <a href=  "www.newpaltz.edu/schoolofbusiness"></a>
            </View>

        </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontsize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    }
})

{/*
    <Info text={'Events Tab:'} /> 
    <a href= "https://newpaltz.campuslabs.com/engage/events"></a>
    <text>Networking: </text>
    <a href= "www.newpaltz.edu/careers/"></a>
    <text>Workshops: </text>
    <a href= "www.newpaltz.edu/careers/"></a>
    <text>Internship/Job Application: </text>
    <a href=  "www.newpaltz.edu/careers/"></a>
    <text>Club Announcements: </text>
    <a href=  "https://newpaltz.campuslabs.com/engage/organizations"></a>
    <text>Academic Resources: </text>
    <a href=  "www.newpaltz.edu/schoolofbusiness"></a>
    */}