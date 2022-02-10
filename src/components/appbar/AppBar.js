import React from 'react'
import { IoEllipsisVertical, IoPersonCircleOutline, IoMailOutline, IoNotificationsOutline} from 'react-icons/io5'
import { IconButton } from '../../ui/buttons'
import { AppBarItem, AppBarItemGroup, AppBarItems, AppBarStyles, AppBarLayout } from './styles'

function AppBar (props) {
    return (
        <AppBarLayout>
            <AppBarStyles>
                <AppBarItems>
                    <AppBarItem>branding</AppBarItem>
                    <AppBarItemGroup>
                    <IconButton>
                            <IoMailOutline size="1.5rem" />
                        </IconButton>
                        <IconButton>
                            <IoNotificationsOutline size="1.5rem" />
                        </IconButton>
                        <IconButton>
                            <IoPersonCircleOutline size="2.75rem" />
                        </IconButton>
                        <IconButton>
                            <IoEllipsisVertical size="1.25rem" color="#999" />
                        </IconButton>
                    </AppBarItemGroup>
                </AppBarItems>
            </AppBarStyles>
        </AppBarLayout>   
    )
}

export default AppBar