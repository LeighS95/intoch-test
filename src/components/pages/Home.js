import React from 'react';
import Header from '../global/Header';
import Footer from '../global/Footer';
import './home.css';

function Home() {
    return (
        <div className="Page__Wrapper">
            {/* Made the header this way due to not making a json file for content or hardcodeing nav items */}
            <Header links={["Home", "sign-up"]} />
            <div className="Container">
                <div className="Hero">
                    <div className="Hero__Content">
                        <h1 className="Hero__Content_Title">Generic Hero Title</h1>
                        <p className="Hero__Content_Subtitle">Subtitle</p>
                    </div>
                </div>

                <div className="Section">
                    <div className="Section__Container">
                        <h2 className="Section__Container_Title">Section Title</h2>
                        <p className="Section__Container_Text">
                            Proin eu leo ut nulla placerat iaculis eu vitae ex. Mauris vel fermentum mi. Aliquam erat volutpat. Cras lobortis turpis non nunc dictum, convallis tempus est congue. Fusce volutpat ligula quis erat hendrerit, vitae aliquet ante auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt id nulla lacinia accumsan. Nullam in placerat neque. Aenean sodales leo vitae dignissim porta. Nunc id augue risus. Proin at est hendrerit, consequat ex id, mattis augue. Suspendisse non massa imperdiet, pharetra lacus ut, laoreet turpis. Proin semper neque auctor euismod pellentesque. Duis condimentum, risus commodo blandit sodales, magna urna lobortis tortor, sed ullamcorper magna nulla in nisi.
                        </p>
                    </div>
                </div>

                <div className="Section">
                    <div className="Section__Container">
                        <h2 className="Section__Container_Title">Section Title 2</h2>
                        <p className="Section__Container_Text">
                            Aliquam erat volutpat. Maecenas sed est vel lorem viverra lobortis eget non nisl. Etiam et ex porttitor metus sodales ultrices. Cras porta lorem mauris, nec consequat nulla bibendum eu. Aenean nunc sem, molestie quis justo venenatis, accumsan tincidunt felis. Duis vitae diam vitae arcu ultrices consequat. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis facilisis a risus ut pulvinar. Sed id mattis lacus, ut convallis urna.
                        </p>
                        <p className="Section__Container_Text">
                            Vestibulum malesuada pellentesque velit. Donec varius augue felis, ut gravida velit imperdiet eu. Donec nec sollicitudin dui, eu ornare tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam auctor bibendum metus et viverra. Proin tincidunt euismod turpis a tincidunt. Nunc lacinia et lorem a lacinia.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
)
}

export default Home;