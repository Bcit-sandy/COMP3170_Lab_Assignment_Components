import Info from "./Info";

function Book(props) {
  return (
    <div className="Book-container">
      <div className="Book-cover">
        <img className="Book-cover-image" src={props.cover} alt={props.alt} />
      </div>

      <p className="Book-author">{props.author}</p>
      <Info info={props.info} />
    </div>
  );
}
export default Book;