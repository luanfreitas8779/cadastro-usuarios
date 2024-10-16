import { Button } from './styles'
import propTypes from 'prop-types'

function DefaultButton({children, theme, ...props}) {



    return(
        <Button theme={theme} {...props}>{children}</Button>
    )

}

DefaultButton.propTypes = {
    children: propTypes.node.isRequired,
    theme: propTypes.string

}

export default DefaultButton