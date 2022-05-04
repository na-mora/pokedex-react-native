import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';


interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style = {} } : Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [ isLoading, setIsLoading ] = useState( true );

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };

    const onError = () => {
        setIsLoading( false );
    };

    return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            ...style as any,
        }}>

            {
                isLoading &&
                    <ActivityIndicator
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{ position: 'absolute' }}
                        color="grey"
                        size={ 30 }
                    />
            }

            <Animated.Image
                source={{ uri }}
                onError={ onError }
                onLoad={ finishLoading }
                style={{
                    ...style as any,
                    opacity,
                }}
            />

        </View>
    );
};
