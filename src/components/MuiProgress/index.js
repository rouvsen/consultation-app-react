import { Stack, LinearProgress } from '@mui/material'

export const MuiProgress = () => {
    return (
        <Stack>
            <LinearProgress variant='determinate' value={50} />
        </Stack>
    )
}

export default MuiProgress;