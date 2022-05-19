import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

// Allows user to toggle light/dark mode

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue('purple', 'blue')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
        ></IconButton>
      )
}
    
export default ThemeToggleButton
    

