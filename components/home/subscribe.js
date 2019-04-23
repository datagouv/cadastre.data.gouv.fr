import Section from '../section'
import Button from '../button'

export default () => (
  <Section background='grey'>
    <form action='https://gouv.us15.list-manage.com/subscribe/post?u=f4e80584578b65fde5aadffb6&amp;id=eb4b871a65' method='post' name='mc-embedded-subscribe-form' target='_blank' noValidate>
      <h1>Newsletter</h1>
      <div className='form__group'>
        <label htmlFor='form-email'>Pour être informé des nouveautés, inscrivez-vous à notre newsletter :</label>
        <div className='input__group'>
          <input type='email' value='' name='email' id='form-email' />
          <Button type='submit' name='subscribe' id='form-submit'>Inscription</Button>
        </div>
      </div>
    </form>
  </Section>
)
