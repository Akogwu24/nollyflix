import { HStack } from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ rating }) => {
  return (
    <HStack>
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {rating > index ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </HStack>
  );
};

export default Rating;
