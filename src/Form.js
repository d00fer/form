import { useFormik } from 'formik'

function Form() {
  const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'First Name is required'
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name is required'
    }

    if (!values.email) {
      errors.email = 'Email is required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }

    if (!values.password) {
      errors.password = 'Password is required'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      alert('Form successfully submitted')
    },
  })
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
        <form className="form" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <button type="submit">Claim your free trail</button>
          <small>
            By clicking the button, you are agreeing to our{' '}
            <span>Term & conditions </span>
          </small>
        </form>
      </aside>
    </div>
  )
}

export default Form
