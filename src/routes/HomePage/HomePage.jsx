import {Link} from "react-router-dom";
import Counter from "./Counter.jsx";
export default function(){
    return <>
        <div id="detail">
            <div className="bg-blue-500 text-white py-16">
                <h1 className="text-center text-4xl font-semibold">Welcome to our website</h1>
                <p className="text-center mt-4">This is a simple example of a home page design.</p>
            </div>

            <div className="container mx-auto px-4 py-12">
                <h2 className="text-center text-2xl font-semibold mb-8">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Feature 1</h3>
                        <p>Description of feature 1 goes here.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Feature 2</h3>
                        <p>Description of feature 2 goes here.</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Feature 3</h3>
                        <p>Description of feature 3 goes here.</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 py-12">
                <h2 className="text-center text-2xl font-semibold mb-8">Call to action</h2>
                <p className="text-center">Encourage visitors to perform a specific action, such as signing up or contacting you.</p>
                <div className="text-center mt-8">
                    <Link to="/register" className="bg-blue-500 text-white px-8 py-2 rounded">
                        Sign Up Now
                    </Link>
                    <br/>
                    <br/>
                    <div>
                        <Counter />
                    </div>
                </div>
            </div>

            <footer className="bg-blue-500 text-white py-4">
                <div className="text-center">&copy; Your Website Name. All rights reserved.</div>
            </footer>
        </div>
    </>;
}