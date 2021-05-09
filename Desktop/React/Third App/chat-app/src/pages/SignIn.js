import React from 'react';
import firebase from 'firebase/app';
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite'
import { auth, database } from '../misc/firebase'

const SignIn = () => {

    const signInWithProvider = async (provider) => {

        try{
            // eslint-disable-next-line no-unused-vars
            const { additionalUserInfo, user } = await auth.signInWithPopup(provider);


            if(additionalUserInfo.isNewUser) {
                await database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt : firebase.database.ServerValue.TIMESTAMP

                })
            }
            Alert.success('Signed In', 4000)
        } catch(err){
            Alert.error(err.messege, 4000)
        }
        

    }


    const onFaceboookSignIn = () => {
        signInWithProvider( new firebase.auth.FacebookAuthProvider())

    }

    const onGoogleSignIn = () => {
        signInWithProvider( new firebase.auth.GoogleAuthProvider())

    }
    return (
        <Container className="wall1"> 
            <Grid>
                <Row>
                    <Col xs={24} md={12} mdOffset={6}>
                        <Panel className="mt-page">
                            <div className="text-center mb-3">
                                <h2 style={{color: "wheat"}}>Welcome to Soft-Hub</h2>
                                <p style={{color: "wheat"}}>Where you can share knowledge</p>
                                <p className="signintext">Created by Januka Apps</p>
                            </div>
                            <div className="mt-4">
                                <Button block color="blue" onClick={onFaceboookSignIn}>
                                    <Icon icon="facebook" /> Continue with Facebook
                                </Button>
                            </div>
                            <div className="mt-2">
                                <Button block color="green" onClick={onGoogleSignIn}>
                                    <Icon icon="google" /> Continue with Google
                                </Button>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Container>
    )
}

export default SignIn
