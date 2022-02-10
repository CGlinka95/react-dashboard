import React from 'react'
import { IconButton } from '../../ui/buttons'
import {AppBarItem, AppBarItemGroup, AppBarItems, AppBarStyles, AppBarLayout } from './styles'

function AppBar (props) {
    return (
        <AppBarLayout>
            <AppBarStyles>
                <AppBarItems>
                    <AppBarItem>branding</AppBarItem>
                    <AppBarItemGroup>
                        <IconButton></IconButton>
                    </AppBarItemGroup>
                </AppBarItems>
            </AppBarStyles>
        </AppBarLayout>   
    )
}

export default AppBar