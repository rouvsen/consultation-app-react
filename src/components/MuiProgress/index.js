import { Stack, LinearProgress } from '@mui/material'

export const MuiProgress = ({ value }) => {
    return (
        <Stack>
            <LinearProgress variant='determinate' value={value} />
        </Stack>
    )
}

export default MuiProgress;