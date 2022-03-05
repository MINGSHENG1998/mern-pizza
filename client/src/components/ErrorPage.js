import React from "react";

export default function ErrorPage(error) {
  return (
    <div>
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>Oops!</h1>
            <h2>Something went wrong</h2>
          </div>
          <a href="/">Go TO Homepage</a>
        </div>
      </div>
    </div>
  );
}
