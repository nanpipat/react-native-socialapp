import React,{useState} from 'react'
import styled from 'styled-components'

import Text from '../components/Text'

export default SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <Container>
            <Main>
                <Text title semi center>Welcome back</Text>
            </Main>

            <Auth>
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

            <SignInContainer>
                {loading ?
                    (
                        <Loading />
                    ) :
                    (
                        <Text bold center color="#fff">Sign In</Text>
                    )}

            </SignInContainer>

            <SignUp onPress={() => navigation.navigate("SignUp")}>
                <Text small center>Not have accout ? <Text bold color="#8022d9">Sign Up!</Text></Text>
            </SignUp>

        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;

const Main = styled.View`
    margin-top: 100px;
`;

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

const SignInContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 6px;
`

const SignUp = styled.TouchableOpacity`
    margin-top: 16px;
`

const Loading = styled.ActivityIndicator.attrs(props => ({
    color: "#fff",
    size: "small"
}))``