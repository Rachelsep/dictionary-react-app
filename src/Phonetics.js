export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="phonetics">
      <p>Text: {props.phonetics.text}</p>
      <a href={props.phonetics.audio}>Audio</a>
    </div>
  );
}
