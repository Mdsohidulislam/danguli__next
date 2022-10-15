import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const AppRouter = () => {
    return (
        <div> 
            <Link href='/details/:'>details</Link>
            <Button color='secondary'>Hello world</Button>
        </div>
    );
};

export default AppRouter;