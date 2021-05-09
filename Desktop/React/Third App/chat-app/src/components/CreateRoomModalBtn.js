import React, { useCallback, useRef, useState } from 'react'
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup, Icon, Modal, Schema } from 'rsuite';
import firebase from 'firebase/app';
import { useModalState } from '../misc/custom-hooks';
import { auth, database } from '../misc/firebase';

const { StringType } = Schema.Types;

const model = Schema.Model({
    name: StringType().isRequired('Chat name is required'),
    description: StringType().isRequired('Description is required')
})

const INITIAL_FORM = {
    name : '',
    description : ''
}

const CreateRoomModalBtn = () => {

    // eslint-disable-next-line no-unused-vars
    const { isOpen, open, close } = useModalState()

    const [formValue, setFormValue] = useState(INITIAL_FORM)

    const [isLoading, setIsLoading] = useState(false);

    const formRef = useRef();


    const onFormChange = useCallback(value => {
        setFormValue(value);
    }, [])

    const onSubmit = async () => {
        if(!formRef.current.check()){
            return;
        }
        
        setIsLoading(true);

        const newRoomData = {
            ...formValue,
            createdAt : firebase.database.ServerValue.TIMESTAMP,
            admins : {
                [auth.currentUser.uid] : true
            }
        }

        try {
            await database.ref('rooms').push(newRoomData);
            Alert.info(`${formValue.name} has been created`, 4000)

            setIsLoading(false);
            setFormValue(INITIAL_FORM);
            close();
            
        } catch (err) {
            setIsLoading(false);
            Alert.error(err.message, 4000);
        }
    }

    return (
        <div className="mt-2">
            
            

            <Button block color="green" onClick={open}>
                <Icon icon="creative" /> Create new channel
            </Button>

            <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>
                        New channel
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form fluid onChange={onFormChange} formValue={formValue} model={model} ref={formRef}>
                        <FormGroup>
                            <ControlLabel>Channel name</ControlLabel>
                            <FormControl name="name" placeholder="Enter channel name..." />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea" rows={5} name="description" placeholder="Enter channel description..." />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button block appearance="primary" onClick={onSubmit} disabled={isLoading}>
                        Create new channel
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default CreateRoomModalBtn
