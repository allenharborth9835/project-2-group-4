async function newFormHandler(event){
  console.log(event)
  event.preventDefault();

  const event_name = document.querySelector('input[name="event-name"]').value;
  const event_date = document.querySelector('input[name="event-date"]').value;
  const location = document.querySelector('input[name="event-location"]').value;
  const zip = document.querySelector('input[name="event-zip"]').value;
  let event_category = ''

  if (document.querySelector('input[name="event-category"]:checked').value === "environmental") {
    let event_category = 1
    console.log(event_category)
  } else if (document.querySelector('input[name="event-category"]:checked').value === "fundraising/charity") {
    let event_category = 2
    console.log(event_category)
  } else if (document.querySelector('input[name="event-category"]:checked').value === "education") {
    let event_category = 3
    console.log(event_category)
  } else if (document.querySelector('input[name="event-category"]:checked').value === "animals") {
    let event_category = 4
    console.log(event_category)
  } else if (document.querySelector('input[name="event-category"]:checked').value === "social work") {
    let event_category = 5 
    console.log(event_category)}
    



  const response = await fetch(`/api/events`, {
    method: 'POST',
    body: JSON.stringify({
      event_name,
      event_date,
      location,
      zip,
      event_category
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-event-form').addEventListener('submit', newFormHandler);
