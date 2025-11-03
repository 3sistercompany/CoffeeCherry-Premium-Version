 const subscribeForm = document.getElementById('subscribeForm');

subscribeForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent default submission

  const email = subscribeForm.email.value;

  try {
    const response = await fetch('https://formspree.io/f/xdklgjqr', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    });

    const data = await response.json();

    if (response.ok) {
      alert('Thank you! Your email has been submitted.');
      subscribeForm.reset();
    } else {
      alert(data.error || 'Error submitting form. Please try again.');
    }
  } catch (error) {
    alert('Network error. Please try again.');
    console.error(error);
  }
});
