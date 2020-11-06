import React from 'react'
import { IUser } from 'store/modules/auth/auth.types'

interface Props {
    user : IUser
}

export const UserProfile : React.FC<Props> = ({ user }) => {
    return (
        <div>
            {user.name}
        </div>
    )
}

