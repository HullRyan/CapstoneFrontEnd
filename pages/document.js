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
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_2.jpg"
                    alt="Page2"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_3.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_4.jpg"
                    alt="Page4"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_5.jpg"
                    alt="Page5"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_6.jpg"
                    alt="Page6"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_7.jpg"
                    alt="Page7"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_8.jpg"
                    alt="Page8"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_9.jpg"
                    alt="Page9"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_10.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_11.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_12.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_13.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_14.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_15.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_16.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_17.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_18.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_19.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_20.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_21.jpg"
                    alt="Page3"
                ></img>
                <img
                    src="/DocumentPhotos/Project Gemini Report-1 (1)1024_22.jpg"
                    alt="Page3"
                ></img>

                <div>
					<p>This was written by <u>Miguel Morel</u> & <u>Willis Reid</u></p>
				</div>
                
            </div>

            <div className="text">
				<p>*Written by <u>Miguel Morel</u> & <u>Willis Reid</u></p>
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
                            border: 8px solid black;
                            border-radius: 5px;
                        }
                        
                        .text {
                            font-size: 15px;
                            
                        }
					`}
				</style>
        </div>         
     );
 }