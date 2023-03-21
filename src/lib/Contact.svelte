<script>
  import {dev} from '$app/environment'
  import {enhance} from '$app/forms'
  export let subject = 'Photography Shoot'
  export let inbox = 'bc9e8bcd4dde63a9a56610d20502ab2b'
  /** @type {string[]}  */
  export let blocklist = []
  export let instagramUrl = ''
</script>

<section>
  <div>
    <p>
      <strong> Check out my work</strong> and <strong>get in touch</strong> with <br /> me to schedule
      your shoot today.
    </p>
    <img class="divider" src="divider.svg" alt="divider" />
    <p>
      Message me on <a target="_blank" rel="noopener noreferrer" href={instagramUrl}>Instagram</a> to
      plan your shoot.
    </p>
  </div>
</section>
<section id="contact">
  <div>
    <p>Thank you for visiting my small town prairie portfolio!</p>
  </div>
</section>

<style>
  p {
    text-align: center;
  }
  section {
    padding-top: var(--space-5);
    background-color: var(--light);
    color: var(--dark);
  }

  @media (min-width: 768px) {
    section {
      display: flex;
      justify-content: center;
    }
    section > div {
      max-width: var(--content-max-width);
      margin: auto;
    }
  }
  section {
    padding-inline: var(--space-2);
  }

  textarea {
    resize: none;
  }
  section#contact {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section#contact p {
    margin-block: var(--space-2);
    font-size: var(--font-large);
    font-family: var(--font-accent);
    text-align: center;
  }

  section#contact form {
    clear: both;
    display: grid;
    gap: var(--space-1);

    padding-inline: var(--space-2);
  }
  form label {
    display: none;
  }

  form input,
  form textarea {
    display: block;
    padding: 1rem;
    border-radius: var(--br);
    border: none;

    -webkit-appearance: none;
    box-shadow: var(--shadow-inset-25);
  }

  form button {
    cursor: pointer;
    border: none;
    font-family: var(--font-accent);
    background: var(--dark);
    color: var(--light);
    padding: var(--space-1);
    border-radius: var(--br);

    -webkit-appearance: none;
    box-shadow: var(--shadow-25);
    transition: all 250ms ease-in-out;
  }
  form button:hover,
  form button:focus {
    outline: none;
    background: var(--dark-hover);
  }
  form button:active {
    outline: none;
    background: var(--dark-active);
  }

  .divider {
    display: block;
    margin: 0 auto;
    max-width: 500px;
    height: 100px;
  }
</style>
