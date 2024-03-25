import { ImageBackground, StyleSheet, Text, ScrollView, View, TextInput } from 'react-native';
import { useState } from 'react';
import { SearchBar, Card } from '@rneui/themed';
// import { validateEmail } from '../utils';

const LandingPage = ({ navigation }) => {
    const [search, setSearch] = useState("");
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    // SignUp/SignIn Toggle usestates
    const [email, setEmail] = useState(''); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('')

    const [confirmedUsername, setConfirmedUsername] = useState('')
    const [confirmedPass, setConfirmedPass] = useState('')
    

    const updateSearch = (search) => {
        setSearch(search);
    }
    const toggleSignIn = () => {
        setShowSignIn(!showSignIn);
        setShowSignUp(false); // Close sign-up form when opening sign-in form
    }
    const toggleSignUp = () => {
        setShowSignUp(!showSignUp);
        setShowSignIn(false); // Close sign-in form when opening sign-up form
    }

    return (
        <ScrollView style={landingPageStyling.container}>
            <ImageBackground source={{ uri: '' }} style={landingPageStyling.topBackground}> 
                <Text style={ landingPageStyling.title}>
                    Welcome to CookBook Corner
                </Text>
                <Text style={[landingPageStyling.signUp]} onPress={toggleSignUp}>
                    Sign Up
                </Text>
                {showSignUp && (
                    <View style={landingPageStyling.formContainer}>
                        <TextInput
                        style={landingPageStyling.input}
                        value={username}
                        onChangeText={setUsername}
                        placeholder='Username'
                        />
                        <TextInput
                        style={landingPageStyling.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email'
                        keyboardType='email-address' 
                        />
                         <TextInput
                        style={landingPageStyling.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Password'
                        secureTextEntry={true}
                        /> 
                        <TextInput
                        style={landingPageStyling.input}
                        value={confirmPass}
                        onChangeText={setConfirmPass}
                        placeholder='Confirm Password' 
                        secureTextEntry={true}
                        />
                        <Text style={[landingPageStyling.guest]} onPress={toggleSignUp} // have it navigate to the guest home screen when that gets set up
                        > Join as Guest</Text>
                    </View>
                )}
                <Text style={[ landingPageStyling.signIn]} onPress={toggleSignIn}>
                    Sign In
                </Text>
                {showSignIn && (
                    <View style={landingPageStyling.formContainer}>
                        <TextInput
                        style={landingPageStyling.input}
                        // value={confirmedUsername}
                        // onChangeText={setConfirmedUsername}
                        placeholder='Username' 
                        />
                        <TextInput
                        style={landingPageStyling.input}
                        // value={confirmedPass}
                        // onChangeText={setConfirmedPass}
                        placeholder='Password' 
                        secureTextEntry={true}
                        />
                        <Text style={[landingPageStyling.guest]} onPress={toggleSignUp} // have it navigate to the guest home screen when that gets set up
                        > Join as Guest</Text>
                    </View>
                )}
            <View style={ landingPageStyling.searchContainer }>
                <SearchBar ref={search => this.search = search} placeholder="Search Recipes" onChangeText={updateSearch} value={search} platform='android' style={ landingPageStyling.searchBar }/>
            </View>
            <Text style={landingPageStyling.subheading}>
                Trending
            </Text>
            <View style={landingPageStyling.trendingCards}>
                <Card containerStyle={{marginBottom: 10}}>
                    <Card.Image
                        style={landingPageStyling.cardImage}
                        source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                    />
                    <Card.Title>Trending 1</Card.Title>
                </Card>
                <Card containerStyle={{marginBottom: 10}}>
                    <Card.Image
                        style={landingPageStyling.cardImage}
                        source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                    />
                    <Card.Title>Trending 2</Card.Title>
                </Card>
            </View>
            <View style={landingPageStyling.trendingCards}>
                <Card containerStyle={{marginBottom: 10}}>
                        <Card.Image
                            style={landingPageStyling.cardImage}
                            source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                        />
                        <Card.Title>Trending 3</Card.Title>
                    </Card>
                    <Card containerStyle={{marginBottom: 10}}>
                        <Card.Image
                            style={landingPageStyling.cardImage}
                            source={{ uri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg' }}
                        />
                        <Card.Title>Trending 4</Card.Title>
                    </Card>
            </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default LandingPage

const landingPageStyling = StyleSheet.create({
    topBackground:{
        resizeMode: 'cover',
    },
    title:{
        fontSize: 45,
        textAlign: 'center',
        paddingTop: 60,
        padding: 25
    },
    signUp:{
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 15,
        textDecorationLine: 'underline'
    },
    signIn:{
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 15,
        borderBottomWidth: 2,
        textDecorationLine: 'underline'
    },
    formContainer:{
        backgroundColor: '#cccccc',
        padding:20,
        margin: 12,
        borderRadius:10,
    },
    input:{
        height: 40,
        width: 310,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    guest:{
        textAlign: 'center'
    },
    searchContainer:{
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 40,
        overflow: 'hidden',       
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    subheading:{
        fontSize: 17,
        textAlign: 'center',
        paddingTop: 15,
        padding: 5,
    },
    trendingCards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 140,
    },
    cardImage:{
        height: 70,
        width: 100
    },
})

