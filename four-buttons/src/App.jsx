// Project #7

// Create four different buttons:

// Button 1: Create a button that triggers an alert when it is clicked.
 function ButtonOne() {
  return (
    <button>
      I am a trigger
    </button>
  );
}
function ButtonWithHandler() {
	function handleClick() {
		alert('Good choice.');
	}
	return (
		<button onClick={handleClick}>
		Button One
		</button>
	);
}

// Button 2: Create a button that triggers a console log when it is clicked.

function EventHandlerProps({message, children}) {
  return (
    <button onClick={() => console.log(message)}>
      {children}
    </button>
  );
}
// Button 3: Create a button that becomes disabled and changes the text when it is clicked.

// Button 4: Create a button that triggers an alert when it is DOUBLE clicked.

export default function App() {

  return (
    <>
  <ButtonOne />
  <ButtonWithHandler />
  <EventHandlerProps />
</>
  )
}