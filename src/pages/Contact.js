import ButtonMailto from "../components/Email"
import Resume from "../Docs/MBCV WebD started PDF.pdf"

const Contact = () => {
    return <div className="contactPage">
        
        <header className="contactCard">
        Contact info:
            <ul>

                <li>GitHub profile: <a href="https://github.com/markruth2nd">
                github.com/markruth2nd </a></li>

        <li>LinkedIn page: <a href="https://github.com/markruth2nd">markruth2nd</a></li>

        <li>Email address: <ButtonMailto label="markruth2nd@ymail.com" mailto="mailto:markruth2nd@ymail.com" /></li>

        <li>Phone number: 07788269297</li>
        <br />
        Resume / CV: <a href={Resume} download="Resume">click to download!</a>
        </ul>
        </header>
        
    </div>
}

export default Contact