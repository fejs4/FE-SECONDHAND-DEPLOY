import { Box, Button, Grid, InputAdornment, Modal, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteWishlist, fetchWishlist } from "../../../redux/wishlist";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { md: '300px', xs: '300px' },
    height: { md: '158px', xs: '400px' },
    bgcolor: 'background.paper',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '16px',
    p: '1rem 2rem 2rem 2rem',
};


const ModalDeleteWishlist = ({ data, open, handleClose, handlePost }) => {
    const [price, setPrice] = React.useState()
    const dataUser = useSelector(state => state.auth.userProfile)
    const detailProduct = useSelector(state => state.product.detailProduct)
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const wishlistAmbil = useSelector((state) => state.wishlist.wishlist);
    const handleDelete = (id) => {
        dispatch(deleteWishlist(id))
      }
    
      React.useEffect(() => {
        dispatch(fetchWishlist());
      }, [dispatch, handleDelete]);

    
    // {Object.keys(wishlistAmbil).length !==0 ? 
        wishlistAmbil.map((res) => {
            return (
    //     <Modal
    //     open={open}
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    // >
    //     <Box sx={style}>
    //         <Box display={'flex'} justifyContent={'flex-end'}>
    //             <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
    //         </Box>
    //         <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2, fontSize: '14px', fontWeight: 700 }}>
    //             Apakah kamu yakin ingin menghapusnya?
    //         </Typography>
    //         <Button onClick={handleClose} variant='contained' fullWidth color='primary' sx={{ borderRadius: '16px', height: '48px', marginTop: 2 }}>
    //             Batal
    //         </Button>
    //         <Button variant='contained' fullWidth color='primary' sx={{ borderRadius: '16px', height: '48px', marginTop: 2 }}>
    //             Hapus
    //         </Button>
    //     </Box>
    // // </Modal>
        <>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box display={'flex'} justifyContent={'flex-end'}>
                        <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                    </Box>
                    <Typography id="modal-modal-description" variant='h6' sx={{ mt: 2, fontSize: '14px', fontWeight: 700 }}>
                        Apakah kamu yakin ingin menghapusnya?
                    </Typography>
                    <Grid container spacing={1} mt={2} item xs={12} justifyContent={'center'}>
                    <Grid item xs={4}>
                    <Button onClick={handleClose} variant='outlined' fullWidth color='primary' sx={{ borderRadius: '16px', height: '48px', marginTop: 2 }}>
                        Batal
                    </Button>
                    </Grid>
                    <Grid item xs={4}>
                    <Button 
                    onClick={() => handleDelete(res.id)}
                    variant='contained' fullWidth color='primary' sx={{ borderRadius: '16px', height: '48px', marginTop: 2 }}>
                        Hapus
                    </Button>
                    </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}) 
// : "" }
}

export default ModalDeleteWishlist