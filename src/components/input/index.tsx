import {TextInputProps} from 'react-native'
import {Container} from './styles'
import { useTheme } from 'styled-components/native'

export function Input({...rest}:TextInputProps ){
    const {COLORS} = useTheme();

    return(
        <Container
            placeholder="Nome da Turma."
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    )
}