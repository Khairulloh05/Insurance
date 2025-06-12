import '../Home/Home.css'
import Hero from '../../components/Hero/Hero'
import TypeOfInsurance from '../../components/TypeOfInsurance/TypeOfInsurance'
import Advantages from '../../components/Advantages/Advantages'
import Partners from '../../components/Partners/Partners'
import Accordion from '../../components/Accordion/AccordionComponent'

const Home = () => {
  return (
    <>
      <Hero />
      <TypeOfInsurance />
      <Advantages />
      <Partners />
      <Accordion />
    </>
  );
};

export default Home;
