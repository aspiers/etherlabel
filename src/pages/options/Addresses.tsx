import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import LocalAddressBook from './LocalAddressBook';

export default function Addresses() {
  return (
    <Accordion defaultExpanded={true}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography variant="h4" component="h2">
          Local addressbook
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <LocalAddressBook />
      </AccordionDetails>
    </Accordion>
  );
}