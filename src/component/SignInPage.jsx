import { SignUp } from '@clerk/clerk-react';

function CustomSignUp() {
  return (
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      appearance={{
        variables: {
          colorPrimary: '#1a73e8',
          colorText: '#333',
          fontFamily: 'Arial, sans-serif',
          borderRadius: '8px',
        },
        layout: {
          logoPlacement: 'top', // You can specify 'top', 'center', etc.
          socialButtonsPlacement: 'bottom', // Social buttons placement (top/bottom/none)
          showOptionalFields: false, // Toggle the visibility of optional fields
        },
      }}
      signUpFields={[
        {
          label: 'First Name',
          key: 'first_name',
          type: 'text',
          required: true, // Make this field required
        },
        {
          label: 'Last Name',
          key: 'last_name',
          type: 'text',
          required: true, // Make this field required
        },
        {
          label: 'Phone Number',
          key: 'phone_number',
          type: 'phone',
          required: false, // Optional field
        },
        {
          label: 'Custom Field',
          key: 'custom_field',
          type: 'text',
          required: false,
        },
      ]}
    />
  );
}

export default CustomSignUp;
