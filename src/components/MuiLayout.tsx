import { Box, Stack, Divider, Grid, Paper } from "@mui/material"


export const MuiLayout = () => {
    return (


        <>
            <Paper elevation = {3} sx = {{
                padding : '32px',
                

            }}/>
            <Divider>
            </Divider>
            {/* 
                Stack component
        */}
            
            <Stack

                direction='row'
                spacing={2}
                sx={{ border: '1px solid', width: '50vw' }}
                divider={<Divider orientation='vertical' flexItem />}

            >

                {/*Box with Sx styles*/}
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        padding: '16px',
                        '&:hover': {
                            backgroundColor: 'primary.light',
                        },

                    }}
                >

                    Sx Styles

                </Box>
                {/* 
                Box with default MUI styles
                p = padding 

            */}
                <Box
                    display='flex'
                    height='100px'
                    width='100px'
                    bgcolor='success.light'
                    p={2}
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                >
                    Default Styles
                </Box>
            </Stack>
            <Grid container my = {4}>
                <Grid item xs = {6}   ><Box bgcolor = "primary.light" p = {2}>Item 1</Box></Grid>
                <Grid item xs = {6}   ><Box bgcolor = "primary.light" p = {2}>Item 2</Box></Grid>
                <Grid item xs = {6}   ><Box bgcolor = "primary.light" p = {2}>Item 3</Box></Grid>
                <Grid item xs = {6}   ><Box bgcolor = "primary.light" p = {2}>Item 4</Box></Grid>

            </Grid>

        </>
    )
}
