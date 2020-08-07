import React from 'react'

const Header = (props) => {
    const className = props.primary ? 'primary' : ''
    return (
        <div>
            <div className={`${className} font-xlw`}>
                <p className="bigWords">My Personal Portfolio with React</p>
            </div>
        </div>
    )
}

export default Header
