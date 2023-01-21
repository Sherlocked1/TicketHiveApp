import { Image, TouchableOpacity, View } from "react-native";
import StyledText from "../../core/components/styled_text";
import Movie from "../../core/models/movie";

const MovieItem = (props: MovieItemProps) => {
    const item = props.movie;

    return (
        <TouchableOpacity activeOpacity={0.7}
            style={{ width: props.width, height: props.height, marginHorizontal: 10 }}>
            <Image
                source={{ uri: item.image_url }}
                style={{ flex: 1, borderRadius: 20 }}
            />

            <StyledText fontWeight='SemiBold' fontSize={16}>{item.name}</StyledText>
            <StyledText fontWeight='Regular' fontSize={14}>
                {item.time}
            </StyledText>
        </TouchableOpacity>
    )

}

export type MovieItemProps = {
    width: number,
    height: number,
    movie: Movie
}

export default MovieItem;
