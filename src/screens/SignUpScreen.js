import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import Text from '../components/Text'

import { FirebaseContext } from '../context/FirebaseContext'
import { UserContext } from '../context/UserContext'


export default SignUpScreen = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const firebase = useContext(FirebaseContext)
    const [_, setUser] = useContext(UserContext);

    const signUp = async () => {
        setLoading(true)

        const user = { username, email, password }

        try {
            const createdUser = await firebase.createUser(user)

            setUser({ ...createdUser, isLoggedIn: true })
        } catch (error) {
            console.log("Error @signUp: ", error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Main>
                <Text title semi center>Register for start..</Text>
            </Main>

            <ProfilePhotoContainer>
                <DefaultProfilePhoto>
                    {/* <AntDesign name="plus" size={24} color="#fff"/> */}
                </DefaultProfilePhoto>
            </ProfilePhotoContainer>

            <Auth>
                <AuthContainer>
                    <AuthTitle>Username</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={true}
                        onChangeText={username => setUsername(username.trim())}
                        value={username}
                    />
                </AuthContainer>
                <AuthContainer>
                    <AuthTitle>Email Address</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        autoFocus={true}
                        keyboardType="email-address"
                        onChangeText={email => setEmail(email.trim())}
                        value={email}
                    />
                </AuthContainer>

                <AuthContainer>
                    <AuthTitle>Password</AuthTitle>
                    <AuthField
                        autoCapitalize="none"
                        autoCompleteType="password"
                        autoCorrect={false}
                        autoFocus={true}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password.trim())}
                        value={password}
                    />
                </AuthContainer>

            </Auth>

            <SignUpContainer onPress={signUp} disabled={loading}>
                {loading ?
                    (
                        <Loading />
                    ) :
                    (
                        <Text bold center color="#fff">Sign Up</Text>
                    )}

            </SignUpContainer>

            <SignIn onPress={() => navigation.navigate("SignIn")}>
                <Text small center>Already have account ? <Text bold color="#8022d9">Sign In!</Text></Text>
            </SignIn>



        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 100px;
`;

const ProfilePhotoContainer = styled.TouchableOpacity`
    background-color: #e1e2e6;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    align-self: center;
    margin-top: 16px;
    overflow: hidden;
`

const DefaultProfilePhoto = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`

const Auth = styled.View`
    margin: 64px 32px 32px;
`
const AuthContainer = styled.View`
    margin-bottom: 32px;
`
const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`
const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
`

const SignUpContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 6px;
`

const SignIn = styled.TouchableOpacity`
    margin-top: 16px;
`

const Loading = styled.ActivityIndicator.attrs(props => ({
    color: "#fff",
    size: "small"
}))``