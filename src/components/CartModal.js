import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Box } from '@mui/material';

const CartModal = ({ open, onClose, cartItems }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>Carrito de Compras</DialogTitle>
            <DialogContent>
                {cartItems.length === 0 ? (
                    <Typography variant="body1">Tu carrito está vacío.</Typography>
                ) : (
                    <Box>
                        {cartItems.map((item, index) => (
                            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="body1">{item.name}</Typography>
                                <Typography variant="body2">Cantidad: {item.quantity}</Typography>
                                <Typography variant="body2">Precio: ${item.price.toFixed(2)}</Typography>
                            </Box>
                        ))}
                    </Box>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cerrar
                </Button>
                {cartItems.length > 0 && (
                    <Button onClick={() => alert('Procediendo a la compra')} color="secondary">
                        Comprar
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default CartModal;
