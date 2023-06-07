import '../assets/../css/Contact.css';
import Feedback from '../components/Feedback';
import Form from '../components/Form';
import {
    Table,Thead,Tbody,Tr,Th,Td,TableContainer,Heading,
  } from '@chakra-ui/react';

function Contact() {
    return (
    <div>  
        <div>
            <Feedback/>
            <Form/>
        </div>
        <div className='contact'>
            <TableContainer>
            <Heading as='h3' size='lg'>Opening Hours</Heading>
                <Table>
                    <Thead>
                        <Tr>
                        <Th>Day </Th>
                        <Th>Opening hours</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>Tuesday </Td>
                        <Td>10:00 - 18:00</Td>
                    </Tr>
                    <Tr>
                        <Td>Friday </Td>
                        <Td>10:00 - 18:00</Td>
                    </Tr>
                    <Tr>
                        <Td>Saturday </Td>
                        <Td>12:00 - 18:00</Td>
                    </Tr>
                    <Tr>
                        <Td>Sunday </Td>
                        <Td>12:00 - 17:00</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <div className='call'>
                <div>
                <p><b>Telephone:</b> 123 456 789</p>
                <p><b>Address:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>    
    </div>
    
    );

}

export default Contact;