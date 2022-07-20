import Button from '../../Components/Button';
import Paragraph from '../../Components/Paragraph';
import Heading from '../../Components/Heading';

const Start = ({ setView }) => (
  <section>
    <Heading Type='h1'>How well do you know your premier league players?</Heading>
    <Button theme='launch' onClick={() => setView(1)}>GO!</Button>
    <Paragraph>
      If you don't have the correct answer when the time runs out it's game over!
    </Paragraph>
  </section>
);

export default Start;
