import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
export default function Hello() {
    return (
        <div>
            <div class="container">
                <h1>React Js with Vite</h1>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter name"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone No.</label>
                        <input
                            type="tel"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter phone no."
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                        <small id="emailHelp" class="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Address</label>
                        <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Address"
                        />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

if (document.getElementById("app")) {
    createRoot(document.getElementById("app")).render(<Hello />);
}
