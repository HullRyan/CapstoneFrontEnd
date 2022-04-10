/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 * @author Seth Adams <sadams65@uncc.edu>
 */

 import Head from "next/head";
 import Scroll from "../components/ScrollText";
 import LoadingScreen from "../components/LoadingScreen";
 import Image from "next/image";

 export default function Home(){
     return(
        <div>
            <div className="container">
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_1.jpg"
                    alt="Page1"
                ></img>
            </div>

            <style jsx>
					{`
						.container {
                            height: 759px;
                            width: 800px;
                            overflow: scroll;
                            display: block;
                            margin-left: auto;
                            margin-right: auto;
                        }
                        
                        
					`}
				</style>
        </div>         
     );
 }