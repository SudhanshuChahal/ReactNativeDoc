import { ImageSourcePropType, View } from 'react-native';
import { Image } from 'expo-image';

type Props = {
    imageSize: number;  // a value defined inside the Index component.we will use this value to scale the image's size when tapped.
    stickerSource: ImageSourcePropType; // the source of the selected emoji image.
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    return (
        <View style={{ top:-350 }} >
            <Image source={stickerSource} style={{ width: imageSize, height: imageSize}} />
        </View>
    );
}