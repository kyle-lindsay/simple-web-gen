import Button from "../components/Button";

function Start() {
  return (
      <main className="container">
        <h1>Simple<span className= "col-accent">Web</span>Gen</h1>

        <p className="description">SimpleWebGen is a lightweight, easy to use website generator perfect for creating responsive static web pages. Create good looking websites with no previous experience just by defining your content and pressing generate.</p>

        <div className="select-mode">
            <Button type="link" url="/create" text="Create New"/>
            <Button type="link" url="/upload" text="Upload Existing"/>
        </div>
      </main>
  );
}

export default Start;