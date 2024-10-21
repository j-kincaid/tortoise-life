
// // Define the handleClick function

function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    // Pass the handleClick function as a prop to the button element. handleClick is an event handler.

    <button onClick={handleClick}>
      Click me
    </button>
  );
}
// Because event handlers are declared inside of a component, they have access to the component's props. This button, when clicked, shows an alert with its message prop:

function AlertButton({ message, children}) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}


function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image
    </Button>
  );
}

// Often you'll want the parent component to specify a child's event handler. Consider buttons: depending on where you're using a Button component, you might want to execute a different function-- perhaps one that plays a movie and another uploads an image. 

// To do this, pass a prop the component from its parent as the even handler like so:

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }
  return (
    <button onClick={handlePlayClick}>
      Play "{movieName}"
    </button>
  );
}


// function Toolbar() {
//   return (
//     <div>

//       <AlertButton message="Playing!">
//         Play Movie
//       </AlertButton>
//       <AlertButton message="Uploading!">
//         Upload Image
//       </AlertButton>
//     </div>
//   );
// }


export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}