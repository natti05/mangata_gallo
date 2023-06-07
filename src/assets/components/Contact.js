import '../assets/../css/Contact.css';
import Feedback from '../components/Feedback';
import Form from '../components/Form';
import {
    Table,Thead,Tbody,Tr,Th,Td,TableContainer,
  } from '@chakra-ui/react';

function Contact() {
    return (
    <div>  
        <div>
            <Feedback/>
            <Form/>
        </div>
        <hr style={{margin: 40 }}></hr>
        <div className='call'>
                <h2><b>You can also reach us:</b></h2>
                <p><b>Telephone:</b> 123 456 789</p>
                <p><b>Address:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        <div className='contact'>
            <TableContainer>
            <h1 style={{marginBottom: 20 }}><b>Opening Hours</b></h1>
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
        </div>   
    </div>
    
    );

}

export default Contact;