import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AccordionComponent.css'
import Logo from '../../assets/icons/logo3.png'

const AccordionComponent = () => {
  return (
    <div className='container AccordionComponent' id='questions'>
      <h2 className='accordion-title'>Ответы на ваши вопросы</h2>
      <Accordion className='Accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className='acc-title'
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className='acc-title'
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <br />
      <div className="call-centre header-bottom">
        <img src={Logo} alt="Logo Ali Insurance" className="header-bottom-left" />
        <div className="tel">
          <h3>+996 509 346 146</h3>
          <p>Консультации по телефону</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionComponent