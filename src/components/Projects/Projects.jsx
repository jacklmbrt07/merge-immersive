import React from "react";
import { MDBContainer, MDBModalBody, MDBModal, MDBIframe } from "mdbreact";

const IframePage = (props) => {
    return (
        <MDBContainer className="text-center">
            <MDBModal size="lg">
                <MDBModalBody className="mb-0 p-0">

                    {props.user.projects.map((project, index) => (
                        <MDBIframe height={800} width={800} key={index} src={project || 'The world is awaiting your greatness'} />
                    ))}
                </MDBModalBody>
            </MDBModal>
        </MDBContainer>
    );
}

export default IframePage;