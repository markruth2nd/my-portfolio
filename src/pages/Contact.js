import ButtonMailto from "../components/Email"
import Resume from "../Docs/MBCV WebD started PDF.pdf"

const Contact = () => {
    return <div className="contactCard">
        Contact info:
        <header>
            <ul>

                <li>GitHub profile: <a href="https://github.com/markruth2nd">
                github.com/markruth2nd </a></li>

        <li>LinkedIn page: <a href="https://github.com/markruth2nd">markruth2nd</a></li>

        <li>Email address: <ButtonMailto label="markruth2nd@ymail.com" mailto="mailto:markruth2nd@ymail.com" /></li>

        <li>Phone number: 07788269297</li>
        </ul>
        <br/>
        Resume / CV: <a href={Resume} download="Resume">click to download!</a>
        </header>
        
    </div>
}

export default Contact