function Form() {
  return (
    <div className="sub">
      <aside>
        <h1>Let's learn Hegel</h1>
        <p>
          Nothing great in the world has ever been accomplished without passion.
        </p>
      </aside>
      <aside>
        <p className="promo">
          <strong>Try it free for 7 days</strong> then £40/month
        </p>
        <form className="form">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button type="submit">Claim your free trail</button>
          <small>
            By clicking the button, you are agreeing to our{' '}
            <span className="terms">Term & conditions </span>
          </small>
        </form>
      </aside>
    </div>
  )
}

export default Form
