import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import { useDispatch, useSelector } from 'react-redux';
import CardLoading from '../loading/CardLoading';
import { fetchTransaksiBuyer } from '../../redux/transaksi';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Transaction = () => {
    const dispatch = useDispatch()
    const transactionLog = useSelector(state => state.transaksi.transaksiBuyer)
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const loading = useSelector(state => state.product.loading)

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const toDate = (datenow) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const date = new Date(datenow)
        return (date.getDate() + " " + months[date.getMonth()] + ", " + addZero(date.getHours()) + ":" + addZero(date.getMinutes()))
    }

    React.useEffect(() => {
        dispatch(fetchTransaksiBuyer())
    }, []);

    console.log(transactionLog);
    return (
        <>
            <Box width={{ md: "70%", xs: "100%" }} mx={"auto"} mt={3}>
                <Toolbar position="relative">
                    <Link to={-1}>
                        <ArrowBackSharpIcon sx={{
                            display: { md: 'block', xs: 'none' }, borderRadius: '50px', background: 'white'
                            , zIndex: 100, padding: 1, cursor: 'pointer', '&:hover': {
                                opacity: [0.9, 0.8, 0.7],
                                color: 'purple'
                            }
                        }} />
                    </Link>
                    <Box
                        component={"div"}
                        position="absolute"
                        width={{ lg: "60%", md: "70%", sm: "70%", xs: "90%" }}
                        mx={"auto"}
                        sx={{ left: 0, right: 0, top: 0 }}
                    >
                        {Object.keys(transactionLog).length !== 0
                            ? transactionLog.map((res, index) => {
                                return (
                                    <Box
                                        component={"div"}
                                        rowGap={2}
                                        key={index}
                                        display={"flex"}
                                        mt={2}
                                        sx={{
                                            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                                            borderRadius: "16px",
                                            position: 'relative',
                                            width: '100%'
                                        }}
                                    >
                                        <Box p={2} width={'100%'}>

                                            <Grid container p={1}>
                                                <Grid
                                                    item
                                                    xs={12}
                                                    md={12}
                                                    display={"flex"}
                                                    textAlign={"center"}
                                                    alignItems={"center"}
                                                    justifyContent={'space-between'}
                                                >
                                                    <Box display={'flex'} alignItems={'center'}>
                                                        <ShoppingBagIcon sx={{ color: 'green', fontSize: '2.5rem' }} />
                                                        <Box display={'flex'} flexDirection={'column'}>
                                                            <Typography
                                                                variant="caption"
                                                                component="h2"
                                                                fontSize={{ md: ".8rem", xs: ".6rem" }}
                                                                display={'flex'}
                                                            >
                                                                Belanja
                                                            </Typography>
                                                            <Typography
                                                                variant="caption"
                                                                color="text.secondary"
                                                                component="h2"
                                                                fontSize={{ md: ".8rem", xs: ".6rem" }}
                                                            >
                                                                {toDate(res.updatedAt)}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    <Box sx={{ background: res.status == 'accepted' ? '#cff69b' : 'red', fontWeight: 'bold', py: .5, px: 1, borderRadius: '8px', color: res.status == 'accepted' ? '#467411' : 'red' }}>
                                                        {res.status == 'accepted' ? 'Selesai' : 'Ditolak'}
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={12}>
                                                    <Divider sx={{ mt: '0 !important', my: 1 }} />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs={4}
                                                    md={6}
                                                    xl={5}
                                                    display={"flex"}
                                                    textAlign={"center"}
                                                    alignItems={"center"}
                                                >
                                                    <Box
                                                        component={"img"}
                                                        src={res.product.images ? `https://be-kel1.herokuapp.com/public/images/${res.product.images[0]}` : ''}
                                                        sx={{ height: "auto", width: { xs: "100px", md: '200px' }, borderRadius: "16px", objectFit: 'contain' }}
                                                    />
                                                </Grid>
                                                <Grid item xs={8} md={6} xl={7}>
                                                    <Typography
                                                        variant="subtitle1"
                                                        fontWeight={550}
                                                        my={0}
                                                        fontSize={{ md: "1rem", xs: ".8rem" }}
                                                    >
                                                        {res.product.name}
                                                    </Typography>
                                                    <Typography
                                                        variant="subtitle1"
                                                        fontWeight={550}
                                                        my={0}
                                                        fontSize={{ md: "1rem", xs: ".8rem" }}
                                                    >
                                                        <s>{formatter.format(res.product.price)}</s>
                                                    </Typography>
                                                    <Typography
                                                        variant="subtitle1"
                                                        fontWeight={550}
                                                        my={0}
                                                        fontSize={{ md: "1rem", xs: ".8rem" }}
                                                    >
                                                        Ditawar {formatter.format(res.price)}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} gap={3} mt={3}>
                                                    <Link to={'/'} style={{ width: '100%', textDecoration: 'none',display:"flex", justifyContent:'center' }}>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            sx={{
                                                                width: { md: "40%", xs: "50%" },
                                                                height: "40px",
                                                                borderRadius: "25px",
                                                                fontSize: { md: 'unset', xs: '12px' }
                                                            }}
                                                        >
                                                            Lihat Produk Lain
                                                        </Button>
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                );
                            })

                            :
                            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Typography>
                                    Wishlist Kosong
                                </Typography>
                            </Box>
                        }
                    </Box>
                </Toolbar>
            </Box>
        </>
    )
}

export default Transaction