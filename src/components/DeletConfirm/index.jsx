import React from 'react';
import { ContainerMinor, Container, Button, ContainerButton } from './styles'


const ConfirmationModal = ({ isOpen, onCancel, onConfirm}) => {

    
    if (!isOpen) return null;

    return (
        <Container>
            <ContainerMinor>
                <h3>Atenção!</h3>
                <p>Esta ação não pode ser desfeita! Tem certeza que deseja continuar?</p>
                <ContainerButton>
                    <Button style={{background: "green"}} onClick={onConfirm}>Confirmar</Button>
                    <Button onClick={onCancel}>Cancelar</Button>
                </ContainerButton>
            </ContainerMinor>
        </Container>
    );
};

export default ConfirmationModal;