import {
  Badge,
  Button,
  Card,
  Flex,
  Heading,
  IconCheckCircle,
  IconFavorite,
  IconWhatshot,
  Image,
  Placeholder,
  Rating,
  Text,
  View,
} from '@aws-amplify/ui-react';

import { theme } from '../../../theme';
const { tokens } = theme;

export const ListingCard = ({
  title,
  rating,
  ratingCount,
  price,
  isLoaded,
  img,
  plus,
  verified,
  hot,
  description,
}: {
  title?: string;
  rating?: number;
  ratingCount?: number;
  price?: number;
  isLoaded?: boolean;
  img?: string;
  plus?: boolean;
  verified?: boolean;
  hot?: boolean;
  description?: string;
}) => (
  <Card
    padding={`${tokens.space.medium}`}
    borderRadius={`${tokens.radii.medium}`}
    width="30rem"
  >
    <Placeholder isLoaded={isLoaded}>
      <Flex direction="column" height="100%">
        <View height="200px">
          <Image
            src={img}
            alt="Glittering stream with old log, snowy mountain peaks tower over a green field."
            objectFit="cover"
            objectPosition="center"
            width="100%"
            height="100%"
            borderRadius={`${tokens.radii.medium}`}
          />
        </View>
        <Flex
          direction="column"
          gap={`${tokens.space.xs}`}
          className="flex-grow"
        >
          <Flex gap={`${tokens.space.xs}`}>
            {plus ? (
              <Badge variation="success">
                <IconFavorite /> Favorite
              </Badge>
            ) : null}
            {verified ? (
              <Badge variation="info">
                <IconCheckCircle /> Verified
              </Badge>
            ) : null}
            {hot ? (
              <Badge variation="error">
                <IconWhatshot /> Hot
              </Badge>
            ) : null}
          </Flex>

          <Flex gap={`${tokens.space.xxs}`} direction="column">
            <Heading level={4}>{title}</Heading>
            <Flex alignItems="center">
              <Rating value={rating} maxValue={5} />
              <Text variation="tertiary" fontSize="0.75rem">
                {ratingCount} reviews
              </Text>
            </Flex>
            <Text variation="secondary">{description}</Text>
          </Flex>
          <Text>
            <b>${price}/</b>night
          </Text>
        </Flex>
        <Button isFullWidth={true} variation="primary">
          Book it
        </Button>
      </Flex>
    </Placeholder>
  </Card>
);
