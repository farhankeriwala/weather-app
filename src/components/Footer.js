import "bootstrap/dist/css/bootstrap.css"
const Footer = () =>{
    return(
        <footer className={"text-center"}>
            <p className={"text-dark-emphasis m-0"}>This Application uses the OpenWeather API.</p>
            <small className={"m-0"}><strong>Disclaimer</strong>: Weather only displayed for cities with population greater than 100,000.</small>
            <p className={"text-dark-emphasis m-0"}>Created by Farhan Keriwala</p>
        </footer>
    )
}

export default Footer;