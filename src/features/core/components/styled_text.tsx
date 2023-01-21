import { Text, TextProps } from "react-native";


interface MyTextProps extends TextProps{
    fontSize:number;
    fontWeight:'ExtraLight' | 'Medium' | 'Regular' | 'SemiBold' | 'Bold',
    children:string,
}

const StyledText = (props:MyTextProps) =>{
    return (
        <Text {...props} 
        style={[{fontFamily:'Poppins-'+props.fontWeight , fontSize:props.fontSize},props.style]}>
            {props.children}
        </Text>
    )
}

export default StyledText;

// const StyledText = styled.Text<MyTextProps>`
//     color:white;
//     font-size: ${props=>props.fontSize}px;
//     font-family: 'Poppins-${props=>props.fontWeight}';
// `;
