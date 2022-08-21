export const validateForm = (values: AddNewFormType) => {
    let errors = {
      subject: '',
      issue: '',
      details: '',
    }
    Object.keys(errors).map(key => {
      if (!values[key as keyof AddNewFormType]) {
        errors[key as keyof AddNewFormType] = `${key} is required`;
      }
    })
    if (values.subject.length < 4) {
      errors.subject = 'subject must be more than 4 characters'
    }
    if (values.subject.length > 10) {
      errors.subject = 'subject cannot exceed more than 10 characters'
    }
    return errors
  }

