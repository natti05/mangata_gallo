import Feedback from '../components/Feedback';
import Form from '../components/Form';


function Contact() {
    return (
        <div>
            <div>
                <p>Telephone: 123 456 789</p>
                <p>Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div/>
            <h2>Opening Hours</h2>
          <table id='open'>
              <tr>
                  <th>Day </th>
                  <th>Opening hours</th>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr>
                  <td>Tuesday </td>
                  <td>10:00 - 18:00</td>
              </tr>
              <tr>
                  <td>Friday </td>
                  <td>10:00 - 18:00</td>
              </tr>
              <tr>
                  <td>Saturday </td>
                  <td>12:00 - 18:00</td>
              </tr>
              <tr>
                  <td>Sunday </td>
                  <td>12:00 - 17:00</td>
              </tr>
          </table>
        </div>
        <div>
            <Feedback/>
            <Form/>
        </div>
    </div>
    );

}

export default Contact;